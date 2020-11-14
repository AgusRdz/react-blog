import React from 'react'
import withAuth from 'hocs/WithAuth'
import { Grid } from '@material-ui/core'

const Posts = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xs={12}>
          one
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          one
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          one
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          one
        </Grid>
      </Grid>
    </div>
  )
}

export default withAuth(Posts)
