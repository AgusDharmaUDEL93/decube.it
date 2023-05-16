import DetailProduct from "@/components/views/product/DetailProduct";
import HeroProduct from "@/components/views/product/HeroProduct";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function Product() {
  return (
    <Layouts title="Products | Decube IT">
      <HeroProduct />
      <DetailProduct />
      <Box height={"5rem"} />
    </Layouts>
  );
}
