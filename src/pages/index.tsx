import HeroHome from "@/components/views/home/HeroHome";
import ProductHome from "@/components/views/home/ProductHome";
import ProjectHome from "@/components/views/home/ProjectHome";
import QuoteHome from "@/components/views/home/QuoteHome";
import Navbar from "@/components/widgets/navbar/Navbar";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layouts title={"DECUBE IT | Your Great Software Solution"}>
      <HeroHome />
      <ProjectHome />
      <ProductHome />
      <QuoteHome />
    </Layouts>
  );
}
