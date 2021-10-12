import { createTheme } from "@material-ui/core/styles";

const devBlue = "#0B72B9";
const devOrange = "#FFBA60";
// const devGrey = "#868686";

const theme = createTheme({
  palette: {
    common: {
      blue: devBlue,
      orange: devOrange,
    },
    primary: {
      main: devBlue,
    },
    secondary: {
      main: devOrange,
    },
  },
  typography: {
    fontFamily: {
      fontFamily: "Roboto, sans-serif",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: devBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${devBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${devBlue}`,
        },
      },
      root: {
        // color:devGrey,
        fontWeight: 300,
      },
    },
  },
});

export default theme;
