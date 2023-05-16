import { bottom } from "@/animations/linear";
import { linkRedirection } from "@/utils/linkRedirection";
import navigate from "@/utils/navigate";
import { Heading, Button, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Lottie from "react-lottie-player";

type props = {
  children: string;
  title: string;
  lottie: object;
};

export default function CardIntroProducts({ children, title, lottie }: props) {
  const router = useRouter();
  return (
    <Box
      maxW={"20rem"}
      px={"2rem"}
      paddingBottom={"2rem"}
      borderRadius={30}
      bgColor={"white"}
      boxShadow={"0.5px 3px 15px rgb(0 0 0 / 12%)"}
      as={motion.div}
      variants={bottom}
      initial="init"
      whileInView="animate"
    >
      <Lottie animationData={lottie} play loop style={{ height: "17rem" }} />
      <Heading fontSize={"3xl"}>{title}</Heading>
      <Text textAlign={"justify"} py={5}>
        {children}
      </Text>
      <Button
        colorScheme="blue"
        onClick={() => {
          navigate(router, "/buying");
        }}
      >
        Buy Now
      </Button>
    </Box>
  );
}
