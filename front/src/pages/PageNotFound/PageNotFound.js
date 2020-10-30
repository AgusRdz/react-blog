import React from 'react'
import { withRouter } from 'react-router-dom'
import useStyles from './useStyles'

const PageNotFound = ({ history }) => {
  const classes = useStyles()

  const handleClick = () => history.goBack()

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.header}>404</div>
        <div className={classes.subheader}>
          It seems like we could not find the page you were looking for.
        </div>
        <div>
          <span className={classes.goBack} onClick={handleClick}>
            <span aria-label="arrow_left" role="img">
              ⬅️
            </span>{' '}
            Back
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(PageNotFound)
