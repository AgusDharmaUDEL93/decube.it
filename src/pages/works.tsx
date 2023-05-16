import HeroWorks from "@/components/views/works/HeroWorks";
import ProjectWorks from "@/components/views/works/ProjectWorks";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function Works() {
  return (
    <Layouts title="Works | Decube IT">
      <HeroWorks />
      <ProjectWorks />
    </Layouts>
  );
}
