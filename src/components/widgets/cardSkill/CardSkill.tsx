import { Image } from "@chakra-ui/react";

type props = {
  image: string;
};
export default function CardSkill({ image }: props) {
  return (
    <Image
      src={`/assets/img/data/skill_logo/${image}`}
      height={"4rem"}
      objectFit={"contain"}
      alt=""
    />
  );
}
