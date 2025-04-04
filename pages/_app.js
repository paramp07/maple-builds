import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ReactLenis } from "lenis/react";
import SEO from "../next-seo.config";
import { MenuProvider } from "@/components/layout/menuContext";
import { StyleProvider } from "@/lib/StyleContext";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <StyleProvider>
        <DefaultSeo {...SEO} />
        <ReactLenis
          root
          options={{ duration: 0.6, lerp: 0.05, wheelMultiplier: 0.8 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <MenuProvider>
              <Layout>
                <Component key={router.route} {...pageProps} />
              </Layout>
            </MenuProvider>
          </AnimatePresence>
        </ReactLenis>
      </StyleProvider>
    </>
  );
}
