import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  actions: {
    display: 'block',
    '& > *': {
      margin: theme.spacing(1)
    },
    '& button:first-child': {
      marginLeft: 0
    },
    '& button:last-child': {
      marginRight: 0,
      float: 'right'
    }
  },
  hide: {
    display: 'none'
  },
  toolbar: {
    '& .ql-toolbar': {
      background: '#e0e0e0'
    }
  }
}))

export default useStyles
