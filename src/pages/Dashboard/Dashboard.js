import React from 'react'
import withAuth from 'hocs/WithAuth'
import DashboardStatistics from 'components/DashboardStatistics'

const Dashboard = () => {
  return (
    <div>
      <DashboardStatistics />
    </div>
  )
}

export default withAuth(Dashboard)
