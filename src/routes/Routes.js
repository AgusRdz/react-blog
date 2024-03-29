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
import Dashboard from 'pages/Dashboard'
import Posts from 'pages/Posts'
import AuthLayout from 'components/Layouts/AuthLayout'
import CreatePost from 'pages/CreatePost'
import EditPost from 'pages/EditPost'

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
          layout={AuthLayout}
        />
        <AppRouter
          path="/dashboard"
          exact
          component={Dashboard}
          layout={DashboardLayout}
        />
        <AppRouter
          path="/dashboard/posts"
          exact
          component={Posts}
          layout={DashboardLayout}
        />
        <AppRouter
          path="/dashboard/posts/create"
          exact
          component={CreatePost}
          layout={DashboardLayout}
        />
        <AppRouter
          path="/dashboard/posts/edit/:id"
          exact
          component={EditPost}
          layout={DashboardLayout}
        />
        <AppRouter path="*" component={PageNotFound} layout={NotFoundLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
