import React from 'react'
import { Avatar, Box, Card, Typography } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'
import useStyles from '../useStyles'

const MostViewed = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          Most Viewed
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h6" color="textPrimary" style={{ fontSize: 18 }}>
            Example of most viewed blog with log text to test the dispay
          </Typography>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <Visibility />
      </Avatar>
    </Card>
  )
}

export default MostViewed
