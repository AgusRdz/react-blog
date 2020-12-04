import React from 'react'
import { Chip, Grid, Typography } from '@material-ui/core'
import useStyles from './useStyles'
import clsx from 'clsx'

const TagsList = ({ centered, tags = [] }) => {
  const classes = useStyles()

  const handleClick = (label) => () => {
    console.log(label)
  }

  if (tags.length === 0) {
    return null
  }

  return (
    <Grid container>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        <div className={classes.root}>
          {tags.map((label) => (
            <Chip key={label} label={label} onClick={handleClick(label)} />
          ))}
        </div>
      </Grid>
    </Grid>
  )
}

export default TagsList
