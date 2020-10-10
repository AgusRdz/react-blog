import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  iconsContainer: {
    textAlign: 'center',
    '& img': {
      width: 60,
      margin: 10
    }
  }
}))

export default useStyles
