import React, { Fragment, useEffect, useState } from 'react'
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import useStyles from './useStyles'
import { Auth } from 'services/api/auth'
import useSessionStorage from 'hooks/useSessionStorage'
import { Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import useIsMounted from 'hooks/useIsMounted'
import onlyGuest from 'hocs/OnlyGuest'
import useToastContext from 'hooks/useToastContext'

const LoginForm = () => {
  const classes = useStyles()
  const [, setJwt] = useSessionStorage('session', '')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { authenticated } = useAuth()
  const isMounted = useIsMounted()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [ready, setReady] = useState(false)
  const addToast = useToastContext()

  useEffect(() => {
    if (isMounted.current) {
      setIsAuthenticated(() => authenticated)
      setReady(() => true)
    }
  }, [isMounted, authenticated])

  const handleChange = (e) => {
    const {
      target: { name, value }
    } = e
    setForm(() => {
      return {
        ...form,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data = null, error = null } = await Auth.login(form)

    if (error) {
      addToast({ message: error, severity: 'error' })
      return
    }
    setJwt(() => data.token)
    setIsAuthenticated(() => true)
  }

  if (!ready) return null

  if (isAuthenticated) {
    return <Redirect to={{ pathname: '/dashboard' }} />
  }

  return (
    <Fragment>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Paper elevation={8}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <div className={classes.header}>
                <Typography component="span" color="primary" variant="h4">
                  Welcome back!!!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={form.email}
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.footer}>
                <Button variant="contained" type="submit" color="primary">
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Fragment>
  )
}

export default onlyGuest(LoginForm)
