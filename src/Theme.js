import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';

// brown (121,85,72)
// organce (255,152,0)

const light = 50;
const main = 500;
const dark = 800;

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: orange[light],
      main: orange[main],
      dark: orange[dark],
      contrastText: '#fff'
    },
    secondary: {
      light: brown[light],
      main: brown[main],
      dark: brown[dark],
      contrastText: '#000'
    }
  }
});

export default MyTheme;
