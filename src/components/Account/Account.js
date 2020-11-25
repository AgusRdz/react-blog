import React, { Fragment, useRef, useState } from 'react'
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  makeStyles,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  }
}))

const Account = () => {
  const classes = useStyles()
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(() => true)

  const handleClose = () => setIsOpen(() => false)

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
        <Hidden smDown>
          <Typography variant="caption" component="span" color="inherit">
            AgusRdz
          </Typography>
        </Hidden>
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
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Fragment>
  )
}

export default Account