import { bottom } from "@/animations/linear";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroAbout() {
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
          <Heading color={"blue.700"}>About</Heading>
          <Text textAlign={"center"}>
            Mari mengenal lebih baik satu sama lain, dimulai dari kami
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
