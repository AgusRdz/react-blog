import React, { useRef, useEffect } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import Theme from 'themes/Theme'

const AuthLayout = ({ children }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return

    const delay = setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
    }, 500)

    return () => clearTimeout(delay)
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />

      <Container maxWidth={false}>{children}</Container>
    </ThemeProvider>
  )
}

export default AuthLayout
