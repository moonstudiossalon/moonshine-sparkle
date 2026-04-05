import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PreferredBy from '@/components/PreferredBy';
import TopServices from '@/components/TopServices';
import SpecialtyHighlight from '@/components/SpecialtyHighlight';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientReviews from '@/components/ClientReviews';
import VideoShowcase from '@/components/VideoShowcase';
import Gallery from '@/components/Gallery';
import Stylists from '@/components/Stylists';
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
      <TopServices />
      <SpecialtyHighlight />
      <WhyChooseUs />
      <ClientReviews />
      <VideoShowcase />
      <Gallery />
      <Stylists />
      <BookingForm />
      <Location />
      <Footer />
    </div>;
};
export default Index;