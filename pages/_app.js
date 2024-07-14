import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ReactLenis, useLenis } from "lenis/react";
import SEO from "../next-seo.config";

// Your JavaScript/TypeScript code where you initialize and use Slick carousel goes here

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ReactLenis root options={{duration: .6, lerp: .05, wheelMultiplier: .8}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ReactLenis>
    </>
  );
}
