import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: teal,
    type: 'dark',
  },
});

const palette = {
  green: '#20D340',
  greenHover: '#19a733'
}

export { palette, theme };
