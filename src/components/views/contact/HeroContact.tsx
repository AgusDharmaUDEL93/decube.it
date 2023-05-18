import { bottom } from "@/animations/linear";
import { Box, Center, Stack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroContact() {
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
          <Heading color={"blue.700"}>Contact</Heading>
          <Text textAlign={"center"}>
            Jangan biarkan pertanyaanmu menggantung, konsultasikan sekarang
            juga.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
