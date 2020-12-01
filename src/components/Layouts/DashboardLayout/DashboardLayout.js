import React, { useRef, useEffect, useState } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import Theme from 'themes/Theme'
import TopBar from 'components/TopBar'
import SideBar from 'components/SideBar'
import Header from 'components/Header'
import useStyles from './useStyles'

const DashboardLayout = ({ children }) => {
  const classes = useStyles()
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (!ref) return

    const delay = setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
    }, 500)

    return () => clearTimeout(delay)
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar onMobileOpen={() => setIsMobile(() => true)} />
        <SideBar
          onMobileClose={() => setIsMobile(() => false)}
          openMobile={isMobile}
        />
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
    </ThemeProvider>
  )
}

export default DashboardLayout
