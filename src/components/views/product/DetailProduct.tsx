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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          itaque a vitae sapiente alias autem velit nulla nihil ab ex modi
          repellendus, nostrum ipsum! Nihil voluptate at reprehenderit animi
          quasi.
        </CardDetailProduct>
        <CardDetailProduct
          title={"Website Development"}
          isEven={false}
          image={"website.png"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aliquid dolorem sint, maxime vitae veritatis, sit minima odio dolore
          accusantium laudantium aliquam quas, sed non quidem molestias
          architecto laborum repellat?
        </CardDetailProduct>
        <CardDetailProduct
          title={"Desktop App Development"}
          isEven={false}
          image={"desktop.png"}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          quidem velit rem voluptatem sit officia beatae magnam, repellat dolor
          molestiae incidunt atque. Dignissimos rerum, officia animi ab nihil
          ipsam commodi.
        </CardDetailProduct>
      </Stack>
    </Box>
  );
}
