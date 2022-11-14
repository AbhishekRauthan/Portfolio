import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NextHead from "next/head";

const HomePage = () => {
  return (
    <>
      <NextHead>
        <title>Abhishek - Front-End Developer | Data Science Enthusiast</title>
      </NextHead>
      <VStack
        marginTop={{ base: "10" }}
        marginBottom={{ base: "7" }}
        marginX="auto"
        display="flex"
        spacing={{ base: "5" }}
        paddingX="4"
        alignContent="baseline"
        textAlign="center"
        flexDirection={{ base: "column" }}
      >
        <Heading
          as="h1"
          fontFamily="brandTitle"
          fontSize={{ base: "2xl" }}
          fontWeight="bold"
          letterSpacing={{ base: "wider" }}
        >
          Front-End Developer and a Data Science Enthusiast
        </Heading>
        <Text
          fontFamily="brandBody"
          fontSize={{ base: "xl" }}
          paddingX={{ base: "3" }}
          letterSpacing={{ base: "wide" }}
        >
          I design and code beautifull solutions for the web
        </Text>
      </VStack>
      <VStack
        as="section"
        spacing={{ base: "3" }}
        bgColor={useColorModeValue("brandBlue500", "brandCyan700")}
        marginTop={{ base: "0", lg: "16" }}
        paddingTop={{ base: "4", md: "7", lg: "16" }}
        paddingBottom={{ base: "10",lg:"40" }}
        textAlign={{ base: "center" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        paddingX={{ base: "2", lg: "10" }}
      >
        <Heading as="h1" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
          Hi, I&apos;m Abhishek.{" "}
          <Box as="br" display={{ base: "inline-block", md: "none" }} /> Great
          to see you here!
        </Heading>
        <Text
          as="p"
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontFamily="brandBody"
          letterSpacing={{ base: "tight", md: "normal" }}
          maxWidth={{ md: "container.md", lg: "container.lg" }}
        >
          I&apos;m a React Typescript developer with knowledge on NodeJS based
          back-end technologies, based in New Delhi, India. I&apos;m passionate
          about learning new things and solving problems. I love coding and
          making cool things with it.
        </Text>
      </VStack>
    </>
  );
};

export default HomePage;
