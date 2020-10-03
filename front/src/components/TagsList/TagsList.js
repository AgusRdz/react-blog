import React, { Fragment } from 'react'
import { Chip, Typography } from '@material-ui/core'
import useStyles from './styles'

const TagsList = () => {
  const classes = useStyles()

  const handleClick = (label) => (e) => {
    console.log(label)
  }

  return (
    <Fragment>
      <Typography variant="h6" component="span" className={classes.header}>
        Tags
      </Typography>
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
