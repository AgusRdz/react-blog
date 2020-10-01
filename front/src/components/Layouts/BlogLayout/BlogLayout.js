import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import Theme from 'themes'
import NavBar from 'components/NavBar'
import ScrollTop from 'components/ScrollTop'
import { makeStyles } from '@material-ui/core/styles'

import clsx from 'clsx'
import CustomDrawer from 'components/CustomDrawer'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}))

const BlogLayout = ({ children }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container fixed>
        <CssBaseline />
        <NavBar onDrawerOpen={handleDrawerOpen} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Container>{children}</Container>
        </main>

        <ScrollTop />
      </Container>
      <CustomDrawer onClose={handleDrawerClose} open={open} />
    </ThemeProvider>
  )
}

export default BlogLayout
