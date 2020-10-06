import React, { Fragment } from 'react'
import { Chip, Typography } from '@material-ui/core'
import useStyles from './styles'
import clsx from 'clsx'

const TagsList = ({ centered }) => {
  const classes = useStyles()

  const handleClick = (label) => (e) => {
    console.log(label)
  }

  return (
    <Fragment>
      <div
        className={clsx({
          [classes.centered]: centered
        })}
      >
        <Typography
          variant="h6"
          component="span"
          className={clsx({
            [classes.header]: true
          })}
        >
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
