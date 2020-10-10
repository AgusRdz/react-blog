import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh'
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}))

export default useStyles
