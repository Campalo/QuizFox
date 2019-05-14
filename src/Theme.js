import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';

// brown (121,85,72)
// light (239, 235, 233)
// dark (78, 52, 46)

// orange (255,152,0)
// light (255, 243, 224)
// dark (	239, 108, 0)

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
