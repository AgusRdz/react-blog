import React, { Fragment } from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { LibraryBooks } from '@material-ui/icons'
import useStyles from './useStyles'

const RecentPostsList = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography variant="h6" component="span" className={classes.header}>
        Latest Blogs
      </Typography>
      <List>
        {[
          'How to create a custom blog with react?',
          'Using Query Scopes in Laravel 7',
          'ECMA 6 best practices',
          'Apache vs Nginx',
          'Using Socket.io and React to build a real-time chat'
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.icon}>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  )
}

export default RecentPostsList
