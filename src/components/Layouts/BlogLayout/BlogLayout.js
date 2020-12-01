import React, { useRef, useEffect, useMemo, useState } from 'react'
import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@material-ui/core'
import clsx from 'clsx'
import Theme from 'themes/Theme'
import NavBar from 'components/NavBar'
import CustomDrawer from 'components/CustomDrawer'
import useStyles from './useStyles'
import Footer from 'components/Footer'
import { useCookies } from 'react-cookie'

const BlogLayout = ({ children }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useState(() => prefersDarkMode)
  const primary = Theme.palette.primary
  const secondary = Theme.palette.secondary
  const [cookies, setCookie] = useCookies(['paletteType'])

  useEffect(() => {
    if (!ref) return

    const delay = setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
    }, 500)

    return () => clearTimeout(delay)
  }, [])

  useEffect(() => {
    if (cookies.paletteType) {
      setDarkMode(() => cookies.paletteType === 'dark')
    } else {
      setCookie('paletteType', prefersDarkMode ? 'dark' : 'light', {
        path: '/'
      })
      setDarkMode(() => prefersDarkMode)
    }
  }, [prefersDarkMode, setCookie, cookies.paletteType])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleThemeChange = () => {
    setCookie('paletteType', !darkMode ? 'dark' : 'light', { path: '/' })
    setDarkMode(() => !darkMode)
  }

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary,
          secondary,
          type: darkMode ? 'dark' : 'light'
        }
      }),
    [darkMode, primary, secondary]
  )

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <CssBaseline />
        <NavBar
          onDrawerOpen={handleDrawerOpen}
          onThemeChange={handleThemeChange}
          darkModeOn={darkMode}
        />
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
