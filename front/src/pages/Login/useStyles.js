const { makeStyles } = require('@material-ui/core')

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative'
  },
  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

export default useStyles
