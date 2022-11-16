import { Text as ChakraText } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Text = ({ children }: Props) => {
  return (
    <ChakraText
      fontFamily="brandBody"
      fontSize={{ base: "xl" }}
      paddingX={{ base: "3" }}
      letterSpacing={{ base: "wide" }}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
