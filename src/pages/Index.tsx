import { useEffect } from 'react';
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
  useEffect(() => {
    document.title = 'Family Salon in Andheri East, Marol, Mumbai | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Moon Studios is a warm, family-friendly salon in Andheri East and Marol, Mumbai for women, men, and kids. Book haircuts, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, facials, grooming, and more.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/');
    }
  }, []);

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
