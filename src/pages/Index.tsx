import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HairProblems from '@/components/HairProblems';
import TopServices from '@/components/TopServices';
import SalonIntro from '@/components/SalonIntro';
import HowItWorks from '@/components/HowItWorks';
import ClientReviews from '@/components/ClientReviews';
import Stylists from '@/components/Stylists';
import Gallery from '@/components/Gallery';
import BookingCTA from '@/components/BookingCTA';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <HairProblems />
      <TopServices />
      <SalonIntro />
      <HowItWorks />
      <ClientReviews />
      <Stylists />
      <Gallery />
      <BookingCTA />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
