import {
  Box,
  useColorModeValue,
  Heading as ChakraHeading,
  Text as ChakraText,
  VStack,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import Text from "@components/ui/Text";
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
        <Heading>Front-End Developer and a Data Science Enthusiast</Heading>
        <Text>I design and code beautifull solutions for the web</Text>
      </VStack>
      <VStack
        as="section"
        spacing={{ base: "3" }}
        bgColor={useColorModeValue("brandBlue500", "brandCyan700")}
        marginTop={{ base: "0", lg: "16" }}
        paddingTop={{ base: "4", md: "7", lg: "16" }}
        paddingBottom={{ base: "10", lg: "40" }}
        textAlign={{ base: "center" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        paddingX={{ base: "2", lg: "10" }}
      >
        <ChakraHeading as="h1" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
          Hi, I&apos;m Abhishek.{" "}
          <Box as="br" display={{ base: "inline-block", md: "none" }} /> Great
          to see you here!
        </ChakraHeading>
        <ChakraText
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
        </ChakraText>
      </VStack>
      <VStack
        bgColor="white"
        maxWidth="4xl"
        marginX="auto"
        rounded="2xl"
        paddingY={{ base: "10" }}
        marginTop={{ base: "-6", lg: "-32" }}
        shadow="md"
      >
        <Heading>Skills</Heading>
        <Divider
          color="black"
          borderBottomWidth="1.5px"
          borderBottomColor="black"
          width={{ base: "60%", md: "80%" }}
        />
        <Grid
          templateColumns={{ base: "1", md: "repeat(3,1fr)" }}
          marginX="auto"
          gap={{ base: "5", md: "3" }}
          paddingTop={{ base: "3", md: "5" }}
        >
          <GridItem as={VStack} spacing="3">
            <Heading>FrontEnd</Heading>
            <Text>React.JS</Text>
            <Text>Next.JS</Text>
            <Text>TaildwindCSS</Text>
            <Text>ChakraUI</Text>
            <Text>Material UI</Text>
          </GridItem>
          <GridItem as={VStack} spacing="3">
            <Heading>BackEnd</Heading>
            <Text>Express</Text>
            <Text>Nest.JS</Text>
            <Text>JWT</Text>
            <Text>MongoDB</Text>
            <Text>Postgres</Text>
          </GridItem>
          <GridItem as={VStack} spacing="3">
            <Heading>Developer Tools</Heading>
            <Text>JavaScript</Text>
            <Text>TypeScript</Text>
            <Text>Git</Text>
            <Text>GraphQL</Text>
            <Text>SQL</Text>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default HomePage;
