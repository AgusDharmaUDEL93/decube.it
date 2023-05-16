import HeroContact from "@/components/views/contact/HeroContact";
import MainContact from "@/components/views/contact/MainContact";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Layouts title="Contact | Decube IT">
      <HeroContact />
      <MainContact />
    </Layouts>
  );
}
