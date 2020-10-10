import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogLayout from 'components/Layouts/BlogLayout'
// import DashboardLayout from 'components/Layouts/DashboardLayout'
// import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'
import Blog from 'pages/Blog'
import Whoami from 'pages/Whoami'

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Route path='/login' component={Login} /> */}
      <Route>
        <BlogLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:slug" exact component={Blog} />
            <Route path="/whoami" exact component={Whoami} />
          </Switch>
        </BlogLayout>
      </Route>

      {/* <Route path="/dashboard/:path?" exact>
        <DashboardLayout>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </DashboardLayout>
      </Route> */}
    </BrowserRouter>
  )
}

export default Routes
