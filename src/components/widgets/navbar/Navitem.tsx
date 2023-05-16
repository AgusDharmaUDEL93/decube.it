import navigate from "@/utils/navigate";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

type props = {
  children?: React.ReactNode;
  path: string;
};

export default function Navitem({ children, path }: props) {
  const router = useRouter();
  return (
    <Button
      variant={"nav"}
      fontWeight={"semibold"}
      transition={"color 0.5s"}
      onClick={() => navigate(router, path)}
      color={"blue.400"}
      _hover={{
        color: "blue.700",
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: 0,
        left: 0,
        bgColor: "blue.700",
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      }}
    >
      {children}
    </Button>
  );
}
