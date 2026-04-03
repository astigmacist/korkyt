import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Highlights from './components/Highlights'
import Journey from './components/Journey'
import Programs from './components/Programs'
import Support from './components/Support'
import FAQ from './components/FAQ'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Highlights />
        <Journey />
        <Programs />
        <Support />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
