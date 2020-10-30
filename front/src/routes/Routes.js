import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import BlogLayout from 'components/Layouts/BlogLayout'
import DashboardLayout from 'components/Layouts/DashboardLayout'
import Home from 'pages/Home'
import Blog from 'pages/Blog'
import Whoami from 'pages/Whoami'
import PageNotFound from 'pages/PageNotFound'
import Login from 'pages/Login'
import NotFoundLayout from 'components/Layouts/NotFoundLayout/NotFoundLayout'
import AppRouter from 'components/AppRouter'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRouter path="/" exact component={Home} layout={BlogLayout} />
        <AppRouter
          path="/blog/:slug"
          exact
          component={Blog}
          layout={BlogLayout}
        />
        <AppRouter
          path="/whoami"
          exact
          component={Whoami}
          layout={BlogLayout}
        />
        <AppRouter
          path="/dashboard/login"
          exact
          component={Login}
          layout={DashboardLayout}
        />
        <AppRouter path="*" component={PageNotFound} layout={NotFoundLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
