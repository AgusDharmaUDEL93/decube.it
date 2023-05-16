import BannerAbout from "@/components/views/about/BannerAbout";
import ExplainAbout from "@/components/views/about/ExplainAbout";
import HeroAbout from "@/components/views/about/HeroAbout";
import TeamAbout from "@/components/views/about/TeamAbout";
import Layouts from "@/layouts/Layouts";

export default function About() {
  return (
    <Layouts title="About | Decube IT">
      <HeroAbout />
      <ExplainAbout />
      <BannerAbout />
      <TeamAbout />
    </Layouts>
  );
}
