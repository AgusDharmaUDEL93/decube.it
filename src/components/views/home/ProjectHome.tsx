import { bottom } from "@/animations/linear";
import CardIntroWorks from "@/components/widgets/cardIntroWorks/CardIntroWorks";
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Project from "../../../data/static/project/project.json";

export default function ProjectHome() {
  return (
    <Box px={{ base: 6, md: "10%" }} py={"5rem"}>
      <Box>
        <Center
          as={motion.div}
          variants={bottom}
          initial="init"
          whileInView="animate"
        >
          <Stack align={"center"} maxW={"75rem"}>
            <Heading color={"blue.400"}>FEATURED WORKS</Heading>
            <Text textAlign={"center"} fontSize={"xl"}>
              Pengalaman kami yang telah membantu beberapa klien kami untuk
              memulai usaha baru mereka di dunia digital. Lihat beberapa karya
              terbaik kami.
            </Text>
          </Stack>
        </Center>
        <Box height={"3rem"} />
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {Project.map((data, index) => {
            return (
              <CardIntroWorks
                key={index}
                title={data.title}
                image={data.image}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
