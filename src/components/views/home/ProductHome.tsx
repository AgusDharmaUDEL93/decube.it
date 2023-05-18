import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Mobile from "../../../../public/assets/lottie/mobile_services.json";
import Website from "../../../../public/assets/lottie/website_services.json";
import Desktop from "../../../../public/assets/lottie/desktop_services.json";
import CardIntroProducts from "@/components/widgets/cardIntroProduct/CardIntroProduct";

export default function ProductHome() {
  return (
    <Flex
      height={{ base: "auto", lg: "85rem" }}
      bgColor={{ base: "blue.50", lg: "transparent" }}
      bgImage={{ base: "none", lg: `/assets/img/BgProductHome.png` }}
      bgSize={"cover"}
      bgPosition={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      px={{ base: 6, md: "10%" }}
      paddingTop={{ base: "3rem" }}
      paddingBottom={{ base: "3rem", lg: "10rem" }}
    >
      <Box id="productintro">
        <Center marginBottom={"3rem"}>
          <Stack align={"center"} maxW={"75rem"}>
            <Heading color={"blue.700"}>OUR SERVICES</Heading>
            <Text textAlign={"center"} fontSize={"xl"}>
              Kami mendorong diri kami untuk menjadi kreatif dalam setiap
              proyek. Kreativitas seperti itu diterapkan pada semua aspek,
              termasuk memaksimalkan anggaran dan waktu Anda.
            </Text>
          </Stack>
        </Center>
        <SimpleGrid
          display={"flex"}
          flexWrap={"wrap"}
          columns={{ base: 1, lg: 2, xl: 3 }}
          width={"100%"}
          justifyContent={"center"}
          spacing={"5rem"}
        >
          <CardIntroProducts title={"Mobile App Development"} lottie={Mobile}>
            Temukan keajaiban aplikasi mobile yang mengubah hidup Anda serta
            memberikan kenyamanan di ujung jari Anda.
          </CardIntroProducts>
          <CardIntroProducts title={"Website Development"} lottie={Website}>
            Sajikan diri Anda kepada dunia dengan situs web yang menarik,
            menampilkan keunggulan Anda dengan desain yang memikat.
          </CardIntroProducts>
          <CardIntroProducts title={"Desktop App Development"} lottie={Desktop}>
            Kuasai dunia digital dengan aplikasi desktop yang menghadirkan
            kekuatan dan kenyamanan di layar komputer Anda.
          </CardIntroProducts>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
