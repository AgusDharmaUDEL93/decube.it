import { right, left } from "@/animations/linear";
import { scrollToSection } from "@/utils/scroll";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ExplainAbout() {
  return (
    <Box>
      <Flex
        height={"auto"}
        justifyContent={{ base: "space-evenly", lg: "space-around" }}
        alignItems={"center"}
        flexDirection={{ base: "column", lg: "row" }}
        px={{ base: "10", md: "10%" }}
        paddingBottom={"7rem"}
      >
        <Box
          as={motion.div}
          variants={right}
          initial="init"
          whileInView="animate"
          py={{ base: 20, sm: 0 }}
        >
          <Image
            alt={""}
            src={`/assets/img/HeroAbout.webp`}
            width={500}
            height={"100%"}
            objectFit={"contain"}
          />
        </Box>
        <Box width={{ lg: "5rem" }} />
        <Stack
          spacing={"5rem"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          <Stack spacing={"2rem"} maxW={"40rem"}>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              Who We Are ?
            </Text>
            <Heading textAlign={"justify"} color={"blue.400"}>
              The team that will bring your imagination into reality
            </Heading>
            <Divider colorScheme="blackAlpha" />
            <Text textAlign={"justify"}>
              Pada era digital ini, kami meyakini bahwa konektivitas adalah
              kunci keberhasilan dalam membangun kerajaan bisnis. Melalui situs
              web dan aplikasi mobile yang berorientasi pada pengguna dan mudah
              dipahami, kami meningkatkan daya saing bisnis Anda di pasar.
              Sebagai Decube IT, misi kami adalah memberikan nilai sejati kepada
              klien kami. Kami adalah tim pengembang, desainer, dan
              technopreneur yang berdedikasi, fokus pada pengembangan antarmuka
              pengguna yang luar biasa untuk situs web, aplikasi web, dan
              aplikasi mobile. Keberagaman dalam tim kami menciptakan pengalaman
              yang benar-benar unik bagi setiap klien kami.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
