import {
  SimpleGrid,
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  Tag,
  Button,
} from "@chakra-ui/react";
import Project from "../../../data/static/project/project.json";
import CardProject from "@/components/widgets/cardProject/CardProject";

export default function ProjectWorks() {
  return (
    <Box px={{ base: 6, md: "10%" }} py={"5rem"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        {Project.map((data, index) => {
          return (
            <CardProject
              key={index}
              tags={data.tags}
              title={data.title}
              link={data.link}
              image={data.image}
            >
              {data.desc}
            </CardProject>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
