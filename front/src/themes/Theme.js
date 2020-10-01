const { createMuiTheme } = require('@material-ui/core')

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    action: {
      main: 'red'
    }
  }
})

export default Theme
