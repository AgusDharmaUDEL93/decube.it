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
              In this digital age, we believe that connectivity is what it takes
              to build a successful business empire. Having websites or mobile
              applications that focuses on the user and is easily understandable
              will boost your competitiveness in the market. With the mission to
              get our clients what they truly deserve, Vodjo was founded on
              November 2015 in Bandung, Indonesia. We are a team of talented and
              passionate developers, designers and technopreneurs who thrive on
              designing and developing great user interfaces and experiences for
              websites, web applications and mobile applications. The diversity
              in our team generates a truly unique experiences for our client.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
