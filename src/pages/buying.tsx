import { linkRedirection } from "@/utils/linkRedirection";
import navigate from "@/utils/navigate";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  Textarea,
  useBoolean,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Buying() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [decs, setDesc] = useState("");
  const router = useRouter();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"90rem"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Please fill this forms
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Enjoy our cool product ✌️
          </Text>
        </Stack>
        <Box
          width={{ lg: "50rem" }}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
              linkRedirection(
                `https://wa.me/+6281547427721?text=Hai%20Admin%20Decube%2C%20beli%20produk%20IT%20dong%0A%0A*Decube%20IT*%0AProduk%20yang%20dibeli%20%3A%20*${product}*%0ANama%20%3A%20*${name}*%0AEmail%20%3A%20*${email}*%0A%20%0AMohon%20konsultasinya%20yaa%20min%20saya%20ingin%20membuat%20produk%20seperti%3A%20%0A${decs}%0A%0ASemoga%20dapat%20bekerja%20sama%20dengan%20Decube%20IT`
              );
              navigate(router, "/");
            }}
          >
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={(event) => {
                    setName(encodeURI(event.target.value));
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel id="email">Email</FormLabel>
                <Input
                  type="email"
                  onChange={(event) => {
                    setEmail(encodeURI(event.target.value));
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Select Product</FormLabel>
                <Select
                  placeholder="Select product"
                  onChange={(event) => {
                    setProduct(encodeURI(event.target.value));
                  }}
                >
                  <option value="Mobile App">Mobile App Development</option>
                  <option value="Website">Website Development</option>
                  <option value="Desktop">Desktop App Development</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Decription Product</FormLabel>
                <Textarea
                  height={{ base: "15rem", lg: "20rem" }}
                  onChange={(event) => {
                    setDesc(encodeURI(event.target.value));
                  }}
                />
              </FormControl>

              <Button
                bg={"blue.400"}
                color={"white"}
                type="submit"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Buy and Consultation
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
