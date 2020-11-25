import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  SvgIcon,
  Toolbar
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import Account from 'components/Account'
import Logo from 'components/Logo'
import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = ({ onMobileOpen }) => {
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
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
