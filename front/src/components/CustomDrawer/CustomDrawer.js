import React from 'react'
import { IconButton, Typography, useTheme } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import useStyles from './styles'

const CustomDrawer = ({ onClose, open }) => {
  const classes = useStyles()
  const theme = useTheme()

  const handleDrawerClose = () => onClose()

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Typography
        variant="subtitle1"
        component="span"
        style={{
          marginLeft: 15,
          marginTop: 15
        }}
      >
        Latest Posts
      </Typography>
      <List>
        {['Blog 1', 'Blog 2', 'Blog 3', 'Blog 4'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography
        variant="subtitle1"
        component="span"
        style={{
          marginLeft: 15,
          marginTop: 15
        }}
      >
        Tags
      </Typography>
      <List>
        {['React', 'Node', 'Cloud', 'CSS', 'Tutorial'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default CustomDrawer
