import { createTheme } from '@mui/material/styles';
import globalStyle from '../global.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      light: globalStyle.primaryBackgroundLight,
      main: globalStyle.primaryBackgroundMain,
      dark: globalStyle.primaryBackgroundDark,
      contrastText: globalStyle.primaryBackgroundContrastText,
    },
    secondary: {
      light: globalStyle.secondaryBackgroundLight,
      main: globalStyle.secondaryBackgroundMain,
      dark: globalStyle.secondaryBackgroundDark,
      contrastText: globalStyle.secondaryBackgroundContrastText,
    },
  },
  typography: {
    fontFamily: globalStyle.defaultFont,
  },
  breakpoints: {
    values: {
      mobile: Number.parseInt(globalStyle.breakpointMinPhone, 10),
      tablet: Number.parseInt(globalStyle.breakpointMinTablet, 10),
      laptop: Number.parseInt(globalStyle.breakpointMinLaptop, 10),
      desktop: Number.parseInt(globalStyle.breakpointMinDesktop, 10),
    },
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export default theme;
