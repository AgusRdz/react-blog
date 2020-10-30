import React, { Fragment } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Theme from 'themes/Theme'

const NotFoundLayout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <CssBaseline />
        <Fragment>{children}</Fragment>
      </div>
    </ThemeProvider>
  )
}

export default NotFoundLayout
