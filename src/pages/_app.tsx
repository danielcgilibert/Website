import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Transition from '@/motions/transition'
import '@/styles/globals.css'
import Container from '@/ui/container'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'
import { configSEO } from '../../next-seo.config'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Container fonts={[inter]}>
      <NextNProgress color='#fde9ca' options={{ showSpinner: false }} />
      <Analytics />
      <DefaultSeo {...configSEO} />
      <Nav />
      <Transition key={router.route}>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </Container>
  )
}
