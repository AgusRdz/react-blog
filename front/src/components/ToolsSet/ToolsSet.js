import React, { useEffect, useState } from 'react'
import { Fade, Grid } from '@material-ui/core'
import useStyles from './styles'

const ToolsSet = () => {
  const classes = useStyles()

  const [icons, setIcons] = useState([])

  const loadIcons = (images, dir) => {
    return images.keys().map((image) => {
      return {
        src: `${dir}${image.substring(1)}`,
        alt: image.substring(2, image.lastIndexOf('.'))
      }
    })
  }

  useEffect(() => {
    setIcons(() =>
      loadIcons(
        require.context(
          '../../../public/icons/techs/',
          false,
          /\.(png|jpe?g|svg)$/
        ),
        '/icons/techs'
      )
    )
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} className={classes.iconsContainer}>
        {icons.map(({ src, alt }, index) => (
          <Fade in timeout={250 * index} key={index}>
            <img src={`${process.env.PUBLIC_URL}${src}`} alt={alt} />
          </Fade>
        ))}
      </Grid>
    </Grid>
  )
}

export default ToolsSet
