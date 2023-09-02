import Layout from '@/components/layout/layout'
import '@/styles/globals.css'


// Your JavaScript/TypeScript code where you initialize and use Slick carousel goes here


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
