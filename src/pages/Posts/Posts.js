import React from 'react'
import withAuth from 'hocs/WithAuth'
import AllPosts from 'components/Tables/AllPosts'
import { Paper } from '@material-ui/core'

const Posts = () => {
  return (
    <Paper elevation={8}>
      <AllPosts />
    </Paper>
  )
}

export default withAuth(Posts)
