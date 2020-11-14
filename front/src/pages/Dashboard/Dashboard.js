import React from 'react'
import withAuth from 'hocs/WithAuth'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default withAuth(Dashboard)
