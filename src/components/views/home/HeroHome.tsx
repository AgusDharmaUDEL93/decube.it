import { left, right } from "@/animations/linear";
import { scrollToSection } from "@/utils/scroll";
import { Flex, Stack, Heading, Button, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import LottieHero from "../../../../public/assets/lottie/hero_home.json";
import useGotoSection from "@/hooks/helpers/useGoToSection";

export default function HeroHome() {
  const [offer] = useGotoSection("productintro");
  return (
    <Box
      bgColor={"blue.50"}
      bgSize={"cover"}
      bgPosition={"center"}
      boxShadow={"0.5px 3px 15px rgb(0 0 0 / 12%)"}
    >
      <Flex
        height={{ base: "auto", md: "100vh" }}
        justifyContent={{ base: "space-evenly", lg: "space-between" }}
        alignItems={"center"}
        flexDirection={{ base: "column-reverse", lg: "row" }}
        px={{ base: "10", md: "10%" }}
        py={"5"}
      >
        <Stack
          spacing={"5rem"}
          color={"blue.400"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          <Stack spacing={"2rem"}>
            <Heading
              size={{ base: "2xl", sm: "3xl" }}
              fontWeight={"extrabold"}
              textAlign={{ base: "center", lg: "left" }}
            >
              DECUBE IT
            </Heading>
            <Text
              fontSize={{ base: "md", sm: "xl" }}
              width={"auto"}
              maxW={"35rem"}
              textAlign={"justify"}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              nobis ex incidunt laboriosam illo nemo amet reiciendis odio quidem
              nostrum esse aperiam, mollitia, ducimus, accusamus temporibus
              aliquam ipsa officiis quae.
            </Text>
          </Stack>
          <Box>
            <Button
              variant={"solid"}
              py={"1.5rem"}
              px={"2.7rem"}
              borderRadius={"30px"}
              bgColor={"blue.400"}
              colorScheme={"blue"}
              onClick={() => {
                scrollToSection(offer - 90);
              }}
            >
              Get Our Offer !!
            </Button>
          </Box>
        </Stack>
        <Box
          as={motion.div}
          variants={right}
          initial="init"
          whileInView="animate"
        >
          <Lottie
            animationData={LottieHero}
            play
            loop
            style={{ maxWidth: "45rem" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
