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
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";

type props = {
  image: string;
  status: string;
  children: string;
  wa: string;
  instagram: string;
  email: string;
};

export default function CardContact({
  status,
  children,
  wa,
  instagram,
  email,
  image,
}: props) {
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
            <Center marginBottom={"20px"} maxWidth={"500px"}>
              <Heading
                fontSize={"2xl"}
                fontWeight={"semibold"}
                textAlign={"center"}
              >
                {status}
              </Heading>
            </Center>
            <Heading
              fontSize={"xl"}
              fontWeight={"semibold"}
              textAlign={"center"}
            >
              <i>{children}</i>
            </Heading>
            <Stack direction={"row"} justify={"center"} my={"20px"}>
              <Button
                p={0}
                colorScheme={"whatsapp"}
                variant={"outline"}
                onClick={() => {
                  linkRedirection(`https://wa.me/+${wa}`);
                }}
              >
                <AiOutlineWhatsApp size={"25px"} />
              </Button>
              <Button
                p={0}
                colorScheme={"pink"}
                variant={"outline"}
                onClick={() => {
                  linkRedirection(`https://instagram.com/${instagram}`);
                }}
              >
                <AiOutlineInstagram size={"25px"} />
              </Button>
              <Button
                p={0}
                colorScheme={"red"}
                variant={"outline"}
                onClick={() => {
                  linkRedirection(`mailto:${email}`);
                }}
              >
                <AiOutlineMail size={"25px"} />
              </Button>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
