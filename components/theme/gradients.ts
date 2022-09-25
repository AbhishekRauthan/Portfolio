import { useColorModeValue, useTheme } from "@chakra-ui/react";

export const useGradient = () => {
  const theme = useTheme();
  return useColorModeValue(
    `linear-gradient(to right, ${theme?.colors?.brandSky400}, ${theme?.colors?.brandBlue500})`,
    `linear-gradient(to right, ${theme?.colors?.brandSky400}, ${theme?.colors?.brandCyan700})`
  );
};

export const useHamburgerGradient = ()  => useColorModeValue("white", "gray.800")