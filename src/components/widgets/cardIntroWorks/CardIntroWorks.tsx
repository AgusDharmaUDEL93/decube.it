import { bottom } from "@/animations/linear";
import { AspectRatio, Center, Heading, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

type props = {
  image: string;
  title: string;
};

export default function CardIntroWorks({ image, title }: props) {
  return (
    <Box as={motion.div} variants={bottom} initial="init" whileInView="animate">
      <AspectRatio ratio={16 / 9}>
        <Image alt="" src={`/assets/img/data/project/${image}`} />
      </AspectRatio>
      <Center py={5}>
        <Heading fontSize={"2xl"}>{title}</Heading>
      </Center>
    </Box>
  );
}
