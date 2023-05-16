import CardContact from "@/components/widgets/cardContact/CardContact";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Kontak from "../../../data/static/contact/contact.json";

export default function MainContact() {
  return (
    <Box px={{ base: 6, md: "10%" }} py={"5rem"}>
      <SimpleGrid
        display={"flex"}
        flexWrap={"wrap"}
        columns={{ base: 1, lg: 2, xl: 3 }}
        width={"100%"}
        justifyContent={"center"}
        spacing={"5rem"}
      >
        {Kontak.map((data, index) => {
          return (
            <CardContact
              key={index}
              image={data.image}
              status={data.job}
              wa={data.phone}
              instagram={data.instagram}
              email={data.email}
            >
              {data.name}
            </CardContact>
          );
        })}
       
      </SimpleGrid>
    </Box>
  );
}
