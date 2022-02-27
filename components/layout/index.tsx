import { NextPage } from "next";
import NextLink from "next/link";
import {
  Box,
  HStack,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  Icon,
  MenuList,
  MenuItem,
  Link,
  useColorModeValue,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

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
          backgroundImage: useColorModeValue(
            `linear-gradient(to right, ${theme?.colors?.brandSky400}, ${theme?.colors?.brandBlue500})`,
            `linear-gradient(to right, ${theme?.colors?.brandSky400}, ${theme?.colors?.brandCyan700})`
          ),
          textColor: "transparent",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Layout: NextPage = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
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
                <NextLink href="/about">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects">
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  icon={<IoLogoGithub />}
                  href="https://github.com/AbhishekRauthan"
                >
                  Profile
                </MenuItem>
                <NextLink href="/projects">
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
            <LinkItem href="/about">About</LinkItem>
            <LinkItem href="/project">Project</LinkItem>
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
      {children}
    </>
  );
};

export default Layout;
