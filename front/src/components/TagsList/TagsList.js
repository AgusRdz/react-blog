import React, { Fragment } from 'react'
import { Chip, Typography } from '@material-ui/core'
import useStyles from './useStyles'
import clsx from 'clsx'

const TagsList = ({ centered }) => {
  const classes = useStyles()

  const handleClick = (label) => () => {
    console.log(label)
  }

  return (
    <Fragment>
      <div
        className={clsx({
          [classes.centered]: centered,
          [classes.headerMargins]: true
        })}
      >
        <Typography variant="h6" component="span" className={classes.header}>
          Tags
        </Typography>
      </div>
      <div className={classes.root}>
        {[
          'React',
          'Laravel',
          'Vue',
          'JS',
          'PHP',
          'Angular',
          'Nginx',
          'Cloud',
          'Random',
          'Docker'
        ].map((label) => (
          <Chip key={label} label={label} onClick={handleClick(label)} />
        ))}
      </div>
    </Fragment>
  )
}

export default TagsList
