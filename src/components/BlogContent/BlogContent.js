import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Fade,
  Paper
  // Typography
} from '@material-ui/core'
// import TagsList from 'components/TagsList'
// import useStyles from './useStyles'
import { BlogService } from 'services/api/blog'
import { useHistory } from 'react-router-dom'

const BlogContent = ({ slug }) => {
  // const classes = useStyles()
  const [ready, setReady] = useState(false)
  const [blog, setBlog] = useState({
    title: '',
    author: 'none',
    category: '',
    createdAt: '',
    updatedAt: '',
    content: '',
    tags: []
  })
  const history = useHistory()

  const fetchBlog = useCallback(async () => {
    const { data, error = null } = await BlogService.show(slug)
    if (error) history.push('/')

    const {
      blog: { title, author, category, createdAt, updatedAt, content, tags }
    } = data
    const blogData = {
      title,
      author,
      category,
      createdAt,
      updatedAt,
      content,
      tags
    }
    setBlog(() => blogData)
    setReady(() => true)
  }, [slug, history])

  useEffect(() => {
    fetchBlog()
  }, [fetchBlog])

  return (
    <Fade in timeout={2000} unmountOnExit>
      <Paper elevation={8}>
        {ready && (
          <Card>
            {console.log(blog)}
            <CardHeader title={blog.title} />
            <CardContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content
                }}
              ></div>
            </CardContent>
          </Card>
        )}
      </Paper>
    </Fade>
  )
}

export default BlogContent
