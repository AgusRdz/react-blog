import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Fade,
  Paper,
  CardActions,
  Typography,
  Grid
} from '@material-ui/core'
import { BlogService } from 'services/api/blog'
import { useHistory } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import TagsList from 'components/TagsList'
import RichText from 'components/RichText/RichText'
import TimeForHumans from 'components/TimeForHumans'

const BlogContent = ({ slug }) => {
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
    if (slug) {
      const { data, error = null } = await BlogService.show(slug)
      if (error) return history.push('/')

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
    }
  }, [slug, history])

  useEffect(() => {
    fetchBlog()
  }, [fetchBlog])

  const title = () => {
    return (
      <Grid container>
        <Grid item xs={11}>
          <Typography component="span" variant="h5">
            {blog.title}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <img
            style={{ width: 35, float: 'right' }}
            src={`/images/categories/${blog.category}.png`}
            alt={blog.category}
          />
        </Grid>
      </Grid>
    )
  }

  const subheader = () => {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography component="span" variant="body1" color="textSecondary">
            By AgusRdz
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="span" variant="body1" color="textSecondary">
            Published: <TimeForHumans date={blog.createdAt} />
          </Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Fade in timeout={2000} unmountOnExit>
      <Paper elevation={8}>
        {ready && (
          <Card>
            <CardHeader title={title()} subheader={subheader()} />
            <CardContent>
              <RichText content={blog.content} />
            </CardContent>
            <CardActions>
              <TagsList centered tags={blog.tags} />
            </CardActions>
          </Card>
        )}
      </Paper>
    </Fade>
  )
}

export default BlogContent
