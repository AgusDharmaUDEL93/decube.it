import { bottom } from "@/animations/linear";
import { Center, Stack, Heading, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroProduct() {
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
          <Heading color={"blue.700"}>Product</Heading>
          <Text textAlign={"center"}>
            Kami berkomitmen untuk menyediakan layanan pengembangan perangkat
            lunak berkualitas tinggi dan memberikan nilai terbaik kepada
            pelanggan kami dari seluruh dunia.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
