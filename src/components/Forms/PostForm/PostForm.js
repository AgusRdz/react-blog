import React, { Fragment, useCallback, useEffect, useState } from 'react'
import {
  Button,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Archive, Delete, Save } from '@material-ui/icons'
import useStyles from './useStyles'
import { Autocomplete } from '@material-ui/lab'
import hljs from 'utils/highlight'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useHistory } from 'react-router-dom'
import { TagService } from 'services/api/tag'
import 'styles/monokai-sublime.css'

// Quill.register('modules/imageUploader', ImageUploader)
// yarn add quill-image-uploader

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    [{ size: ['small', false, 'large'] }],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  },
  syntax: { highlight: (text) => hljs.highlightAuto(text).value }
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block'
]

const CATEGORIES = [
  { value: 'angular', text: 'Angular' },
  { value: 'aws', text: 'AWS' },
  { value: 'code', text: 'Code' },
  { value: 'es6', text: 'ES6' },
  { value: 'git', text: 'GIT' },
  { value: 'javascript', text: 'Javascript' },
  { value: 'laravel', text: 'Laravel' },
  { value: 'mongo', text: 'Mongo' },
  { value: 'mysql', text: 'MySQL' },
  { value: 'nodejs', text: 'NodeJS' },
  { value: 'php', text: 'PHP' },
  { value: 'postgresql', text: 'PostgreSQL' },
  { value: 'postman', text: 'Postman' },
  { value: 'python', text: 'Python' },
  { value: 'react', text: 'React' },
  { value: 'terminal', text: 'Terminal' }
]

const PostForm = ({
  onSubmit,
  isEditing = false,
  blog = null,
  onArchive,
  onDelete
}) => {
  const [content, setContent] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [archived, setArchived] = useState(false)
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [category, setCategory] = useState('')
  const classes = useStyles()
  const history = useHistory()

  const fetchTags = useCallback(async () => {
    const { data, error = null } = await TagService.index()
    if (error) return
    setTags(() => data.tags)
  }, [])

  useEffect(() => {
    if (isEditing && blog) {
      const { content, tags, status, category } = blog
      setContent(() => content)
      setSelectedTags(() => tags || [])
      setArchived(() => status === 'archived')
      setCategory(() => category)
    }
  }, [isEditing, blog, archived])

  useEffect(() => {
    fetchTags()
  }, [fetchTags])

  const handleEditorChange = (value) => setContent(() => value)

  const handleArchive = async () => {
    setIsDeleting(() => true)
    const result = await onArchive()

    if (result) {
      setArchived(() => blog.status === 'archived')
    }
    setIsDeleting(() => false)
  }

  const handleDelete = async () => {
    setIsDeleting(() => true)
    await onDelete()
  }

  const handleTagsChange = (e, value) => setSelectedTags(() => value)

  const handleCategoryChange = (e, value) =>
    setCategory(() => value.toLowerCase())

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: isEditing && blog ? blog.title : '',
        description: isEditing && blog ? blog.description : '',
        status: isEditing && blog ? blog.status : 'draft',
        category: isEditing && blog ? blog.category : '',
        tags: isEditing && blog ? blog.tags : []
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().max(150).required('Title is required'),
        description: Yup.string().max(150).required('Description is required'),
        status: Yup.string()
          .oneOf(
            ['draft', 'published'],
            'Status must be one of the following values: Draft, Published'
          )
          .required('Status is required'),
        category: Yup.string().required('Category is required')
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          values.content = content || ''
          values.tags = selectedTags || null
          values.category = category || ''
          const result = await onSubmit(values)

          if (result) {
            if (!isEditing) {
              setSelectedTags(() => [])
              setContent(() => null)
              resetForm()
              history.push('/dashboard/posts')
            }
          }
        } catch (error) {
          setStatus(() => {
            return { success: false }
          })
          setErrors(() => {
            return { submit: error.message }
          })
          setSubmitting(() => false)
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.title && errors.title)}
            helperText={touched.title && errors.title}
            value={values.title}
            fullWidth
            size="small"
            label="Title"
            name="title"
            onBlur={handleBlur}
            onChange={handleChange}
            variant="outlined"
            disabled={archived}
          />
          <TextField
            error={Boolean(touched.description && errors.description)}
            helperText={touched.description && errors.description}
            value={values.description}
            fullWidth
            size="small"
            label="Description"
            name="description"
            onBlur={handleBlur}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            disabled={archived}
          />
          <FormControl
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            disabled={archived}
          >
            <Autocomplete
              name="category"
              onChange={handleCategoryChange}
              options={CATEGORIES.map(({ text }) => text)}
              value={
                (category &&
                  CATEGORIES.filter(({ value, text }) => category === value)[0]
                    .text) ||
                ''
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Categories"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            {Boolean(touched.category && errors.category) && (
              <FormHelperText className="Mui-error">
                {touched.category && errors.category}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
          >
            <ReactQuill
              theme="snow"
              defaultValue={content}
              value={content}
              modules={modules}
              formats={formats}
              bounds={'#editor'}
              onChange={handleEditorChange}
              className={classes.toolbar}
            />
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            disabled={archived}
          >
            <Autocomplete
              name="tags"
              multiple
              onChange={handleTagsChange}
              options={tags.map((value) => value)}
              value={selectedTags}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Tags"
                  size="small"
                />
              )}
            />
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            disabled={archived}
          >
            <InputLabel id="status">Status</InputLabel>
            <Select
              name="status"
              labelId="status"
              label="Status"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.status && errors.status)}
            >
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
              <MenuItem value="archived" className={classes.hide}>
                Archived
              </MenuItem>
            </Select>
            {Boolean(touched.status && errors.status) && (
              <FormHelperText className="Mui-error">
                {touched.status && errors.status}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.actions}>
            {blog && (
              <Button
                color="default"
                variant="contained"
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                startIcon={<Delete />}
              >
                Delete Permanently
              </Button>
            )}
            {isEditing && !archived && (
              <Fragment>
                <Button
                  color="default"
                  variant="contained"
                  type="button"
                  onClick={handleArchive}
                  disabled={isDeleting}
                  startIcon={<Archive />}
                >
                  Archive
                </Button>
              </Fragment>
            )}
            {!archived && (
              <Button
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                type="submit"
                startIcon={<Save />}
              >
                Save
              </Button>
            )}
          </FormControl>
        </form>
      )}
    </Formik>
  )
}

export default PostForm
