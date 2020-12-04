import React, { Fragment, useCallback, useEffect, useState } from 'react'
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { LibraryBooks } from '@material-ui/icons'
import useStyles from './useStyles'
import { HomeService } from 'services/api/home'
import { Link as RouterLink } from 'react-router-dom'

const RecentPostsList = () => {
  const classes = useStyles()
  const [blogs, setBlogs] = useState([])

  const fetchRecentPosts = useCallback(async () => {
    const { data, error = null } = await HomeService.latest()

    if (error) return

    setBlogs(() => data.blogs)
  }, [])

  useEffect(() => {
    fetchRecentPosts()
  }, [])

  return (
    <Fragment>
      <Typography variant="h6" component="span" className={classes.header}>
        Latest Blogs
      </Typography>
      <List>
        {blogs.map(({ _id, title, slug }) => (
          <Link
            component={RouterLink}
            to={`/blog/${slug}`}
            color="textPrimary"
            underline="none"
            key={_id}
          >
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Fragment>
  )
}

export default React.memo(RecentPostsList)
