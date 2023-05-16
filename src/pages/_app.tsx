import theme from "@/resources/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        initial={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 0,
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
        }}
        exit={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </motion.div>
    </AnimatePresence>
  );
}
