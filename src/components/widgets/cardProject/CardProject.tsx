import { bottom } from "@/animations/linear";
import { linkRedirection } from "@/utils/linkRedirection";
import {
  AspectRatio,
  Stack,
  Heading,
  Tag,
  Button,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type props = {
  children: string;
  tags: string;
  title: string;
  link: string;
  image: string;
};
export default function CardProject({
  children,
  tags,
  title,
  link,
  image,
}: props) {
  return (
    <Box
      maxWidth={"70rem"}
      as={motion.div}
      variants={bottom}
      initial="init"
      whileInView="animate"
    >
      <AspectRatio ratio={16 / 9}>
        <Image alt="PKM Center" src={`/assets/img/data/project/${image}`} />
      </AspectRatio>
      <Stack py={"2rem"} spacing={"1rem"}>
        <Heading fontSize={"2xl"}>
          {title} <Tag colorScheme="twitter">{tags}</Tag>{" "}
        </Heading>
        <Text textAlign={"justify"}>{children}</Text>
        <Box>
          <Button
            colorScheme="blue"
            onClick={() => {
              linkRedirection(link);
            }}
          >
            See Our Works
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
