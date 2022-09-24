import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import BaseStyles from "@components/baseStyles";
import theme from "@components/theme";
import Layout from "@components/layout";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BaseStyles />
        <Layout>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.main
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  translateY: 50,
                },
                pageAnimate: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
