import { Card, CardContent, CardHeader, Paper } from '@material-ui/core'
import PostForm from 'components/Forms/PostForm'
import useToastContext from 'hooks/useToastContext'
import React, { useCallback, useEffect, useState } from 'react'
import { BlogService } from 'services/api/blog'
import { useHistory } from 'react-router-dom'

const EditPost = ({ location }) => {
  const history = useHistory()
  const [blog, setBlog] = useState(null)
  const addToast = useToastContext()
  const {
    state: { id }
  } = location

  const fetchBlog = useCallback(async () => {
    const { data, error = null } = await BlogService.edit(id)

    if (error) {
      addToast({ severity: 'error', message: error })
    }

    setBlog(() => data.blog)
  }, [id, addToast])

  useEffect(() => {
    fetchBlog()
  }, [fetchBlog])

  const handleSubmit = async (values) => {
    const { status, content } = values

    if (status === 'published' && !content) {
      addToast({
        message: 'Cannot post a blog with empty content',
        severity: 'error'
      })

      return false
    }

    const { error = null } = await BlogService.update(id, {
      ...values
    })

    if (error) {
      addToast({ severity: 'error', message: error })

      return false
    }

    const messages = {
      published: 'The blog was published successfully',
      draft: 'The blog was saved as draft successfully'
    }
    addToast({ severity: 'success', message: messages[status] })

    return true
  }

  const handleArchive = async () => {
    const { data, error = null } = await BlogService.archive(id)

    if (error) {
      addToast({ severity: 'error', message: error })

      return null
    }

    setBlog(() => data.blog)
    addToast({
      severity: 'success',
      message: 'The blog was archived successfully'
    })

    return data.blog
  }

  const handleDelete = async () => {
    const { error = null } = await BlogService.destroy(id)

    if (error) {
      addToast({ severity: 'error', message: error })

      return false
    }

    history.push('/dashboard/posts')
  }

  return (
    <Paper elevation={8}>
      <Card>
        <CardHeader title="Edit Post" />
        <CardContent>
          <PostForm
            onSubmit={handleSubmit}
            isEditing
            blog={blog}
            onArchive={handleArchive}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>
    </Paper>
  )
}

export default EditPost
