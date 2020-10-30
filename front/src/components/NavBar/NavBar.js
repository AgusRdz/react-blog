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
import useStyles from './useStyles'
import ScrollTop from 'components/ScrollTop'
import { Link } from 'react-router-dom'

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
            <Link to="/">AgusLog</Link>
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
      <ScrollTop />
    </div>
  )
}

export default NavBar
