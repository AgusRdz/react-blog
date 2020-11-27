import React, { useRef, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import { BlogService } from 'services/api/blog'

const CreatePost = () => {
  const editorRef = useRef()
  const [content, setContent] = useState(null)

  const handleEditorChange = () => {
    setContent(() => editorRef.current.editor.getContents())
  }

  const handleSave = async (values, resetForm) => {
    const { error = null } = await BlogService.create({ ...values, content })

    if (error) {
      console.log(error)
      return
    }

    setContent(() => null)
    resetForm()
  }

  return (
    <Paper elevation={8}>
      <Card>
        <CardHeader title="Create Post" />
        <CardContent>
          <Formik
            initialValues={{
              title: '',
              description: '',
              status: 'draft'
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string().max(150).required('Title is required'),
              description: Yup.string()
                .max(150)
                .required('Description is required'),
              status: Yup.string()
                .oneOf(
                  ['draft', 'published'],
                  'Save as must be one of the following values: Draft, Published'
                )
                .required('Save as is required')
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting, resetForm }
            ) => {
              try {
                handleSave(values, resetForm)
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
                />
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
                />
                <FormControl
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                >
                  <InputLabel id="status">Save As</InputLabel>
                  <Select
                    name="status"
                    labelId="status"
                    label="Save As"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="published">Published</MenuItem>
                  </Select>
                  {Boolean(touched.status && errors.status) && (
                    <FormHelperText>
                      {touched.status && errors.status}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl margin="normal" style={{ float: 'right' }}>
                  <Button
                    color="secondary"
                    variant="outlined"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Save
                  </Button>
                </FormControl>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Paper>
  )
}

export default CreatePost
