import React, { useRef, useEffect, useState, useMemo } from 'react'
import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@material-ui/core'
import Theme from 'themes/Theme'
import TopBar from 'components/TopBar'
import SideBar from 'components/SideBar'
import Header from 'components/Header'
import useStyles from './useStyles'
import { useCookies } from 'react-cookie'
import { ToastContextProvider } from 'contexts/ToastContext'

const DashboardLayout = ({ children }) => {
  const classes = useStyles()
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useState(false)
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

  const handleMobileOpen = () => setIsMobile(() => true)

  const handleMobileClose = () => setIsMobile(() => false)

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
      <ToastContextProvider>
        <div className={classes.root}>
          <CssBaseline />
          <TopBar
            onMobileOpen={handleMobileOpen}
            onThemeChange={handleThemeChange}
            darkModeOn={darkMode}
          />
          <SideBar onMobileClose={handleMobileClose} openMobile={isMobile} />
          <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.content}>
                <Container maxWidth={false}>
                  <Header />
                  {children}
                </Container>
              </div>
            </div>
          </div>
        </div>
      </ToastContextProvider>
    </ThemeProvider>
  )
}

export default DashboardLayout
