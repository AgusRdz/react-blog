import React from 'react'
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import useStyles from './styles'

const ScrollTop = ({ window }) => {
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (e) => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  )
}

export default ScrollTop
