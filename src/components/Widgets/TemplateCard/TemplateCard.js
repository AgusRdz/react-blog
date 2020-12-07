import React from 'react'
import { Avatar, Box, Card, Typography } from '@material-ui/core'
import useStyles from './useStyles'

const TemplateCard = ({ title, content, icon: Icon }) => {
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
          {title}
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            {content}
          </Typography>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <Icon />
      </Avatar>
    </Card>
  )
}

export default TemplateCard
