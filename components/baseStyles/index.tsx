import { Global, css } from "@emotion/react";

const BaseStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400;500&family=Major+Mono+Display&family=Nunito:wght@300;400;500&display=swap");
      `}
    />
  );
};

export default BaseStyles;
