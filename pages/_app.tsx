import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import BaseStyles from "@components/baseStyles";
import theme from '@components/Theme'
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BaseStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
