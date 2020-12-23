import { createMuiTheme } from '@material-ui/core/styles'
import { blue, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#213A57',
      main: '#607d8b',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#DBFF32',
      main: '#b2ff59',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blue['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme