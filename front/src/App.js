import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import { makeStyles } from '@material-ui/core'
import { ToastContextProvider } from 'contexts/ToastContext'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <ToastContextProvider>
      <div className={classes.root}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ToastContextProvider>
  )
}

export default App
