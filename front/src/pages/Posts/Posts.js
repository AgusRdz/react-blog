import React from 'react'
import withAuth from 'hocs/WithAuth'
import AllPosts from 'components/Tables/AllPosts'

const Posts = () => {
  return <AllPosts />
}

export default withAuth(Posts)
