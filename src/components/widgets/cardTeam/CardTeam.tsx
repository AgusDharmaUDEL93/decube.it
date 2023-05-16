import { bottom } from "@/animations/linear";
import { linkRedirection } from "@/utils/linkRedirection";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement, ReactNode } from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

type props = {
  image: string;
  name: string;
  children: ReactNode;
  job: string;
};

export default function CardTeam({ image, name, children, job }: props) {
  return (
    <Box as={motion.div} variants={bottom} initial="init" whileInView="animate">
      <Card
        p={"20px"}
        maxWidth={"23rem"}
        borderRadius={"30px"}
        boxShadow={"0.5px 3px 15px rgb(0 0 0 / 12%)"}
      >
        <Center>
          <Image
            src={`/assets/img/data/team/${image}`}
            width={300}
            height={300}
            alt={""}
            loading={"lazy"}
          />
        </Center>
        <Stack>
          <CardBody>
            <Center marginBottom={"5px"} maxWidth={"500px"}>
              <Heading
                fontSize={"2xl"}
                fontWeight={"semibold"}
                textAlign={"center"}
                color={"blue.400"}
              >
                {job}
              </Heading>
            </Center>
            <Heading fontSize={"xl"} fontWeight={"medium"} textAlign={"center"}>
              {name}
            </Heading>
            <SimpleGrid
              display={"flex"}
              flexWrap={"wrap"}
              columns={{ base: 1, lg: 2, xl: 3 }}
              width={"100%"}
              justifyContent={"center"}
              marginTop={"20px"}
            >
              {children}
            </SimpleGrid>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
