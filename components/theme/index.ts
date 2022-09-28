import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "#1e293b")(props),
    },
  }),
};

const theme = extendTheme({
  fonts: {
    brandHeading: "Major Mono Display, monospace",
    brandTitle: "IBM Plex Mono, monospace",
    brandBody: "'Ubuntu Mono', monospace",
  },
  breakpoints,
  colors: {
    brandSky400: "#38bdf8",
    brandBlue500: "#3b82f6",
    brandCyan700: "#0e7490",
  },
  styles
});

export default theme;

export * from "./gradients"