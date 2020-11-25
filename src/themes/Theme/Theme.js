const { createMuiTheme } = require('@material-ui/core')

const Blog = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    action: {
      main: 'red'
    }
  }
})

export default Blog
