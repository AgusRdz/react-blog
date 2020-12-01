import React, { Fragment, useRef, useState } from 'react'
import { Avatar, Box, ButtonBase, Menu, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router'
import useStyles from './useStyles'

const Account = () => {
  const classes = useStyles()
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

  const handleOpen = () => setIsOpen(() => true)

  const handleClose = () => setIsOpen(() => false)

  const handleLogout = () => {
    sessionStorage.removeItem('session')
    history.push('/dashboard/login')
  }

  return (
    <Fragment>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar alt="user" className={classes.avatar} src="/images/me.jpeg">
          A
        </Avatar>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        keepMounted
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
        PaperProps={{ className: classes.popover }}
      >
        <MenuItem>Account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Fragment>
  )
}

export default Account
