import { Stack, Heading, Icon, Box, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdHand } from "react-icons/io";

const HomePage = () => {
  return (
    <Stack
      as="section"
      height={{ base: "90vh" }}
      maxW="container.xl"
      marginX="auto"
      direction={["column", "row"]}
    >
      <Box
        marginTop={{ base: "7" }}
        marginX="auto"
        display="inline-flex"
        alignContent="baseline"
        textAlign="center"
      >
        <Heading
          as="h1"
          paddingX="4"
          fontFamily="brandTitle"
          fontSize="xl"
          fontWeight="normal"
        >
          Hi{" "}
          <motion.div
            style={{ display: "inline-block", width: "max-content" }}
            initial={{ rotate: 0 }}
            animate={{ rotate: -20 }}
            exit={{ rotate: -20 }}
            transition={{
              duration: 0.2,
              yoyo: 10,
            }}
          >
            <Icon as={IoMdHand} color="#f59e0b" boxSize={{ base: "7" }} />
          </motion.div>
          ,I am a Front-End Developer based in New-Delhi, India
        </Heading>
      </Box>
      <Box paddingTop={{base:"3.5"}}>
        <Img
          boxSize={{ base: "24" }}
          src="/assets/cod (1).svg"
          alt="My Avatar SVG"
          rounded="full"
          marginX="auto"
        />
      </Box>
    </Stack>
  );
};

export default HomePage;
