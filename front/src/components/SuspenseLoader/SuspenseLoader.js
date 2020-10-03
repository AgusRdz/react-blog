import React from 'react'
import { PuffLoader } from 'react-spinners'
import useStyles from './styles'

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
