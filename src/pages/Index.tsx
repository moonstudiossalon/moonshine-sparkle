import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PreferredBy from '@/components/PreferredBy';
import HairProblems from '@/components/HairProblems';
import TopServices from '@/components/TopServices';
import SkinCareServices from '@/components/SkinCareServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import ClientReviews from '@/components/ClientReviews';
import Stylists from '@/components/Stylists';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
const Index = () => {
  return <div className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <PreferredBy />
      <HairProblems />
      <TopServices />
      <SkinCareServices />
      <WhyChooseUs />
      <HowItWorks />
      <ClientReviews />
      <Gallery />
      <Stylists />
      <BookingForm />
      <Location />
      <Footer />
    </div>;
};
export default Index;