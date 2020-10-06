import React, { Fragment } from 'react'
import {
  Box,
  Breadcrumbs,
  Fade,
  Grid,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core'
import TagsList from 'components/TagsList'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  breadcrumb: {
    width: 'fit-content',
    float: 'right',
    marginBottom: 15,
    '& a': { textDecoration: 'none' }
  }
}))

const BlogContent = ({ title = 'title' }) => {
  const classes = useStyles()

  return (
    <Fade in timeout={2000} unmountOnExit>
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
              <Link to="/">AgusLog</Link>
              <Link to="/?tag=react">React</Link>
              <Typography color="textPrimary">{title}</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={8} style={{ minHeight: '100vh' }}>
              <Box padding={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <img src="https://picsum.photos/1152/517" alt="" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="h4" variant="h4" color="textPrimary">
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      by AgusRdz at October 10, 2020
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ultricies vitae sem in luctus. Nunc egestas eget ex
                    non lobortis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Sed
                    imperdiet nibh felis, in aliquam dolor varius vitae. Nulla
                    et ultrices nibh, quis iaculis velit. Quisque nec blandit
                    dui, vitae scelerisque mauris. Vestibulum faucibus odio ut
                    mollis condimentum. Suspendisse potenti. Fusce ut finibus
                    nunc. Aenean euismod scelerisque tortor et mattis. Nam et
                    diam at felis convallis tristique eget ut est. Phasellus
                    maximus, leo ultrices aliquet aliquet, diam turpis suscipit
                    ex, sed interdum ligula elit nec massa. Nam pellentesque
                    venenatis commodo. Ut elementum enim sit amet lorem
                    consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. v Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam ultricies vitae sem in
                    luctus. Nunc egestas eget ex non lobortis. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Sed imperdiet nibh felis, in aliquam
                    dolor varius vitae. Nulla et ultrices nibh, quis iaculis
                    velit. Quisque nec blandit dui, vitae scelerisque mauris.
                    Vestibulum faucibus odio ut mollis condimentum. Suspendisse
                    potenti. Fusce ut finibus nunc. Aenean euismod scelerisque
                    tortor et mattis. Nam et diam at felis convallis tristique
                    eget ut est. Phasellus maximus, leo ultrices aliquet
                    aliquet, diam turpis suscipit ex, sed interdum ligula elit
                    nec massa. Nam pellentesque venenatis commodo. Ut elementum
                    enim sit amet lorem consequat congue. Duis convallis ornare
                    cursus. Proin facilisis iaculis condimentum. Integer sed
                    felis pharetra, auctor enim et, pellentesque augue. Duis
                    varius lacinia mattis. Vivamus diam ipsum, maximus mattis
                    fermentum et, accumsan at ligula. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam ultricies vitae
                    sem in luctus. Nunc egestas eget ex non lobortis. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Sed imperdiet nibh felis, in
                    aliquam dolor varius vitae. Nulla et ultrices nibh, quis
                    iaculis velit. Quisque nec blandit dui, vitae scelerisque
                    mauris. Vestibulum faucibus odio ut mollis condimentum.
                    Suspendisse potenti. Fusce ut finibus nunc. Aenean euismod
                    scelerisque tortor et mattis. Nam et diam at felis convallis
                    tristique eget ut est. Phasellus maximus, leo ultrices
                    aliquet aliquet, diam turpis suscipit ex, sed interdum
                    ligula elit nec massa. Nam pellentesque venenatis commodo.
                    Ut elementum enim sit amet lorem consequat congue. Duis
                    convallis ornare cursus. Proin facilisis iaculis
                    condimentum. Integer sed felis pharetra, auctor enim et,
                    pellentesque augue. Duis varius lacinia mattis. Vivamus diam
                    ipsum, maximus mattis fermentum et, accumsan at ligula.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ultricies vitae sem in luctus. Nunc egestas eget ex
                    non lobortis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Sed
                    imperdiet nibh felis, in aliquam dolor varius vitae. Nulla
                    et ultrices nibh, quis iaculis velit. Quisque nec blandit
                    dui, vitae scelerisque mauris. Vestibulum faucibus odio ut
                    mollis condimentum. Suspendisse potenti. Fusce ut finibus
                    nunc. Aenean euismod scelerisque tortor et mattis. Nam et
                    diam at felis convallis tristique eget ut est. Phasellus
                    maximus, leo ultrices aliquet aliquet, diam turpis suscipit
                    ex, sed interdum ligula elit nec massa. Nam pellentesque
                    venenatis commodo. Ut elementum enim sit amet lorem
                    consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam ultricies vitae sem in luctus. Nunc
                    egestas eget ex non lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Sed imperdiet nibh felis, in aliquam dolor varius
                    vitae. Nulla et ultrices nibh, quis iaculis velit. Quisque
                    nec blandit dui, vitae scelerisque mauris. Vestibulum
                    faucibus odio ut mollis condimentum. Suspendisse potenti.
                    Fusce ut finibus nunc. Aenean euismod scelerisque tortor et
                    mattis. Nam et diam at felis convallis tristique eget ut
                    est. Phasellus maximus, leo ultrices aliquet aliquet, diam
                    turpis suscipit ex, sed interdum ligula elit nec massa. Nam
                    pellentesque venenatis commodo. Ut elementum enim sit amet
                    lorem consequat congue. Duis convallis ornare cursus. Proin
                    facilisis iaculis condimentum. Integer sed felis pharetra,
                    auctor enim et, pellentesque augue. Duis varius lacinia
                    mattis. Vivamus diam ipsum, maximus mattis fermentum et,
                    accumsan at ligula.
                  </Grid>
                  <Grid item xs={12}>
                    <TagsList centered />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    </Fade>
  )
}

export default BlogContent
