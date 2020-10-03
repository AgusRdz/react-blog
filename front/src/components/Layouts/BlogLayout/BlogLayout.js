import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import clsx from 'clsx'
import Theme from 'themes'
import NavBar from 'components/NavBar'
import CustomDrawer from 'components/CustomDrawer'
import useStyles from './styles'

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
      </Container>
      <CustomDrawer onClose={handleDrawerClose} open={open} />
    </ThemeProvider>
  )
}

export default BlogLayout
