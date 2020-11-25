import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import { Book, Dashboard, Label } from '@material-ui/icons'
import Logo from 'components/Logo'
import React, { Fragment } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link as RouterLink, useHistory } from 'react-router-dom'

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

const sidebarConfig = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Dashboard
  },
  {
    title: 'Posts',
    href: '/dashboard/posts',
    icon: Book
  },
  {
    title: 'Tags',
    href: '/dashboard/tags',
    icon: Label
  }
]

const SideBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (href) => () => {
    history.push(href)
  }

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
          <List disablePadding component="nav" style={{ width: '100%' }}>
            {sidebarConfig.map(({ title, href, icon: Icon }, index) => (
              <ListItem button key={index}>
                <ListItemIcon style={{ minWidth: 'fit-content' }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} onClick={handleClick(href)} />
              </ListItem>
            ))}
          </List>
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
