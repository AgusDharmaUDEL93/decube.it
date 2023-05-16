import { bottom } from "@/animations/linear";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroAbout() {
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
          <Heading>About</Heading>
          <Text>Let{"'"}s get to know each other better, start with you.</Text>
        </Stack>
      </Center>
    </Box>
  );
}
