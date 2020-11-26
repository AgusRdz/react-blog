import React, { useRef, useState, useEffect, Fragment } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fade
} from '@material-ui/core'
import Muuri from 'muuri'
import useStyles from './useStyles'
import ImagesLoaded from 'imagesloaded'
import { Link } from 'react-router-dom'
import TimeForHumans from 'components/TimeForHumans'

const InfinitePosts = ({ posts }) => {
  const classes = useStyles()
  const gridRef = useRef(null)
  const [items, setItems] = useState([])
  const [grid, setGrid] = useState(null)
  const [postIDs, setPostIDs] = useState([])

  useEffect(() => {
    if (!gridRef) return
    setItems(() => posts)

    if (!grid) {
      const muuri = new Muuri(gridRef.current, {
        layout: {
          fillGaps: true
        },
        sortData: {
          _id: (item, element) => parseFloat(element.getAttribute('data-id'))
        }
      })

      setGrid(() => muuri)
    }
    setPostIDs(() => posts.map(({ _id }) => _id))
    // eslint-disable-next-line
  }, [posts])

  useEffect(() => {
    if (!grid) return

    grid.on('layoutEnd', () => grid.refreshItems())
    grid.on('add', () => {
      grid.refreshItems(grid.getItems(), true)
    })
  }, [grid])

  useEffect(() => {
    if (!grid) return

    postIDs.forEach((id) => {
      const item = document.querySelector(`[data-id="${id}"]`)
      if (!grid.getItem(item)) {
        grid.add(item, { active: true, layout: 'instant' })
      }
    })

    layoutInit(grid)
    // eslint-disable-next-line
  }, [postIDs])

  const layoutInit = (grid) => {
    if (grid) {
      const loaded = new ImagesLoaded(grid)
      let delay = null
      loaded.on('always', () => {
        delay = setTimeout(() => {
          const items = grid.getItems()
          grid.refreshItems(items, true)
          grid.layout(true)
        }, 1500)
      })

      return () => clearTimeout(delay)
    }
  }

  return (
    <div ref={gridRef} className={classes.grid}>
      {items.map(({ _id, title, cover, description, slug, updatedAt }) => (
        <div key={_id} data-id={_id}>
          <Fade in={true} unmountOnExit timeout={2000}>
            <Link to={`/blog/${slug}`} className={classes.link}>
              <Card style={{ paddingBottom: 10 }}>
                <CardHeader title={title} />
                <CardMedia component="div">
                  <img
                    src={
                      cover
                        ? `${process.env.REACT_APP_API_IMAGES_URL}${cover}`
                        : '/images/not_found.png'
                    }
                    alt={title}
                  />
                </CardMedia>
                <CardContent className={classes.ellipsis}>
                  <Fragment>
                    <div>{description}</div>
                    <div>
                      By AgusRdz at <TimeForHumans date={updatedAt} />{' '}
                    </div>
                  </Fragment>
                </CardContent>
              </Card>
            </Link>
          </Fade>
        </div>
      ))}
    </div>
  )
}

export default InfinitePosts
