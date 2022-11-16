import { Heading as ChakraHeading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Heading = ({ children }: Props) => {
  return (
    <ChakraHeading
      as="h1"
      fontFamily="brandTitle"
      fontSize={{ base: "2xl" }}
      fontWeight="bold"
      letterSpacing={{ base: "wider" }}
    >
      {children}
    </ChakraHeading>
  );
};

export default Heading;
