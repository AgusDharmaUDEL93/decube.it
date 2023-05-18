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
        height={{ base: "auto", lg: "80vh" }}
        justifyContent={{ base: "space-evenly", lg: "space-between" }}
        alignItems={"center"}
        flexDirection={{ base: "column", lg: "row" }}
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
              Beberapa keahlian kami meliputi: Desain UI/UX, Penelitian UX,
              Desain dan Pengembangan Website Responsif, Kampanye Microsite,
              Pengembangan Sistem Manajemen Konten (CMS), Pengembangan Platform
              eCommerce, Pengembangan Aplikasi Web Kustom, serta Pengembangan
              Aplikasi Mobile.
            </Text>
          </Box>
          <Box>
            <Heading>We listen to your goals and deliver what you want</Heading>
            <Text>
              Kami bangga dengan kemampuan kami untuk memahami klien kami. Kami
              mendengarkan tujuan Anda dan memberikan yang Anda inginkan. Dengan
              strategi yang disesuaikan dengan kebutuhan Anda, kami akan
              merumuskan strategi yang tepat hanya untuk Anda. Belum lagi, tim
              kami yang teliti akan memastikan untuk menjaga layanan hingga tak
              terbatas!
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
