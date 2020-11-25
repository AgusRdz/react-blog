import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    '& > div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },
  header: {
    fontSize: 48
  },
  subheader: {
    fontSize: 24
  },
  goBack: {
    fontSize: 20,
    cursor: 'pointer'
  }
}))

export default useStyles
