import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  header: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
  }
}))

export default useStyles
