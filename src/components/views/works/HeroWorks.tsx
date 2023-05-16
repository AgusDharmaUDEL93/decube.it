import { bottom } from "@/animations/linear";
import { Center, Stack, Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroWorks() {
  return (
    <Box>
      <Center height={"25rem"} bgColor={"blue.50"}>
        <Stack
          align={"center"}
          as={motion.div}
          variants={bottom}
          initial="init"
          whileInView="animate"
        >
          <Heading>Works</Heading>
          <Text>It is an honour for us to showcase the best of our works.</Text>
        </Stack>
      </Center>
    </Box>
  );
}
