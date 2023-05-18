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
      height={"70rem"}
      bgImage={`/assets/img/BgHeroHome.png`}
      bgSize={"cover"}
      bgPosition={"center"}
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
          color={"blue.700"}
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
              Decube IT adalah startup pengembangan software yang menawarkan
              solusi kreatif dan profesional dalam pembuatan website, mobile
              app, dan desktop app. Kami fokus pada pengalaman pengguna yang
              menarik dan fungsional.
            </Text>
            <Text
              fontSize={{ base: "md", sm: "xl" }}
              width={"auto"}
              maxW={"35rem"}
              fontWeight={"semibold"}
            >
              <i>
                {'"'}Membuka kotak inovasi, mengguncang dunia industri
                {'"'}
              </i>
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
