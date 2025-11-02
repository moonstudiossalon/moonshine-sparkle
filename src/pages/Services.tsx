import { useEffect, useState } from 'react';
import { Scissors, Sparkles, Hand, Droplet, Activity, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

type Service = {
  id: string;
  name: string;
  description: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
};

const Services = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('hair');

  useEffect(() => {
    document.title = 'Services - Moon Studios | Hair, Beauty & Spa in Andheri East';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional salon services: haircuts, facials, manicure, pedicure, waxing, massage & grooming. Everything you need to feel your best. Book now in Andheri East.');
    }
    
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/services');
    }
  }, []);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 200;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookingClick = () => {
    window.location.href = '/#booking';
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'hair',
      title: 'Hair',
      description: 'Cuts, wash & style, spa, and colour treatments.',
      icon: <Scissors className="w-5 h-5" />,
      services: [
        { id: 'kids-haircut', name: 'Kids Haircut', description: 'Gentle, quick, styled to suit.' },
        { id: 'fringe', name: 'Fringe / Flicks / Bangs', description: 'Frame your face with precision.' },
        { id: 'normal-haircut', name: 'Normal Haircut', description: 'Classic cut with brief consult.' },
        { id: 'advance-haircut', name: 'Advance Haircut', description: 'Detailed styling and consultation.' },
        { id: 'advance-haircut-wash', name: 'Advance Haircut + Wash & Blow Set', description: 'Citc classes, and polished finish.' },
        { id: 'hair-wash-blast', name: 'Hair Wash & Blow Blast', description: 'Quick refresh with volume.' },
        { id: 'hair-wash-dry', name: 'Hair Wash & Blow Dry', description: 'Professional wash and styling.' },
        { id: 'hair-color', name: 'Hair Color & Treatment', description: 'Full color service with care.' },
        { id: 'hair-spa', name: 'Hair Spa', description: 'Loreal / Protein / Moroccan/Olaplex/ Cooling.' },
      ],
    },
    {
      id: 'skin-face',
      title: 'Skin & Face',
      description: 'Facials, clean-ups, threading and skin treatments.',
      icon: <Sparkles className="w-5 h-5" />,
      services: [
        { id: 'eyebrow-thread', name: 'Eyebrow Threading', description: 'Precise eyebrow shaping.' },
        { id: 'upper-lip-thread', name: 'Upper Lip Threading', description: 'Quick and clean hair removal.' },
        { id: 'forehead-thread', name: 'Forehead Threading', description: 'Smooth forehead finish.' },
        { id: 'chin-thread', name: 'Chin Threading', description: 'Gentle chin hair removal.' },
        { id: 'face-sides-thread', name: 'Face Sides Threading', description: 'Side facial hair removal.' },
        { id: 'full-face-thread', name: 'Full Face Threading', description: 'Complete facial threading.' },
        { id: 'normal-cleanup', name: 'Normal Clean-Up', description: 'Essential facial cleaning.' },
        { id: 'advance-cleanup', name: 'Advanced Clean-Up', description: 'Deep cleanse with treatment.' },
        { id: 'fruit-facial', name: 'Regular Facial - Fruit/Papaya', description: 'Natural fruit-based facial.' },
        { id: 'charcoal-facial', name: 'Regular Facial - Charcoal', description: 'Deep cleansing charcoal.' },
        { id: 'lotus-facial', name: 'Advance Facial - Lotus/VLCC', description: 'Premium spa facial.' },
        { id: 'cheryls-facial', name: 'Advance Facial - Cheryls/Ozone', description: 'Luxury brand treatment.' },
        { id: 'o3-facial', name: 'Advance Facial - O3+', description: 'Advanced oxygen therapy.' },
        { id: 'diamond-facial', name: 'Organic Facial - Diamond Insta Glow', description: 'Instant radiance boost.' },
        { id: 'papaya-facial', name: 'Organic Facial - Papaya Wrinkle Care', description: 'Anti-aging treatment.' },
        { id: 'vitamin-c-facial', name: 'Organic Facial - Vitamin C Rejuvenate', description: 'Skin brightening therapy.' },
        { id: 'red-vine-facial', name: 'Organic Facial - Red Vine Anti-Ageing', description: 'Premium anti-aging care.' },
        { id: 'oxygen-facial', name: 'Organic Facial - Oxygen Tan', description: 'Tan removal treatment.' },
        { id: 'detox-facial', name: 'Organic Facial - Detox Acne', description: 'Acne care solution.' },
        { id: 'hydra-cleanup', name: 'Medi Facial - Hydra Cleanup', description: 'Medical-grade cleanse.' },
        { id: 'hydra-facial', name: 'Medi Facial - Hydra Facial', description: 'Deep hydration treatment.' },
        { id: 'hydra-md', name: 'Medi Facial - Hydra MD', description: 'Advanced hydra therapy.' },
        { id: 'power-mask', name: 'Medi Facial - Power Mask Add-on', description: 'Intensive mask treatment.' },
        { id: 'face-bleach', name: 'Face Bleach/D-Tan', description: 'Skin lightening and tan removal.' },
        { id: 'back-bleach', name: 'Back & Stomach Bleach/D-Tan', description: 'Body bleaching service.' },
        { id: 'hands-bleach', name: 'Full Hands Bleach/D-Tan', description: 'Arm brightening treatment.' },
        { id: 'legs-bleach', name: 'Full Legs Bleach/D-Tan', description: 'Leg lightening service.' },
        { id: 'feet-bleach', name: 'Feet Bleach/D-Tan', description: 'Foot care treatment.' },
        { id: 'body-bleach', name: 'Full Body Bleach/D-Tan', description: 'Complete body treatment.' },
        { id: 'body-polish', name: 'Body Polish', description: 'Full body exfoliation.' },
        { id: 'body-scrub', name: 'Full Body Scrub', description: 'Deep cleansing scrub.' },
      ],
    },
    {
      id: 'nails-feet',
      title: 'Nails & Feet',
      description: 'Manicures, pedicures and nail care.',
      icon: <Hand className="w-5 h-5" />,
      services: [
        { id: 'normal-manicure', name: 'Normal Manicure', description: 'Basic hand and nail care.' },
        { id: 'herbal-manicure', name: 'Herbal Manicure', description: 'Natural herb-infused care.' },
        { id: 'spa-manicure', name: 'Spa Manicure', description: 'Relaxing spa treatment.' },
        { id: 'pedilogix-manicure', name: 'Pedilogix Manicure', description: 'Premium professional care.' },
        { id: 'normal-pedicure', name: 'Normal Pedicure', description: 'Essential foot care.' },
        { id: 'herbal-pedicure', name: 'Herbal Pedicure', description: 'Natural foot treatment.' },
        { id: 'spa-pedicure', name: 'Spa Pedicure', description: 'Luxurious foot spa.' },
        { id: 'pedilogix-pedicure', name: 'Pedilogix Pedicure', description: 'Advanced foot therapy.' },
        { id: 'nail-cut-file', name: 'Cut / File Add-on', description: 'Quick nail shaping.' },
      ],
    },
    {
      id: 'waxing-grooming',
      title: 'Waxing & Grooming',
      description: 'Hair removal services for all areas.',
      icon: <Droplet className="w-5 h-5" />,
      services: [
        { id: 'lipo-combo', name: 'Liposoluble Wax - Combo (FH+FL+UA)', description: 'Full hands, legs and underarms.' },
        { id: 'lipo-fh-ua', name: 'Liposoluble Wax - FH+UA', description: 'Hands and underarms.' },
        { id: 'lipo-ua', name: 'Liposoluble Wax - UA Only', description: 'Underarms only.' },
        { id: 'lipo-fi', name: 'Liposoluble Wax - FI Only', description: 'Facial hair removal.' },
        { id: 'rica-combo', name: 'Rica Wax - Combo (FH+FL+UA)', description: 'Premium wax combo.' },
        { id: 'rica-fh-ua', name: 'Rica Wax - FH+UA', description: 'Premium hands and underarms.' },
        { id: 'rica-ua', name: 'Rica Wax - UA Only', description: 'Premium underarms.' },
        { id: 'rica-fi', name: 'Rica Wax - FI Only', description: 'Premium facial wax.' },
        { id: 'rica-body', name: 'Rica Wax - Full Body', description: 'Complete body waxing.' },
        { id: 'men-face-wax', name: 'Men - Upper Lip/Chin/Forehead', description: 'Facial hair removal.' },
        { id: 'men-ua-wax', name: 'Men - Underarms', description: 'Underarm waxing.' },
        { id: 'men-half-legs', name: 'Men - Half Legs', description: 'Lower leg waxing.' },
        { id: 'men-full-legs', name: 'Men - Full Legs', description: 'Complete leg waxing.' },
        { id: 'men-fh-ua', name: 'Men - Full Hands & Underarms', description: 'Arms and underarms.' },
        { id: 'men-fh', name: 'Men - Full Hands', description: 'Complete arm waxing.' },
        { id: 'men-back', name: 'Men - Back', description: 'Back hair removal.' },
        { id: 'men-front', name: 'Men - Front', description: 'Chest hair removal.' },
        { id: 'men-body', name: 'Men - Full Body', description: 'Complete body waxing.' },
      ],
    },
    {
      id: 'massage-wellness',
      title: 'Massage & Wellness',
      description: 'Therapeutic massages for relaxation.',
      icon: <Activity className="w-5 h-5" />,
      services: [
        { id: 'normal-massage', name: 'Normal Body Massage (45 mins)', description: 'Full body relaxation.' },
        { id: 'deep-tissue', name: 'Deep Tissue Massage (45 mins)', description: 'Intense muscle therapy.' },
        { id: 'deep-relax', name: 'Deep Relaxation Massage (45 mins)', description: 'Ultimate stress relief.' },
        { id: 'joints-massage', name: 'Joints & Nerves Massage (30 mins)', description: 'Targeted joint care.' },
        { id: 'thai-massage', name: 'Thai Massage (45 mins)', description: 'Traditional Thai therapy.' },
        { id: 'foot-massage', name: 'Foot Massage (20 mins)', description: 'Reflexology foot care.' },
        { id: 'back-massage', name: 'Back Massage (20 mins)', description: 'Upper body relief.' },
        { id: 'head-massage', name: 'Head Massage (30 mins)', description: 'Scalp and head therapy.' },
        { id: 'shoulder-massage', name: 'Shoulder & Hands Massage (30 mins)', description: 'Upper body focus.' },
      ],
    },
    {
      id: 'mens-grooming',
      title: 'Men\'s Grooming',
      description: 'Specialized services for men.',
      icon: <User className="w-5 h-5" />,
      services: [
        { id: 'men-hairwash', name: 'Hair Wash', description: 'Professional hair cleansing.' },
        { id: 'clean-shave', name: 'Clean Shave', description: 'Smooth professional shave.' },
        { id: 'beard-trim', name: 'Beard Trim', description: 'Expert beard shaping.' },
        { id: 'beard-color', name: 'Beard Color', description: 'Professional beard coloring.' },
        { id: 'moustache-color', name: 'Moustache Color', description: 'Moustache tinting service.' },
        { id: 'hair-set', name: 'Hair Set (With/Without Wash)', description: 'Styling and setting.' },
        { id: 'basic-haircut', name: 'Basic Haircut', description: 'Standard mens cut.' },
        { id: 'fade-haircut', name: 'Fade / Advance Haircut', description: 'Modern fade styles.' },
        { id: 'men-head-massage', name: 'Head Massage / Steam Wash', description: 'Relaxing scalp treatment.' },
        { id: 'men-hair-color', name: 'Hair Colour (Base/Fashion Shade)', description: 'Complete color service.' },
        { id: 'men-hair-spa', name: 'Hair Spa for Men', description: 'Loreal/Protein/Keratin/Smoothing.' },
        { id: 'men-treatments', name: 'Dandruff/Hairfall Treatment', description: 'Specialized scalp care.' },
      ],
    },
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-sm uppercase tracking-wider text-primary mb-4">SERVICES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-6">
              Everything you need to feel your best
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Hair, skin, nails, waxing, massage, and grooming — browse and book in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={handleBookingClick} size="lg" className="bg-primary hover:bg-primary/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                size="lg"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex overflow-x-auto gap-2 md:gap-3 pb-2 md:pb-0 scrollbar-hide md:justify-center">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary'
                  }`}
                >
                  {category.icon}
                  <span className="text-sm md:text-base">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div 
                key={category.id} 
                id={category.id}
                className={`scroll-mt-32 ${categoryIndex > 0 ? 'pt-8 border-t' : ''}`}
              >
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Card 
                      key={service.id}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 min-h-[2.5rem]">
                          {service.description}
                        </p>
                        <Button 
                          onClick={handleBookingClick}
                          className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Ready to book your appointment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience professional care from our expert stylists
            </p>
            <Button 
              onClick={handleBookingClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
          </div>
        </section>

        {/* Floating Booking Button */}
        <Button
          onClick={handleBookingClick}
          className="fixed bottom-6 right-6 z-50 rounded-full h-16 w-16 md:h-auto md:w-auto md:px-6 shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
          size="lg"
        >
          <Calendar className="w-6 h-6 md:mr-2" />
          <span className="hidden md:inline">Book Appointment</span>
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default Services;