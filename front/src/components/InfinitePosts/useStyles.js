import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  grid: {
    position: 'relative',
    '& > div': {
      display: 'block',
      position: 'absolute',
      width: 'calc(30% - 10px)',
      margin: 5,
      zIndex: 1,
      color: '#fff'
    },
    '& > div > div': {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    '& img': {
      width: '100%',
      height: 'auto'
    }
  },
  ellipsis: {
    maxHeight: '12.6em',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkitLineClamp': 8,
    '-webkitBoxOrient': 'vertical'
  },
  link: {
    textDecoration: 'none'
  }
}))

export default useStyles
