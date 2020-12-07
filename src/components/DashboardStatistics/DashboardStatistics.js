import React from 'react'
import { Grid } from '@material-ui/core'
import Total from 'components/Widgets/Cards/Total'
import Drafts from 'components/Widgets/Cards/Drafts'
import Published from 'components/Widgets/Cards/Published'
import MostViewed from 'components/Widgets/Cards/MostViewed'

const DashboardStatistics = () => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} sm={6} xs={12}>
        <Total />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Published />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Drafts />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <MostViewed />
      </Grid>
    </Grid>
  )
}

export default DashboardStatistics
