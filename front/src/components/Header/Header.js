import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Link, Typography, makeStyles } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import { Link as RouterLink, useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  breadcrumbs: {
    padding: '25px 0',
    '& li': {
      textTransform: 'capitalize'
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  const { location } = useHistory()
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const [currentPath, setCurrentPath] = useState(null)
  let composedPath = ''

  useEffect(() => {
    const url = location.pathname
    const paths = url.substring(1, url.length).split('/')
    setCurrentPath(() => paths.pop())
    setBreadcrumbs(() => paths)
  }, [location])

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
      className={classes.breadcrumbs}
    >
      {breadcrumbs.map((text) => {
        composedPath = `${composedPath}/${text}`
        return (
          <Link
            key={text}
            variant="body1"
            color="inherit"
            to={composedPath}
            component={RouterLink}
          >
            {text}
          </Link>
        )
      })}

      <Typography variant="body1" color="textPrimary">
        {currentPath}
      </Typography>
    </Breadcrumbs>
  )
}

export default Header
