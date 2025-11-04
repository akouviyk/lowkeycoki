import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Events from '@/components/Events'
import Menu from '@/components/Menu'
import Reservations from '@/components/Reservations'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Events />
      <Menu />
      <Reservations />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
