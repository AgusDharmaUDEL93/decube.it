import {
  Box,
  Button,
  Center,
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
    <Box id="productintro" px={{ base: 6, md: "10%" }} py={"8"} bgColor={"blue.50"}>
      <Center marginBottom={"3rem"}>
        <Stack align={"center"} maxW={"75rem"}>
          <Heading color={"blue.400"}>OUR SERVICES</Heading>
          <Text textAlign={"center"} fontSize={"xl"}>
            Over the years, our experience has helped our clients set out their
            new ventures in the digital world. Check out some of our best works.
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
          User-friendly iOS and Android application development helps a range of
          start-ups and enterprises to redefine mobile user experiences.
        </CardIntroProducts>
        <CardIntroProducts title={"Website Development"} lottie={Website}>
          User-friendly iOS and Android application development helps a range of
          start-ups and enterprises to redefine mobile user experiences.
        </CardIntroProducts>
        <CardIntroProducts title={"Desktop App Development"} lottie={Desktop}>
          User-friendly iOS and Android application development helps a range of
          start-ups and enterprises to redefine mobile user experiences.
        </CardIntroProducts>
      </SimpleGrid>
    </Box>
  );
}
