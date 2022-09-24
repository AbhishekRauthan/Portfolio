import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const animate = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});

type Props = {
  bgColor:string;
}

export const ImgContainer = styled("div")((props:Props) => ({
  position: "relative",
  width: "max-content",
  marginInline: "auto",
  borderRadius: "9999px",
  zIndex: 0,
  "::after": {
    content: '""',
    borderRadius: "9999px",
    backgroundColor: `${props.bgColor}`,
    padding: "3px",
    position: "absolute",
    top: "-10px",
    left: "0px",
    height: "calc(100% + 20px)",
    width: "calc(100% + 3px)",
    zIndex: "-1",
    filter: "blur(14px)",
    animation: `${animate} 8s infinite linear`,
    opacity: "0.7"
  },
}));
