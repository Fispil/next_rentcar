import AboutSection from '@/components/AboutSection'
import Catalog from '@/components/Catalog';
import Image from 'next/image'

const Home = () => {
  return (
    <main className="overflow-hidden">
      <AboutSection />
      <Catalog />
    </main>
  )
}

export default Home;
