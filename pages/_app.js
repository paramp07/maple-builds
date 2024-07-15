import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ReactLenis, useLenis } from "lenis/react";
import SEO from "../next-seo.config";
import { MenuProvider } from "@/components/layout/menuContext";

// Your JavaScript/TypeScript code where you initialize and use Slick carousel goes here

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ReactLenis
        root
        options={{ duration: 0.6, lerp: 0.05, wheelMultiplier: 0.8 }}
      >
        <MenuProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MenuProvider>
      </ReactLenis>
    </>
  );
}
