import React from 'react'
import { Card, CardContent, CardHeader, Paper } from '@material-ui/core'
import { BlogService } from 'services/api/blog'
import useToastContext from 'hooks/useToastContext'
import PostForm from 'components/Forms/PostForm'

const CreatePost = () => {
  const addToast = useToastContext()

  const handleSubmit = async (values) => {
    const { status, content } = values

    if (status === 'published' && !content) {
      addToast({
        message: 'Cannot post a blog with empty content',
        severity: 'error'
      })

      return false
    }

    const { error = null } = await BlogService.create({
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

  return (
    <Paper elevation={8}>
      <Card>
        <CardHeader title="Create Post" />
        <CardContent>
          <PostForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </Paper>
  )
}

export default CreatePost
