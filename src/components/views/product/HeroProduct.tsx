import { bottom } from "@/animations/linear";
import { Center, Stack, Heading, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroProduct() {
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
          <Heading>Product</Heading>
          <Text>
            We are committed to provide the best value and high-quality software
            development services to our customers from all over the world.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
