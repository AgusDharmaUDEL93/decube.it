import navigate from "@/utils/navigate";
import { Box, Button, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";


type props = {
  children?: React.ReactNode;
  path: string;
};

export default function NavbaritemMobile({ children, path }: props) {
  const router = useRouter();
  return (
    <Box display={"grid"} placeItems={"center"} width={"100vw"}>
      <Button
        my={"5px"}
        variant={"unstyled"}
        color={"orange.400"}
        onClick={() => {
          navigate(router, path);
        }}
      >
        {children}
      </Button>
      <Divider />
    </Box>
  );
}
