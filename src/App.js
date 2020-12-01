import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
