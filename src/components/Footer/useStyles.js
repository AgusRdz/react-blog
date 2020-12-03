const { makeStyles } = require('@material-ui/core')

const useStyles = makeStyles(() => ({
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    marginTop: 100,
    textAlign: 'center'
  },
  footerWrapper: {
    width: '100%',
    position: 'relative',
    height: 'inherit'
  },
  footerContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)'
  }
}))

export default useStyles
