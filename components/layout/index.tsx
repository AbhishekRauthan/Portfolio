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
  Img,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { ImgContainer } from "./imgStyles";
import { useGradient, useHamburgerGradient } from "@components/theme";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LinkItem: FC<{
  href: string;
  path: string;
}> = ({ href, children, path }) => {
  const active = path === href;
  console.log(`${href}: ${active}`);

  return (
    <NextLink href={href} passHref>
      <Link
        as="a"
        fontFamily="brandTitle"
        fontSize={{ base: "xl", lg: "2xl" }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bgImage={active ? useGradient() : "white"}
        bgClip={active ? "text" : undefined}
        _hover={{
          backgroundClip: "text",
          transform: "scale(1.25)",
          backgroundImage: useGradient(),
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

type Props = {
  children: ReactNode;
  path: string;
};

const Layout = ({ children, path }: Props) => {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I design and code beautifull solutions for the web"
        />
        <meta name="author" content="Abhishek Rauthan" />
        <meta property="og:site_name" content="Abhishek Rauthan" />
        <meta
          name="og:title"
          content="Abhishek Rauthan | Front-End Developer | Data Science Enthusiast"
        />
        <meta property="og:type" content="website" />
      </NextHead>
      <motion.header
        style={{ width: "100%" }}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{
          duration: 1,
        }}
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
                icon={
                  <HamburgerIcon
                    boxSize="7"
                    color={useColorModeValue("blue.600", "cyan.600")}
                  />
                }
                bgColor={useHamburgerGradient()}
                border="none"
                _active={{
                  backgroundColor: useHamburgerGradient(),
                }}
                _selected={{
                  backgroundColor: useHamburgerGradient(),
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
                <NextLink passHref href="/resume">
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
          {/* Menu Ends here */}
          <NextLink href="/" passHref>
            <Heading
              as="a"
              fontFamily="brandHeading"
              textColor="transparent"
              bgClip="text"
              fontSize={{ base: "4xl", md: "5xl" }}
              bgGradient={useGradient()}
            >
              AR
            </Heading>
          </NextLink>
          {/* Links Start here */}
          <HStack
            display={{ base: "none", md: "inline-flex" }}
            flexGrow="1"
            justifyContent="flex-end"
            alignItems="center"
            spacing="10"
          >
            <LinkItem href="/" path={path}>
              About
            </LinkItem>
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem href="https://github.com/AbhishekRauthan" path={path}>
              Github
            </LinkItem>
            <LinkItem href="/resume" path={path}>
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
      </motion.header>
      <ChakraBox
        paddingTop={{ base: "10", md: "16", lg: "20" }}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{
          duration: "1",
        }}
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
      </ChakraBox>
      {children}
    </>
  );
};

export default Layout;
