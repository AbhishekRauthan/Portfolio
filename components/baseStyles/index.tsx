import { Global, css } from "@emotion/react";

const BaseStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400;500&family=Major+Mono+Display&display=swap");
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
      `}
    />
  );
};

export default BaseStyles;
