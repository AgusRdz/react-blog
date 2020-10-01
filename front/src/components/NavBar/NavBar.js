import React from 'react'
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import clsx from 'clsx'
import useStyles from './styles'

const NavBar = ({ onDrawerOpen, open }) => {
  const classes = useStyles()

  const handleDrawerOpen = () => onDrawerOpen()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            AgusLog
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </div>
  )
}

export default NavBar
