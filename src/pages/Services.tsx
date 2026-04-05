import { useEffect, useState } from 'react';
import { Scissors, Sparkles, Hand, Droplet, Activity, User, Phone, Calendar, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

// Import service images
import kidsHaircutImg from '@/assets/services/kids_haircut.png';
import fringeCutImg from '@/assets/services/Fringe_Flicks_Bangs.png';
import normalHaircutImg from '@/assets/services/normal_hircut.png';
import advanceHaircutImg from '@/assets/services/Advance_Haircut.png';
import hairWashBlowdryImg from '@/assets/services/blow_hair.png';
import hairSpaImg from '@/assets/services/hair_spa.png';
import haircolorImg from '@/assets/services/haircolour.png';
import hairWashBlastdryImg from '@/assets/services/blast.png';

import threadingImg from '@/assets/services/threading.png';
import lipThreadingImg from '@/assets/services/lip_threading.png';
import forheadThreadingImg from '@/assets/services/fourhead_threading.png';
import chinThreadingImg from '@/assets/services/chin_threading.png';
import faceThreadingImg from '@/assets/services/face_threading.png';
import cleannUpImg from '@/assets/services/cleanup.png';      
import fruitFacialImg from '@/assets/services/fruit_facial.png';
import charcoalFacialImg from '@/assets/services/charcoal_fecial.png';
import LotusFacialImg from '@/assets/services/lotus_facial.png';
import o3FacialImg from '@/assets/services/o3_facial.png';
import DiamondFacialImg from '@/assets/services//dimonnd_facial.png';
import facialCleanupImg from '@/assets/services/facial-cleanup.jpg';
import facialTreatmentImg from '@/assets/services/facial-treatment.jpg';
import manicureImg from '@/assets/services/manicure.png';
import pedicureImg from '@/assets/services/pedicure.png';

import waxingImg from '@/assets/services/waxing.png';
import massageImg from '@/assets/services/massage.png';
import manUnderArmWaxingImg from '@/assets/services/underarm_wax.png';
import manLegWaxImg from '@/assets/services/legs_man_wax.png';
import manfrontImg from '@/assets/services/man_front_wax.png';
import manBackImg from '@/assets/services/back_wax_man.png';  


import mensGroomingImg from '@/assets/services/mens-grooming.jpg';
type Service = {
  id: string;
  name: string;
  description: string;
  image?: string;
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
  const handleCallClick = () => {
    window.location.href = 'tel:+919004832184';
  };
  const serviceCategories: ServiceCategory[] = [{
    id: 'hair',
    title: 'Hair',
    description: 'Cuts, wash & style, spa, and colour treatments.',
    icon: <Scissors className="w-5 h-5" />,
    services: [{
      id: 'kids-haircut',
      name: 'Kids Haircut',
      description: 'Gentle, quick, styled to suit.',
      image: kidsHaircutImg
    }, {
      id: 'fringe',
      name: 'Fringe / Flicks / Bangs',
      description: 'Frame your face with precision.',
      image: fringeCutImg
    }, {
      id: 'normal-haircut',
      name: 'Normal Haircut',
      description: 'Classic cut with brief consult.',
      image: normalHaircutImg
    }, {
      id: 'advance-haircut',
      name: 'Advance Haircut',
      description: 'Detailed styling and consultation.',
      image: advanceHaircutImg
    }, {
      id: 'advance-haircut-wash',
      name: 'Advance Haircut + Wash & Blow Set',
      description: 'Cut classes, and polished finish.',
      image: advanceHaircutImg
    }, {
      id: 'hair-wash-blast',
      name: 'Hair Wash & Blow Blast',
      description: 'Quick refresh with volume.',
      image: hairWashBlastdryImg
    }, {
      id: 'hair-wash-dry',
      name: 'Hair Wash & Blow Dry',
      description: 'Professional wash and styling.',
      image: hairWashBlowdryImg
    }, {
      id: 'hair-color',
      name: 'Hair Color & Treatment',
      description: 'Full color service with care.',
      image: haircolorImg
    }, {
      id: 'hair-spa',
      name: 'Hair Spa',
      description: 'Loreal / Protein / Moroccan/Olaplex/ Cooling.',
      image: hairSpaImg
    }]
  }, {
    id: 'skin-face',
    title: 'Skin & Face',
    description: 'Facials, clean-ups, threading and skin treatments.',
    icon: <Sparkles className="w-5 h-5" />,
    services: [{
      id: 'eyebrow-thread',
      name: 'Eyebrow Threading',
      description: 'Precise eyebrow shaping.',
      image: threadingImg
    }, {
      id: 'upper-lip-thread',
      name: 'Upper Lip Threading',
      description: 'Quick and clean hair removal.',
      image: lipThreadingImg
    }, {
      id: 'forehead-thread',
      name: 'Forehead Threading',
      description: 'Smooth forehead finish.',
      image: forheadThreadingImg
    }, {
      id: 'chin-thread',
      name: 'Chin Threading',
      description: 'Gentle chin hair removal.',
      image: chinThreadingImg
    }, {
      id: 'face-sides-thread',
      name: 'Face Sides Threading',
      description: 'Side facial hair removal.',
      image: faceThreadingImg
    }, {
      id: 'full-face-thread',
      name: 'Full Face Threading',
      description: 'Complete facial threading.',
      image: faceThreadingImg
    }, {
      id: 'normal-cleanup',
      name: 'Normal Clean-Up',
      description: 'Essential facial cleaning.',
      image: cleannUpImg
    }, {
      id: 'advance-cleanup',
      name: 'Advanced Clean-Up',
      description: 'Deep cleanse with treatment.',
      image: cleannUpImg
    }, {
      id: 'fruit-facial',
      name: 'Regular Facial - Fruit/Papaya',
      description: 'Natural fruit-based facial.',
      image: fruitFacialImg
    }, {
      id: 'charcoal-facial',
      name: 'Regular Facial - Charcoal',
      description: 'Deep cleansing charcoal.',
      image: charcoalFacialImg
    }, {
      id: 'lotus-facial',
      name: 'Advance Facial - Lotus/VLCC',
      description: 'Premium spa facial.',
      image: LotusFacialImg
    }, {
      id: 'cheryls-facial',
      name: 'Advance Facial - Cheryls/Ozone',
      description: 'Luxury brand treatment.',
      image: LotusFacialImg
    }, {
      id: 'o3-facial',
      name: 'Advance Facial - O3+',
      description: 'Advanced oxygen therapy.',
      image: o3FacialImg
    }, {
      id: 'diamond-facial',
      name: 'Organic Facial - Diamond Insta Glow',
      description: 'Instant radiance boost.',
      image: DiamondFacialImg
    }, {
      id: 'papaya-facial',
      name: 'Organic Facial - Papaya Wrinkle Care',
      description: 'Anti-aging treatment.',
      image: facialTreatmentImg
    }, {
      id: 'vitamin-c-facial',
      name: 'Organic Facial - Vitamin C Rejuvenate',
      description: 'Skin brightening therapy.',
      image: facialTreatmentImg
    }, {
      id: 'red-vine-facial',
      name: 'Organic Facial - Red Vine Anti-Ageing',
      description: 'Premium anti-aging care.',
      image: facialTreatmentImg
    }, {
      id: 'oxygen-facial',
      name: 'Organic Facial - Oxygen Tan',
      description: 'Tan removal treatment.',
      image: facialTreatmentImg
    }, {
      id: 'detox-facial',
      name: 'Organic Facial - Detox Acne',
      description: 'Acne care solution.',
      image: facialTreatmentImg
    }, {
      id: 'hydra-cleanup',
      name: 'Medi Facial - Hydra Cleanup',
      description: 'Medical-grade cleanse.',
      image: facialCleanupImg
    }, {
      id: 'hydra-facial',
      name: 'Medi Facial - Hydra Facial',
      description: 'Deep hydration treatment.',
      image: facialTreatmentImg
    }, {
      id: 'hydra-md',
      name: 'Medi Facial - Hydra MD',
      description: 'Advanced hydra therapy.',
      image: facialTreatmentImg
    }, {
      id: 'power-mask',
      name: 'Medi Facial - Power Mask Add-on',
      description: 'Intensive mask treatment.',
      image: facialTreatmentImg
    }, {
      id: 'face-bleach',
      name: 'Face Bleach/D-Tan',
      description: 'Skin lightening and tan removal.',
      image: facialCleanupImg
    }, {
      id: 'back-bleach',
      name: 'Back & Stomach Bleach/D-Tan',
      description: 'Body bleaching service.',
      image: facialCleanupImg
    }, {
      id: 'hands-bleach',
      name: 'Full Hands Bleach/D-Tan',
      description: 'Arm brightening treatment.',
      image: facialCleanupImg
    }, {
      id: 'legs-bleach',
      name: 'Full Legs Bleach/D-Tan',
      description: 'Leg lightening service.',
      image: facialCleanupImg
    }, {
      id: 'feet-bleach',
      name: 'Feet Bleach/D-Tan',
      description: 'Foot care treatment.',
      image: facialCleanupImg
    }, {
      id: 'body-bleach',
      name: 'Full Body Bleach/D-Tan',
      description: 'Complete body treatment.',
      image: facialCleanupImg
    }, {
      id: 'body-polish',
      name: 'Body Polish',
      description: 'Full body exfoliation.',
      image: facialCleanupImg
    }, {
      id: 'body-scrub',
      name: 'Full Body Scrub',
      description: 'Deep cleansing scrub.',
      image: facialCleanupImg
    }]
  }, {
    id: 'nails-feet',
    title: 'Nails & Feet',
    description: 'Manicures, pedicures and nail care.',
    icon: <Hand className="w-5 h-5" />,
    services: [{
      id: 'normal-manicure',
      name: 'Normal Manicure',
      description: 'Basic hand and nail care.',
      image: manicureImg
    }, {
      id: 'herbal-manicure',
      name: 'Herbal Manicure',
      description: 'Natural herb-infused care.',
      image: manicureImg
    }, {
      id: 'spa-manicure',
      name: 'Spa Manicure',
      description: 'Relaxing spa treatment.',
      image: manicureImg
    }, {
      id: 'pedilogix-manicure',
      name: 'Pedilogix Manicure',
      description: 'Premium professional care.',
      image: manicureImg
    }, {
      id: 'normal-pedicure',
      name: 'Normal Pedicure',
      description: 'Essential foot care.',
      image: pedicureImg
    }, {
      id: 'herbal-pedicure',
      name: 'Herbal Pedicure',
      description: 'Natural foot treatment.',
      image: pedicureImg
    }, {
      id: 'spa-pedicure',
      name: 'Spa Pedicure',
      description: 'Luxurious foot spa.',
      image: pedicureImg
    }, {
      id: 'pedilogix-pedicure',
      name: 'Pedilogix Pedicure',
      description: 'Advanced foot therapy.',
      image: pedicureImg
    }, {
      id: 'nail-cut-file',
      name: 'Cut / File Add-on',
      description: 'Quick nail shaping.',
      image: manicureImg
    }]
  }, {
    id: 'waxing-grooming',
    title: 'Waxing & Grooming',
    description: 'Hair removal services for all areas.',
    icon: <Droplet className="w-5 h-5" />,
    services: [{
      id: 'lipo-combo',
      name: 'Liposoluble Wax - Combo (FH+FL+UA)',
      description: 'Full hands, legs and underarms.',
      image: waxingImg
    }, {
      id: 'lipo-fh-ua',
      name: 'Liposoluble Wax - FH+UA',
      description: 'Hands and underarms.',
      image: waxingImg
    }, {
      id: 'lipo-ua',
      name: 'Liposoluble Wax - UA Only',
      description: 'Underarms only.',
      image: waxingImg
    }, {
      id: 'lipo-fi',
      name: 'Liposoluble Wax - FI Only',
      description: 'Facial hair removal.',
      image: waxingImg
    }, {
      id: 'rica-combo',
      name: 'Rica Wax - Combo (FH+FL+UA)',
      description: 'Premium wax combo.',
      image: waxingImg
    }, {
      id: 'rica-fh-ua',
      name: 'Rica Wax - FH+UA',
      description: 'Premium hands and underarms.',
      image: waxingImg
    }, {
      id: 'rica-ua',
      name: 'Rica Wax - UA Only',
      description: 'Premium underarms.',
      image: waxingImg
    }, {
      id: 'rica-fi',
      name: 'Rica Wax - FI Only',
      description: 'Premium facial wax.',
      image: waxingImg
    }, {
      id: 'rica-body',
      name: 'Rica Wax - Full Body',
      description: 'Complete body waxing.',
      image: waxingImg
    }, {
      id: 'men-face-wax',
      name: 'Men - Upper Lip/Chin/Forehead',
      description: 'Facial hair removal.',
      image: waxingImg
    }, {
      id: 'men-ua-wax',
      name: 'Men - Underarms',
      description: 'Underarm waxing.',
      image: manUnderArmWaxingImg
    }, {
      id: 'men-half-legs',
      name: 'Men - Half Legs',
      description: 'Lower leg waxing.',
      image: manLegWaxImg
    }, {
      id: 'men-full-legs',
      name: 'Men - Full Legs',
      description: 'Complete leg waxing.',
      image: manLegWaxImg
    }, {
      id: 'men-fh-ua',
      name: 'Men - Full Hands & Underarms',
      description: 'Arms and underarms.',
      image: manLegWaxImg
    }, {
      id: 'men-fh',
      name: 'Men - Full Hands',
      description: 'Complete arm waxing.',
      image: manLegWaxImg
    }, {
      id: 'men-back',
      name: 'Men - Back',
      description: 'Back hair removal.',
      image: manBackImg
    }, {
      id: 'men-front',
      name: 'Men - Front',
      description: 'Chest hair removal.',
      image: manfrontImg
    }, {
      id: 'men-body',
      name: 'Men - Full Body',
      description: 'Complete body waxing.',
      image: manBackImg
    }]
  }, {
    id: 'massage-wellness',
    title: 'Massage & Wellness',
    description: 'Therapeutic massages for relaxation.',
    icon: <Activity className="w-5 h-5" />,
    services: [{
      id: 'normal-massage',
      name: 'Normal Body Massage (45 mins)',
      description: 'Full body relaxation.',
      image: massageImg
    }, {
      id: 'deep-tissue',
      name: 'Deep Tissue Massage (45 mins)',
      description: 'Intense muscle therapy.',
      image: massageImg
    }, {
      id: 'deep-relax',
      name: 'Deep Relaxation Massage (45 mins)',
      description: 'Ultimate stress relief.',
      image: massageImg
    }, {
      id: 'joints-massage',
      name: 'Joints & Nerves Massage (30 mins)',
      description: 'Targeted joint care.',
      image: massageImg
    }, {
      id: 'thai-massage',
      name: 'Thai Massage (45 mins)',
      description: 'Traditional Thai therapy.',
      image: massageImg
    }, {
      id: 'foot-massage',
      name: 'Foot Massage (20 mins)',
      description: 'Reflexology foot care.',
      image: massageImg
    }, {
      id: 'back-massage',
      name: 'Back Massage (20 mins)',
      description: 'Upper body relief.',
      image: massageImg
    }, {
      id: 'head-massage',
      name: 'Head Massage (30 mins)',
      description: 'Scalp and head therapy.',
      image: massageImg
    }, {
      id: 'shoulder-massage',
      name: 'Shoulder & Hands Massage (30 mins)',
      description: 'Upper body focus.',
      image: massageImg
    }]
  }, {
    id: 'mens-grooming',
    title: 'Men\'s Grooming',
    description: 'Specialized services for men.',
    icon: <User className="w-5 h-5" />,
    services: [{
      id: 'men-hairwash',
      name: 'Hair Wash',
      description: 'Professional hair cleansing.',
      image: mensGroomingImg
    }, {
      id: 'clean-shave',
      name: 'Clean Shave',
      description: 'Smooth professional shave.',
      image: mensGroomingImg
    }, {
      id: 'beard-trim',
      name: 'Beard Trim',
      description: 'Expert beard shaping.',
      image: mensGroomingImg
    }, {
      id: 'beard-color',
      name: 'Beard Color',
      description: 'Professional beard coloring.',
      image: mensGroomingImg
    }, {
      id: 'moustache-color',
      name: 'Moustache Color',
      description: 'Moustache tinting service.',
      image: mensGroomingImg
    }, {
      id: 'hair-set',
      name: 'Hair Set (With/Without Wash)',
      description: 'Styling and setting.',
      image: mensGroomingImg
    }, {
      id: 'basic-haircut',
      name: 'Basic Haircut',
      description: 'Standard mens cut.',
      image: mensGroomingImg
    }, {
      id: 'fade-haircut',
      name: 'Fade / Advance Haircut',
      description: 'Modern fade styles.',
      image: mensGroomingImg
    }, {
      id: 'men-head-massage',
      name: 'Head Massage / Steam Wash',
      description: 'Relaxing scalp treatment.',
      image: mensGroomingImg
    }, {
      id: 'men-hair-color',
      name: 'Hair Colour (Base/Fashion Shade)',
      description: 'Complete color service.',
      image: mensGroomingImg
    }, {
      id: 'men-hair-spa',
      name: 'Hair Spa for Men',
      description: 'Loreal/Protein/Keratin/Smoothing.',
      image: mensGroomingImg
    }, {
      id: 'men-treatments',
      name: 'Dandruff/Hairfall Treatment',
      description: 'Specialized scalp care.',
      image: mensGroomingImg
    }]
  }];
  return <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-0 py-[10px]">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-sm uppercase tracking-wider text-primary mb-4">SERVICES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-6">
              Everything you need to feel your best
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Hair, skin, nails, waxing, massage, and grooming — browse and book in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={handleCallClick} size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" size="lg">
                Back to Home
              </Button>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex overflow-x-auto gap-2 md:gap-3 pb-2 md:pb-0 scrollbar-hide md:justify-center">
              {serviceCategories.map(category => <button key={category.id} onClick={() => scrollToCategory(category.id)} className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${activeCategory === category.id ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary/50 text-foreground hover:bg-secondary'}`}>
                  {category.icon}
                  <span className="text-sm md:text-base">{category.title}</span>
                </button>)}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="px-0 py-[20px]">
          <div className="container mx-auto max-w-7xl space-y-20 px-0">
            {serviceCategories.map((category, categoryIndex) => <div key={category.id} id={category.id} className={`scroll-mt-32 ${categoryIndex > 0 ? 'pt-8 border-t' : ''}`}>
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[10px]">
                  {category.services.map(service => <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      {/* Desktop Layout - Image on Top */}
                      <div className="hidden md:block">
                        {service.image && <div className="aspect-[4/3] overflow-hidden">
                            <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>}
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 min-h-[2.5rem]">
                            {service.description}
                          </p>
                          <Button onClick={handleCallClick} className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                          </Button>
                        </CardContent>
                      </div>

                      {/* Mobile Layout - Horizontal with Image on Left */}
                      <div className="md:hidden flex gap-4 p-4">
                        {service.image && <div className="flex-shrink-0 w-30 h-24 rounded-lg overflow-hidden">
                            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                          </div>}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {service.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                          <Button onClick={handleCallClick} size="sm" className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </Card>)}
                </div>
              </div>)}
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
            <Button onClick={handleCallClick} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </section>

        {/* Floating Call Button */}
        <Button onClick={handleCallClick} className="fixed bottom-6 right-6 z-50 rounded-full h-16 w-16 md:h-auto md:w-auto md:px-6 shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 transition-transform" size="lg">
          <Phone className="w-6 h-6 md:mr-2" />
          <span className="hidden md:inline">Call Now</span>
        </Button>
      </main>

      <Footer />
    </div>;
};
export default Services;