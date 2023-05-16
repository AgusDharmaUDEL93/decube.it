import { left, right } from "@/animations/linear";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import Vision from "../../../../public/assets/lottie/vision.json";

export default function QuoteHome() {
  return (
    <Box bgSize={"cover"} bgPosition={"center"}>
      <Flex
        height={{ base: "auto", md: "80vh" }}
        justifyContent={{ base: "space-evenly", lg: "space-between" }}
        alignItems={"center"}
        flexDirection={{ base: "column-reverse", lg: "row" }}
        px={{ base: "10", md: "10%" }}
        py={"5rem"}
      >
        <Box
          as={motion.div}
          variants={right}
          initial="init"
          whileInView="animate"
        >
          <Lottie
            animationData={Vision}
            play
            loop
            style={{ maxWidth: "35rem" }}
          />
        </Box>
        <Stack
          spacing={"5rem"}
          color={"blue.400"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
          maxWidth={"45rem"}
        >
          <Box>
            <Heading>With great dedication, comes great expertise</Heading>
            <Text>
              Some of our expertises include: UI/UX Design, UX Research,
              Responsive Website Design and Development, Microsite Campaign,
              Content Management System (CMS) Development, eCommerce Platform
              Development, Custom Web Application Development, as well as Mobile
              Application Development.
            </Text>
          </Box>
          <Box>
            <Heading>We listen to your goals and deliver what you want</Heading>
            <Text>
              We are proud of our ability to understand our client. We listen to
              your goals and deliver what you want. With our individualized
              strategy, we will formulate the right strategy just for you. Not
              to mention, our conscientious team will make sure to maintain the
              services to infinity and beyond!
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
