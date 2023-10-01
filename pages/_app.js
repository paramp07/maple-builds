import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'

import SEO from "../next-seo.config"


// Your JavaScript/TypeScript code where you initialize and use Slick carousel goes here


export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
