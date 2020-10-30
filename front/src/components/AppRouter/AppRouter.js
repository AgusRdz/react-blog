import React from 'react'
import { Route } from 'react-router-dom'

const AppRouter = ({
  component: Component,
  exact,
  path,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  ></Route>
)

export default AppRouter
