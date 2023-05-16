import { left, right } from "@/animations/linear";
import { linkRedirection } from "@/utils/linkRedirection";
import navigate from "@/utils/navigate";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type props = {
  title: string;
  children: string;
  isEven: boolean;
  image: string;
};

export default function CardDetailProduct({
  title,
  children,
  isEven,
  image,
}: props) {
  const router = useRouter();
  return (
    <Flex
      as={motion.div}
      variants={isEven ? right : left}
      initial="init"
      whileInView="animate"
      flexDirection={{ base: "column", lg: isEven ? "row-reverse" : "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"2px solid"}
      borderRadius={"2rem"}
      borderColor={"blue.400"}
      bgColor={"white"}
      py={10}
      px={10}
    >
      <AspectRatio
        ratio={16 / 9}
        width={{ base: 0, md: "30rem", lg: "40rem" }}
        marginBottom={{ base: 5, lg: 0 }}
      >
        <Image
          src={`/assets/img/data/product/${image}`}
          alt={""}
          width={"300"}
          height={"100"}
          borderRadius={"10px"}
        />
      </AspectRatio>
      <Stack maxWidth={"45rem"} spacing={10} px={{ base: 0, sm: 5 }}>
        <Heading>{title}</Heading>
        <Text maxWidth={"45rem"} textAlign={"justify"}>
          {children}
        </Text>
        <Box>
          <Button
            width={"6rem"}
            colorScheme={"blue"}
            onClick={() => {
              navigate(router, "/buying");
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
}
