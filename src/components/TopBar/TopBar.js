import React from 'react'
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  SvgIcon,
  Toolbar
} from '@material-ui/core'
import { Brightness4, Brightness7, Menu } from '@material-ui/icons'
import Account from 'components/Account'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'

const TopBar = ({ onMobileOpen, onThemeChange, darkModeOn }) => {
  return (
    <AppBar>
      <Toolbar>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileOpen}>
            <SvgIcon fontSize="small">
              <Menu />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Link to="/dashboard">
            <Logo />
          </Link>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="switch dark/light mode"
            onClick={onThemeChange}
          >
            {darkModeOn && <Brightness7 />}
            {!darkModeOn && <Brightness4 />}
          </IconButton>
        </Box>
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
