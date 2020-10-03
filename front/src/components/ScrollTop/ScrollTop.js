import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Fab, useScrollTrigger, Zoom, Toolbar } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import useStyles from './styles'

const ScrollTop = () => {
  const classes = useStyles()
  const anchorRef = useRef(null)
  const [anchor, setAnchor] = useState(null)

  useEffect(() => {
    if (!anchorRef) return

    setAnchor(() => anchorRef.current)
  }, [])

  const trigger = useScrollTrigger()

  const handleClick = (e) => {
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Fragment>
      <Toolbar id="back-to-top-anchor" ref={anchorRef} />
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </div>
      </Zoom>
    </Fragment>
  )
}

export default ScrollTop
