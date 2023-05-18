import { bottom } from "@/animations/linear";
import { Center, Stack, Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroWorks() {
  return (
    <Box
      bgImage={`/assets/img/BgHero.png`}
      bgPosition={"center"}
      bgSize={"cover"}
      height={"30rem"}
      px={"5rem"}
    >
      <Center height={"22rem"}>
        <Stack
          align={"center"}
          as={motion.div}
          variants={bottom}
          initial="init"
          whileInView="animate"
        >
          <Heading color={"blue.700"}>Works</Heading>
          <Text textAlign={"center"}>
            Ini adalah kehormatan bagi kami untuk memamerkan karya terbaik kami.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
