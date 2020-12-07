import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import BasicCard from 'components/Widgets/BasicCard'

const DashboardStatistics = () => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} sm={6} xs={12}>
        <BasicCard />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <BasicCard />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <BasicCard />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <BasicCard />
      </Grid>
    </Grid>
  )
}

export default DashboardStatistics
