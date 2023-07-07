import { createTheme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

// Create a theme instance.
export const PurpleTheme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    }
  },
});
