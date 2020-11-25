import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
      padding: theme.spacing(4)
    }
  },
  header: {
    textAlign: 'center'
  },
  footer: {
    textAlign: 'right'
  }
}))

export default useStyles
