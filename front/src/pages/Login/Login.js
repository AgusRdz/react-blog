import React from 'react'
import LoginForm from 'components/Forms/LoginForm'
import useStyles from './useStyles'

const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
