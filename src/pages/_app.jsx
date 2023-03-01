import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Transition from '@/motions/transition'
import '@/styles/globals.css'
import Container from '@/ui/container'

export default function App({ Component, pageProps, router }) {
  return (
    <Container>
      <Nav />
      <Transition key={router.route}>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </Container>
  )
}
