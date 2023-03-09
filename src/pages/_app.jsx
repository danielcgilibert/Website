import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Transition from '@/motions/transition'
import '@/styles/globals.css'
import Container from '@/ui/container'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Inter } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps, router }) {
  return (
    <Container fonts={[inter]}>
      <NextNProgress color="#fde9ca" options={{ showSpinner: false }} />
      <DefaultSeo {...SEO} />
      <Nav />
      <Transition key={router.route}>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </Container>
  )
}
