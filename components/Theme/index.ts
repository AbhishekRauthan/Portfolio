import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

const theme = extendTheme({
  fonts: {
    brandHeading: "Major Mono Display, monospace",
    brandTitle: "IBM Plex Mono, monospace",
    brandBody: "'Nunito', sans-serif",
  },
  breakpoints,
});

export default theme;
