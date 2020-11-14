import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  makeStyles
} from '@material-ui/core'
import Logo from 'components/Logo'
import React, { Fragment } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}))

const SideBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles()
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/dashboard">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <RouterLink to="/dashboard/account">
              <Avatar
                alt="user"
                className={classes.avatar}
                src="/images/me.jpeg"
              />
            </RouterLink>
          </Box>
        </Box>
        <Box mt={2} textAlign="center">
          <Link
            component={RouterLink}
            to="/dashboard/account"
            variant="h5"
            color="textPrimary"
            underline="none"
          >
            AgusRdz
          </Link>
        </Box>
        <Divider />

        <Box p={2} display="flex" justifyContent="center">
          <List>Posts</List>
        </Box>
      </PerfectScrollbar>
    </Box>
  )

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          open={openMobile}
          onClose={onMobileClose}
          classes={{ paper: classes.mobileDrawer }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          variant="persistent"
          open
          classes={{ paper: classes.desktopDrawer }}
        >
          {content}
        </Drawer>
      </Hidden>
    </Fragment>
  )
}

export default SideBar
