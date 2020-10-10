import React, { useRef, useEffect } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import clsx from 'clsx'
import Theme from 'themes'
import NavBar from 'components/NavBar'
import CustomDrawer from 'components/CustomDrawer'
import useStyles from './styles'
import Footer from 'components/Footer'

const BlogLayout = ({ children }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return

    const delay = setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
    }, 500)

    return () => clearTimeout(delay)
  }, [])

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
          ref={ref}
        >
          <div className={classes.drawerHeader} />
          <Container>{children}</Container>
          <Footer />
        </main>
      </Container>
      <CustomDrawer onClose={handleDrawerClose} open={open} />
    </ThemeProvider>
  )
}

export default BlogLayout
