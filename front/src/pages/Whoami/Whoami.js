import React from 'react'
import {
  Box,
  Fade,
  Grid,
  Paper,
  Avatar,
  Typography,
  Link
} from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import useStyles from './styles'
import ToolsSet from 'components/ToolsSet'

const Whoami = () => {
  const classes = useStyles()

  return (
    <Fade in timeout={2000} unmountOnExit>
      <Paper elevation={8}>
        <Box padding={2}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={2}>
              <Avatar
                variant="circle"
                src={`${process.env.PUBLIC_URL}/images/me.jpeg`}
                alt="Agus Rdz"
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component="p" className={classes.about}>
                Hi there!!!, I&apos;m Agus Rdz and I work as web developer,
                right now I work with Node.js and React to build apps and
                API&apos;s but sometimes I use Laravel. This website was built
                with React in order to practice some stuffs and this design is
                changing constantly but I&apos;ll try to focus to get a clean
                and responsive layout. Also if I&apos;ll try to publish some
                blogs related to best practices, common errors or tips based on
                my experience, is not promise but I&apos;ll do my best. <br />
                <br />
                <Link
                  href="https://github.com/AgusRdz"
                  rel="noopener"
                  target="_blank"
                  className={classes.socialNetwork}
                >
                  <GitHub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/agustin-espinoza-rodriguez/?locale=en_US"
                  rel="noopener"
                  target="_blank"
                  className={classes.socialNetwork}
                >
                  <LinkedIn className={classes.linkedIn} />
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <ToolsSet />
        </Box>
      </Paper>
    </Fade>
  )
}

export default Whoami
