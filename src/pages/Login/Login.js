import React from 'react'
import LoginForm from 'components/Forms/LoginForm'
import useStyles from './useStyles'
import { ToastContextProvider } from 'contexts/ToastContext'

const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <ToastContextProvider>
        <div className={classes.form}>
          <LoginForm />
        </div>
      </ToastContextProvider>
    </div>
  )
}

export default Login
