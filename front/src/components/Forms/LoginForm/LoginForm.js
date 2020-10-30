import React from 'react'
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import useStyles from './useStyles'

const LoginForm = () => {
  const classes = useStyles()

  return (
    <form className={classes.root}>
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
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" fullWidth />
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
  )
}

export default LoginForm
