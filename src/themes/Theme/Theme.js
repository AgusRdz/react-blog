import { createMuiTheme } from '@material-ui/core'

const Blog = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#64b5f6',
      dark: '#2286c3',
      contrastText: '#fafafa'
    },
    secondary: {
      light: '#ffffff',
      main: '#e3f2fd',
      dark: '#b1bfca',
      contrastText: '#000'
    }
  }
})

export default Blog
