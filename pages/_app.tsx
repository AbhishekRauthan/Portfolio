import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import BaseStyles from "@components/baseStyles";
import theme from "@components/theme";
import Layout from "@components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BaseStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
