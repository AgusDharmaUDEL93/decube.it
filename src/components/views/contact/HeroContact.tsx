import { Box, Center, Stack, Heading, Text } from "@chakra-ui/react";

export default function HeroContact() {
  return (
    <Box>
      <Center height={"25rem"} bgColor={"blue.50"}>
        <Stack align={"center"}>
          <Heading>Contact</Heading>
          <Text>Don{"'"}t let your questions hanging, consult now.</Text>
        </Stack>
      </Center>
    </Box>
  );
}
