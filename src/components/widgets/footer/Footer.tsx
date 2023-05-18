import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { ImLocation2 } from "react-icons/im";
import { RiInstagramFill, RiMailFill, RiLink } from "react-icons/ri";

import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { bottom } from "@/animations/linear";
import navigate from "@/utils/navigate";
import { linkRedirection } from "@/utils/linkRedirection";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const router = useRouter();

  return (
    <Box
      bg={"blue.50"}
      color={useColorModeValue("gray.700", "gray.200")}
      as={motion.div}
      variants={bottom}
      initial="init"
      whileInView="animate"
      boxShadow={"-0.5px -2px 15px rgb(0 0 0 / 12%)"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Office</ListHeader>
            <HStack>
              <ImLocation2 size={50} />

              <Text textAlign={"justify"}>
                Jalan Nangka Utara Gang Triti No. 11, Denpasar Utara
              </Text>
            </HStack>
            <Box height={5} />
            <ListHeader>Consultation with us</ListHeader>

            <Button
              variant={"unstyled"}
              p={0}
              height={6}
              fontWeight={"normal"}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/contact");
              }}
            >
              Let{"'"}s Go
            </Button>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Menu</ListHeader>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/");
              }}
            >
              Home
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/about");
              }}
            >
              About
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/announcement");
              }}
            >
              Product
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/announcement");
              }}
            >
              Our Works
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/contact");
              }}
            >
              Contact
            </Button>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <Text>Website</Text>
            <Text>Mobile Application</Text>
            <Text>Desktop Application</Text>
          </Stack>
          <Stack align={"flex-start"} padding={0}>
            <ListHeader>Follow Us</ListHeader>
            <HStack>
              <Button
                padding={0}
                colorScheme={"blue"}
                borderRadius={"full"}
                onClick={() => {
                  linkRedirection(
                    "https://instagram.com/decube_it?igshid=MzRlODBiNWFlZA=="
                  );
                }}
              >
                <RiInstagramFill />
              </Button>
              <Text>@decube_it</Text>
            </HStack>
            <HStack>
              <Button padding={0} colorScheme={"blue"} borderRadius={"full"}>
                <RiMailFill />
              </Button>
              <Text
                maxWidth={{ base: "13rem", md: "20rem" }}
                onClick={() => {
                  linkRedirection("mailto:decube.it@gmail.com");
                }}
              >
                decube.it@gmail.com
              </Text>
            </HStack>
            <HStack>
              <Button
                padding={0}
                colorScheme={"blue"}
                borderRadius={"full"}
                onClick={() => {
                  navigate(router, "/");
                }}
              >
                <RiLink />
              </Button>
              <Text>decube-it.vercel.app</Text>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            src="/assets/img/logo.png"
            alt="Decube IT"
            loading="lazy"
            height={"3rem"}
          />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Decube IT Dev. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
