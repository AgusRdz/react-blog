import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  breadcrumb: {
    width: 'fit-content',
    float: 'right',
    marginBottom: 15,
    '& a': {
      textDecoration: 'none'
    }
  },
  paper: {
    minHeight: '100vh'
  },
  image: {
    textAlign: 'center'
  }
}))

export default useStyles
