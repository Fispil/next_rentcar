import AboutSection from '@/components/AboutSection'
import Catalog from '@/components/Catalog';
import { FilterProps } from '@/types';

interface HomeProps {
  searchParams: FilterProps;
}

const Home = ({ searchParams }: HomeProps) => {
  return (
    <main className="overflow-hidden">
      <AboutSection />
      <Catalog searchParams={searchParams} />
    </main>
  )
}

export default Home;
