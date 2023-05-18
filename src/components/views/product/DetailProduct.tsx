import CardDetailProduct from "@/components/widgets/cardDetailProduct/CardDetailProduct";
import CardEvents from "@/components/widgets/cardDetailProduct/CardDetailProduct";
import { Center, Heading, Stack, Flex, Box } from "@chakra-ui/react";
import { json } from "stream/consumers";

export default function DetailProduct() {
  return (
    <Box px={{ base: 6, md: "10%" }} py={"8"}>
      <Center marginBottom={"3rem"}>
        <Heading color={"blue.400"}>Let see our services</Heading>
      </Center>

      <Stack spacing={10}>
        <CardDetailProduct
          title={"Mobile App Development"}
          isEven={false}
          image={"mobile.png"}
        >
          Kami menghadirkan aplikasi mobile revolusioner yang mengubah hidup
          Anda. Dengan desain yang memukau dan fitur inovatif, kami memberikan
          pengalaman tak terlupakan di genggaman Anda. Tingkatkan produktivitas,
          kenyamanan, dan kesenangan Anda dengan aplikasi mobile kami yang
          intuitif dan terpercaya.
        </CardDetailProduct>
        <CardDetailProduct
          title={"Website Development"}
          isEven={false}
          image={"website.png"}
        >
          Tampilkan diri Anda dengan megah di dunia digital. Situs web kami
          menawarkan desain yang menawan, fungsionalitas yang canggih, dan
          navigasi yang mulus. Kami memastikan pengalaman pengguna yang tak
          terlupakan dan membantu Anda mencapai keunggulan dalam bisnis online
          Anda.
        </CardDetailProduct>
        <CardDetailProduct
          title={"Desktop App Development"}
          isEven={false}
          image={"desktop.png"}
        >
          Kami membawa kekuatan dan kemudahan ke layar komputer Anda. Aplikasi
          desktop kami memberikan solusi yang handal dan efisien untuk kebutuhan
          Anda. Dengan antarmuka yang elegan, performa yang tinggi, dan
          fitur-fitur kelas dunia, kami meningkatkan produktivitas dan
          memperluas batasan kreativitas Anda. Keunggulan di ujung jari Anda.
        </CardDetailProduct>
      </Stack>
    </Box>
  );
}
