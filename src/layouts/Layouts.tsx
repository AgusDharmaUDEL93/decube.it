import Footer from "@/components/widgets/footer/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("../components/widgets/navbar/Navbar"));

type props = {
  title: string;
  children: React.ReactNode;
};

export default function Layouts({
  title = "DECUBE IT | Your Great Software Solution",
  children,
}: props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
