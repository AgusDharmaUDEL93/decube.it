import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import Json404 from "../../public/assets/lottie/404.json";

export default function Error404() {
  return (
    <Layouts title="Not Found | Decube IT">
      <Box as={"section"}>
        <Center height={"100vh"}>
          <Stack alignItems={"center"} direction={"column"} spacing={"30px"}>
            <Lottie animationData={Json404} play loop />
            <Box height={"2rem"} />
            <Heading letterSpacing={"7px"}>
              <Heading as={"span"} color={"blue.400"}>
                Opps
              </Heading>
              , your page not found !
            </Heading>
            <Text fontSize={"lg"} maxWidth={"35rem"} textAlign={"center"}>
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable
            </Text>
          </Stack>
        </Center>
      </Box>
    </Layouts>
  );
}
