import { NextPage } from "next";
import NextLink from "next/link";
import NextHead from "next/head";
import {
  Box,
  HStack,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link,
  useColorModeValue,
  useColorMode,
  useTheme,
  Text,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { ImgContainer } from "./imgStyles";

const HamburberMenuIcon = () => (
  <HamburgerIcon
    boxSize="7"
    color={useColorModeValue("blue.600", "cyan.600")}
  />
);

const LinkItem: FC<{
  href: string;
}> = ({ href, children }) => {
  const theme = useTheme();

  return (
    <NextLink href={href} passHref>
      <Link
        as="a"
        fontFamily="brandTitle"
        fontSize={{ base: "xl", lg: "2xl" }}
        _hover={{
          backgroundClip: "text",
          transform: "scale(1.25)",
          backgroundImage: useColorModeValue(
            `linear-gradient(to right, ${theme?.colors?.brandSky400}, ${theme?.colors?.brandBlue500})`,
            `linear-gradient(to right, ${theme?.colors?.brandSky400}, ${theme?.colors?.brandCyan700})`
          ),
          textColor: "transparent",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Layout: NextPage = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Abhishek's Portfolio" />
        <meta name="author" content="Abhishek Rauthan" />
        <meta property="og:site_name" content="Abhishek Rauthan" />
        <meta name="og:title" content="Abhishek Rauthan" />
        <meta property="og:type" content="website" />
      </NextHead>
      <Box as="header" width="100%">
        <HStack
          as="nav"
          display="flex"
          justify="space-between"
          align="center"
          maxWidth="container.xl"
          marginX="auto"
          padding="2.5"
          spacing={{ base: "0", md: "5" }}
        >
          {/* Menu Start here */}
          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy aria-label="Menu" closeOnBlur>
              <MenuButton
                as={IconButton}
                icon={<HamburberMenuIcon />}
                bgColor={useColorModeValue("white", "gray.800")}
                border="none"
                _active={{
                  backgroundColor: useColorModeValue("white", "gray.800"),
                }}
                _selected={{
                  backgroundColor: useColorModeValue("white", "gray.800"),
                }}
              />
              <MenuList>
                <NextLink passHref href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink passHref href="/projects">
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  icon={<IoLogoGithub />}
                  href="https://github.com/AbhishekRauthan"
                >
                  Profile
                </MenuItem>
                <NextLink passHref href="/projects">
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
          {/* Menu Ends here */}
          <NextLink href="/" passHref>
            <Link _hover={{}}>
              <Heading
                fontFamily="brandHeading"
                textColor="transparent"
                bgClip="text"
                fontSize={{ base: "4xl", md: "5xl" }}
                bgGradient={useColorModeValue(
                  "linear(to-r, brandSky400, brandBlue500)",
                  "linear(to-r, brandSky400, brandCyan700)"
                )}
              >
                AR
              </Heading>
            </Link>
          </NextLink>
          {/* Links Start here */}
          <HStack
            display={{ base: "none", md: "inline-flex" }}
            flexGrow="1"
            justifyContent="flex-end"
            alignItems="center"
            spacing="10"
          >
            <LinkItem href="/">About</LinkItem>
            <LinkItem href="/projects">Projects</LinkItem>
            <LinkItem href="https://github.com/AbhishekRauthan">
              Github
            </LinkItem>
            <LinkItem href="https://github.com/AbhishekRauthan">
              Resume
            </LinkItem>
          </HStack>
          {/* Links End here */}
          {/* Animated Theme Toggle Button */}
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              style={{ display: "inline-block" }}
              key={useColorModeValue("light", "dark")}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconButton
                aria-label="Toggle theme"
                bgColor={useColorModeValue("#1e293b", "#f59e0b")}
                color={useColorModeValue("white", "#1e293b")}
                _hover={{
                  bgColor: useColorModeValue("#9ca3af", "#b45309"),
                  color: useColorModeValue("#1e293b", "white"),
                }}
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColorMode}
                h={{ base: "8" }}
                w={{ base: "8" }}
                boxSize={{ base: "10", md: "12" }}
              />
            </motion.div>
          </AnimatePresence>
        </HStack>
      </Box>
      <Box paddingTop={{ base: "20" }}>
        <ImgContainer
          bgColor={useColorModeValue(
            theme?.colors?.brandBlue500,
            theme?.colors?.brandCyan700
          )}
        >
          <Img
            boxSize={{ base: "44" }}
            src="/assets/cod (1).svg"
            alt="My Avatar SVG"
            rounded="full"
            marginX="auto"
          />
        </ImgContainer>
      </Box>
      <Box
        marginTop={{ base: "8" }}
        marginBottom={{ base: "16" }}
        marginX="auto"
        display="flex"
        alignContent="baseline"
        textAlign="center"
        flexDirection={{ base: "column" }}
      >
        <Heading
          as="h1"
          paddingX="4"
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
          marginY="7"
          paddingX={{ base: "3" }}
          letterSpacing={{ base: "wide" }}
        >
          I design and code beautifull solutions for the web
        </Text>
      </Box>
      {children}
    </>
  );
};

export default Layout;
