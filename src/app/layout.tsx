import Nav from '@/components/nav'
import { Metadata } from 'next'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Container from '@/ui/container'
import Footer from '@/components/footer'
import Transition from '@/motions/transition'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Daniel Carmona - Desarrollador Front-End',
  description: 'Daniel Carmona - Desarrollador Front-End',
  openGraph: {
    url: 'https://danielcg.dev',
    type: 'website',
    title: 'Daniel Carmona - Desarrollador Front-End',
    description: 'Daniel Carmona - Desarrollador Front-End',
    images: [
      {
        url: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg',
        width: 1200,
        height: 1200,
        alt: 'Daniel Carmona'
      }
    ]
  }
}

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='bg-darkBrown text-white'>
        <Container fonts={[inter]}>
          {/* <NextNProgress color='#fde9ca' options={{ showSpinner: false }} /> */}

          <Nav />
          <Transition>{children}</Transition>

          <Footer />
        </Container>
      </body>
      <Script
        src='https://umami-1-dv62wkj77-danielcgilibert.vercel.app/script.js'
        data-website-id='982e808a-db03-418e-a872-0c4b52247de9'
      />
    </html>
  )
}
