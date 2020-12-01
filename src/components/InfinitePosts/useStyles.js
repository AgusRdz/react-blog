import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grid: {
    position: 'relative',
    '& > div': {
      display: 'block',
      position: 'absolute',
      width: 'calc(30% - 10px)',
      margin: 5,
      zIndex: 1,
      color: '#fff',
      [theme.breakpoints.only('sm')]: {
        width: 'calc(50% - 10px)'
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%'
      }
    },
    '& > div > div': {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    '& img': {
      width: '100%',
      height: 'auto',
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  ellipsis: {
    maxHeight: '12.6em',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkitLineClamp': 8,
    '-webkitBoxOrient': 'vertical',
    paddingTop: 0
  },
  link: {
    textDecoration: 'none'
  }
}))

export default useStyles
