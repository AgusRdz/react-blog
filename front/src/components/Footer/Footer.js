import React from 'react'
import Emoji from 'react-emoji-render'
import useStyles from './useStyles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <span className={classes.footerContent}>
          <Emoji text="Made with :heart: by AgusRdz" />
        </span>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
