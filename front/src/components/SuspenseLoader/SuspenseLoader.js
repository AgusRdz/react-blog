import React from 'react'
import { makeStyles } from '@material-ui/core'
import { PuffLoader } from 'react-spinners'

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh'
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}))

const SuspenseLoader = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <PuffLoader loading />
      </div>
    </div>
  )
}

export default React.memo(SuspenseLoader)
