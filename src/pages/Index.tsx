import { useSEO } from '@/hooks/useSEO';
import FloatingCTA from '@/components/FloatingCTA';
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
import OfferBanner from '@/components/offers/OfferBanner';
import OfferStrip from '@/components/offers/OfferStrip';

const Index = () => {
  useSEO({
    title: 'Family Salon in Andheri East, Marol, Mumbai | Moon Studios',
    description: 'Moon Studios is a warm, family-friendly salon in Andheri East and Marol, Mumbai for women, men, and kids. Book haircuts, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, facials, grooming, and more.',
    canonicalUrl: 'https://moonstudiossalon.in/'
  });

  return (
    <div className="moon min-h-screen pb-[88px] md:pb-0">
      <StructuredData />
      <Header />
      <Hero />
      <OfferBanner />
      <PreferredBy />
      <TopServices />
      <SpecialtyHighlight />
      <WhyChooseUs />
      <ClientReviews />
      <VideoShowcase />
      <Gallery />
      <Stylists />
      <OfferStrip label="Booking Mon–Thu? Come between 12 and 5 PM and your second service is free." />
      <BookingForm />
      <Location />
      <Footer />
    <FloatingCTA />

    </div>
  );
};

export default Index;
