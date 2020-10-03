import React from 'react'
import { IconButton, useTheme } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Drawer from '@material-ui/core/Drawer'
import useStyles from './styles'
import RecentPostsList from 'components/RecentPostsList'
import TagsList from 'components/TagsList'

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
      <RecentPostsList />
      <Divider />
      <TagsList />
    </Drawer>
  )
}

export default CustomDrawer
