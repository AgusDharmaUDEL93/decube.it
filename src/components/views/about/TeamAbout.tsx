import CardSkill from "@/components/widgets/cardSkill/CardSkill";
import CardTeam from "@/components/widgets/cardTeam/CardTeam";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Team from "../../../data/static/team/team.json";

export default function TeamAbout() {
  return (
    <Box py={"5rem"}>
      <SimpleGrid
        px={{ base: 0, md: "5rem" }}
        display={"flex"}
        flexWrap={"wrap"}
        columns={{ base: 1, lg: 2, xl: 3 }}
        width={"100%"}
        justifyContent={"center"}
        spacing={"5rem"}
      >
        {Team.map((data, index) => {
          return (
            <CardTeam
              key={index}
              image={data.image}
              job={data.job}
              name={data.name}
            >
              {data.skill.map((data, index) => {
                return <CardSkill key={index} image={data} />;
              })}
            </CardTeam>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
