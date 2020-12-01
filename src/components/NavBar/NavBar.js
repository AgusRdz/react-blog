import React from 'react'
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Brightness7, Brightness4, Menu } from '@material-ui/icons'
import clsx from 'clsx'
import useStyles from './useStyles'
import ScrollTop from 'components/ScrollTop'
import { Link } from 'react-router-dom'

const NavBar = ({ onDrawerOpen, open, onThemeChange, darkModeOn }) => {
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
            <Link to="/">AgusLog</Link>
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="switch dark/light mode"
            onClick={onThemeChange}
          >
            {darkModeOn && <Brightness7 />}
            {!darkModeOn && <Brightness4 />}
          </IconButton>
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
      <ScrollTop />
    </div>
  )
}

export default NavBar
