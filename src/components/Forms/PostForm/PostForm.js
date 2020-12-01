import React, { Fragment, useEffect, useRef, useState } from 'react'
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import { Archive, Delete, Save } from '@material-ui/icons'
import useStyles from './useStyles'

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
  const editorRef = useRef()
  const [content, setContent] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [archived, setArchived] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    if (isEditing && blog) {
      setContent(() => blog.content)
      setArchived(() => blog.status === 'archived')
    }
  }, [isEditing, blog, archived])

  const handleEditorChange = () => {
    setContent(() => editorRef.current.editor.getContents())
  }

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

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: isEditing && blog ? blog.title : '',
        description: isEditing && blog ? blog.description : '',
        status: isEditing && blog ? blog.status : 'draft',
        category: isEditing && blog ? blog.category : ''
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
          const result = await onSubmit(values)

          if (result) {
            if (!isEditing) {
              setContent(() => null)
              resetForm()
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
            <InputLabel id="category">Category</InputLabel>
            <Select
              name="category"
              labelId="category"
              label="Category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.category && errors.category)}
            >
              {CATEGORIES.map(({ value, text }, index) => (
                <MenuItem key={index} value={value}>
                  {text}
                </MenuItem>
              ))}
            </Select>
            {Boolean(touched.category && errors.category) && (
              <FormHelperText className="Mui-error">
                {touched.category && errors.category}
              </FormHelperText>
            )}
          </FormControl>
          <SunEditor
            ref={editorRef}
            name="content"
            setOptions={{
              height: 400,
              width: '100%',
              buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike'],
                ['removeFormat'],
                ['fontColor', 'hiliteColor'],
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video'],
                ['fullScreen', 'showBlocks'],
                ['preview']
              ],
              placeholder: 'Blog content...'
            }}
            setContents={content}
            onChange={handleEditorChange}
            disable={archived}
          />
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
                variant="outlined"
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                startIcon={<Delete />}
              >
                Delete
              </Button>
            )}
            {isEditing && !archived && (
              <Fragment>
                <Button
                  color="default"
                  variant="outlined"
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
                color="secondary"
                variant="outlined"
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
