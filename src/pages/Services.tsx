import { useState, useRef, useCallback, useEffect } from 'react';
import { Scissors, Sparkles, Hand, Droplet, Heart, Phone, Flower2, Gem, Clock, MapPin, CreditCard, Send, MessageCircle, ChevronRight, Star, Shield, Users, Leaf, CheckCircle2, User, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { trackEvent } from '@/lib/analytics';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import serviceHaircut from '@/assets/service-haircut.jpg';
import mensGroomingImg from '@/assets/services/mens-grooming.jpg';
import haircolorImg from '@/assets/services/haircolour.png';
import charcoalfacialImg from '@/assets/services/charcoal_fecial.png';

// Import service images
import kidsHaircutImg from '@/assets/services/kids_haircut.png';
import fringeCutImg from '@/assets/services/Fringe_Flicks_Bangs.png';
import normalHaircutImg from '@/assets/services/normal_hircut.png';
import advanceHaircutImg from '@/assets/services/Advance_Haircut.png';
import hairWashBlowdryImg from '@/assets/services/blow_hair.png';
import hairSpaImg from '@/assets/services/hair_spa.png';
import hairWashBlastdryImg from '@/assets/services/blast.png';
import threadingImg from '@/assets/services/threading.png';
import lipThreadingImg from '@/assets/services/lip_threading.png';
import forheadThreadingImg from '@/assets/services/fourhead_threading.png';
import chinThreadingImg from '@/assets/services/chin_threading.png';
import faceThreadingImg from '@/assets/services/face_threading.png';
import cleannUpImg from '@/assets/services/cleanup.png';
import fruitFacialImg from '@/assets/services/fruit_facial.png';
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
import { cn } from '@/lib/utils';

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
  color: string;
};

const Categories = ({ categories, activeCategory, scrollToCategory }: { categories: ServiceCategory[], activeCategory: string, scrollToCategory: (category: ServiceCategory) => void }) => (
  <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b shadow-sm">
    <div className="container mx-auto px-4 max-w-7xl py-3">
      <div className="flex overflow-x-auto gap-2 pb-2 md:gap-3 md:pb-0 md:justify-center scrollbar-hide">
        {categories.map(category => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category)}
              className={cn(
                'flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer min-w-max',
                'min-h-[44px]',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
              )}
            >
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">{category.icon}</span>
              <span className={cn('font-medium text-sm', isActive ? 'font-semibold' : 'font-medium')}>{category.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  </section>
);

const Services = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('hair');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Services — Moon Studios | Hair, Beauty & Spa in Andheri East';
  }, []);

  const scrollToCategory = useCallback((category: ServiceCategory) => {
    setActiveCategory(category.id);
    trackEvent('service_category_select', {
      section_name: 'services_navigation',
      service_category: category.id,
      category_title: category.title,
    });
    const element = document.getElementById(category.id);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const handleCallClick = useCallback((params?: Record<string, string>) => {
    trackEvent('phone_call_click', {
      contact_method: 'phone',
      ...params,
    });
    window.location.href = 'tel:+919004832184';
  }, []);

  const serviceCategories: ServiceCategory[] = [{
    id: 'hair',
    title: 'Hair',
    description: 'Haircuts, spa, colour — the things that make people ask who your stylist is.',
    icon: <Scissors className="w-5 h-5" />,
    color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    services: [
      { id: 'kids-haircut', name: "Kids' Haircut", description: "Gentle cuts that make little ones look — and feel — like a million bucks.", image: kidsHaircutImg },
      { id: 'fringe', name: 'Fringe, Flicks & Bangs', description: 'Frame your face with precision — bangs that actually work with your features.', image: fringeCutImg },
      { id: 'normal-haircut', name: 'Classic Haircut', description: 'A clean cut with a quick consultation. Simple, but done right.', image: normalHaircutImg },
      { id: 'advance-haircut', name: 'Advanced Haircut', description: 'Detailed styling with a full consultation — for when your hair deserves more attention.', image: advanceHaircutImg },
      { id: 'advance-haircut-wash', name: 'Advanced Haircut + Wash & Blow Set', description: 'Full cut, wash, and blown-out finish. Walk out looking polished.', image: advanceHaircutImg },
      { id: 'hair-wash-blast', name: 'Hair Wash & Blow Blast', description: 'A quick refresh with real volume — feel renewed in under an hour.', image: hairWashBlastdryImg },
      { id: 'hair-wash-dry', name: 'Hair Wash & Blow Dry', description: 'Professional wash, expert blow-dry. Salon-fresh every time.', image: hairWashBlowdryImg },
      { id: 'hair-color', name: 'Hair Color & Treatment', description: 'Full color service using premium products that keep your hair healthy while transforming it.', image: haircolorImg },
      { id: 'hair-spa', name: 'Hair Spa', description: "Keratin, L'Oréal, Olaplex — intense nourishment that your hair can actually feel. Walks out softer, lighter, alive.", image: hairSpaImg }
    ]
  }, {
    id: 'skin-face',
    title: 'Skin & Face',
    description: 'Facials, clean-ups, threading — the kind of glow strangers notice before you say anything.',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    services: [
      { id: 'eyebrow-thread', name: 'Eyebrow Threading', description: 'Clean, precise shaping that opens up your entire face.', image: threadingImg },
      { id: 'upper-lip-thread', name: 'Upper Lip Threading', description: 'Quick, gentle, and done before you finish your chai.', image: lipThreadingImg },
      { id: 'forehead-thread', name: 'Forehead Threading', description: 'Smooth, clean finish that makes your skin look polished.', image: forheadThreadingImg },
      { id: 'chin-thread', name: 'Chin Threading', description: 'Gentle removal that lasts — no irritation, just smooth.', image: chinThreadingImg },
      { id: 'face-sides-thread', name: 'Face Sides Threading', description: 'Subtle hair removal on the sides of your face for a cleaner look.', image: faceThreadingImg },
      { id: 'full-face-thread', name: 'Full Face Threading', description: 'Complete facial threading — walk out feeling like you got a mini facial.', image: faceThreadingImg },
      { id: 'normal-cleanup', name: 'Normal Clean-Up', description: 'Essential cleansing that leaves your face fresh and glowing without the fuss.', image: cleannUpImg },
      { id: 'advance-cleanup', name: 'Advanced Clean-Up', description: 'More than basic — deep cleanse with treatment for visible brightness.', image: cleannUpImg },
      { id: 'fruit-facial', name: 'Fruit Facial', description: 'Natural fruit enzymes that brighten and refresh — your skin on vacation.', image: fruitFacialImg },
      { id: 'charcoal-facial', name: 'Charcoal Facial', description: "Deep-cleansing charcoal that pulls out impurities you didn't know were there.", image: charcoalfacialImg },
      { id: 'lotus-facial', name: 'Lotus/VLCC Facial', description: "Premium product facial — the kind where your skin looks different 45 minutes later.", image: LotusFacialImg },
      { id: 'cheryls-facial', name: "Cheryl's/Ozone Facial", description: 'Luxury brand treatments for skin that deserves the upgrade.', image: LotusFacialImg },
      { id: 'o3-facial', name: 'O3+ Facial', description: "Oxygen therapy that makes your skin literally glow — people will ask if you've been doing something different.", image: o3FacialImg },
      { id: 'diamond-facial', name: 'Diamond Insta Glow', description: 'Instant radiance that hits different the moment you see your reflection.', image: DiamondFacialImg },
      { id: 'papaya-facial', name: 'Papaya Wrinkle Care', description: 'Gentle anti-aging care that smooths without chemicals.', image: facialTreatmentImg },
      { id: 'vitamin-c-facial', name: 'Vitamin C Rejuvenation', description: 'Brightening therapy for dull, tired-looking skin.', image: facialTreatmentImg },
      { id: 'red-vine-facial', name: 'Red Vine Anti-Ageing', description: 'Premium anti-aging care — your skin, but years younger.', image: facialTreatmentImg },
      { id: 'oxygen-facial', name: 'Oxygen Tan Treatment', description: "Targets tan and uneven tone — like a reset button for sun damage.", image: facialTreatmentImg },
      { id: 'detox-facial', name: 'Oxygen Detox (Acne Care)', description: "For acne-prone skin — calming, clearing, gentle but effective.", image: facialTreatmentImg },
      { id: 'hydra-cleanup', name: 'Hydra Facial Cleanup', description: 'Medical-grade cleanse — deep, thorough, and leaves skin unbelievably soft.', image: facialCleanupImg },
      { id: 'hydra-facial', name: 'Hydra Facial', description: 'The facial everyone talks about. Deep hydration, visible results, zero downtime.', image: facialTreatmentImg },
      { id: 'hydra-md', name: 'Hydra MD', description: 'Advanced hydra therapy — the next level from regular hydra facials.', image: facialTreatmentImg },
      { id: 'power-mask', name: 'Power Mask Add-on', description: 'Intensive treatment layer that turns a good facial into a great one.', image: facialTreatmentImg },
      { id: 'face-bleach', name: 'Face Bleach / De-Tan', description: 'Evens out skin tone and brightens — your natural glow, just uncovered.', image: facialCleanupImg },
      { id: 'back-bleach', name: 'Back & Stomach Bleach', description: 'For even, brightened skin on your back and midriff.', image: facialCleanupImg },
      { id: 'hands-bleach', name: 'Full Hands Bleach / De-Tan', description: "Your hands work hard — they shouldn't show the damage.", image: facialCleanupImg },
      { id: 'legs-bleach', name: 'Full Legs Bleach / De-Tan', description: 'Even skin tone from knees down.', image: facialCleanupImg },
      { id: 'body-polish', name: 'Body Polish', description: 'Full-body exfoliation that leaves you feeling like the smoothest version of yourself.', image: facialCleanupImg },
      { id: 'body-scrub', name: 'Full Body Scrub', description: 'Deep cleansing scrub for skin that feels renewed from head to toe.', image: facialCleanupImg }
    ]
  }, {
    id: 'nails-feet',
    title: 'Nails & Feet',
    description: 'Manicures and pedicures — because your hands and feet deserve a treat, not a rush job.',
    icon: <Hand className="w-5 h-5" />,
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    services: [
      { id: 'normal-manicure', name: 'Normal Manicure', description: 'Clean, neat nails — the basics, done well.', image: manicureImg },
      { id: 'herbal-manicure', name: 'Herbal Manicure', description: 'Natural herbs that leave your hands feeling soft, not stripped.', image: manicureImg },
      { id: 'spa-manicure', name: 'Spa Manicure', description: 'The kind where you close your eyes and forget your stress for 40 minutes.', image: manicureImg },
      { id: 'pedilogix-manicure', name: 'Pedilogix Manicure', description: 'Premium brand products for an elevated hand-care experience.', image: manicureImg },
      { id: 'normal-pedicure', name: 'Normal Pedicure', description: 'Clean, comfortable foot care — essential maintenance.', image: pedicureImg },
      { id: 'herbal-pedicure', name: 'Herbal Pedicure', description: 'Natural foot treatment — soft soles, no rough edges.', image: pedicureImg },
      { id: 'spa-pedicure', name: 'Spa Pedicure', description: 'The good pedicure. Where you actually relax, not just sit.', image: pedicureImg },
      { id: 'pedilogix-pedicure', name: 'Pedilogix Pedicure', description: 'Advanced foot therapy with professional-grade products.', image: pedicureImg },
      { id: 'nail-cut-file', name: 'Nail Cut / File', description: 'Quick shaping service — five minutes, fresh-looking nails.', image: manicureImg }
    ]
  }, {
    id: 'waxing-grooming',
    title: 'Waxing & Grooming',
    description: 'Smooth skin without the hassle — gentle waxing with products that respect your skin.',
    icon: <Droplet className="w-5 h-5" />,
    color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
    services: [
      { id: 'lipo-combo', name: 'Liposoluble Wax — Full Combo', description: 'Hands, legs and underarms in one go — full smooth, done fast.', image: waxingImg },
      { id: 'lipo-fh-ua', name: 'Liposoluble Wax — Hands & Underarms', description: 'Clean removal, gentle on sensitive skin.', image: waxingImg },
      { id: 'lipo-ua', name: 'Liposoluble Wax — Underarms Only', description: 'Quick, precise underarm waxing with minimal irritation.', image: waxingImg },
      { id: 'rica-combo', name: 'Rica Wax — Full Combo', description: 'Premium Italian-wax combo — the good stuff.', image: waxingImg },
      { id: 'rica-ua', name: 'Rica Wax — Underarms', description: 'Premium wax on a high-sensitivity area. Gentle and thorough.', image: waxingImg },
      { id: 'rica-body', name: 'Rica Wax — Full Body', description: 'Complete smoothing — arms, legs, underarms, everything.', image: waxingImg },
      { id: 'men-ua-wax', name: "Men's Underarm Wax", description: "Clean, quick, done. Because it's 2025.", image: manUnderArmWaxingImg },
      { id: 'men-half-legs', name: "Men's Half Legs Wax", description: 'Below-the-knee smoothing for comfort and aesthetics.', image: manLegWaxImg },
      { id: 'men-full-legs', name: "Men's Full Legs Wax", description: 'Complete leg waxing from thighs down.', image: manLegWaxImg },
      { id: 'men-body', name: "Men's Full Body Wax", description: 'Everything, everywhere, all at once.', image: manBackImg }
    ]
  }, {
    id: 'massage-wellness',
    title: 'Massage & Wellness',
    description: 'Not a luxury — your muscles are begging for this. 20 to 45 minutes of real decompression.',
    icon: <Flower2 className="w-5 h-5" />,
    color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    services: [
      { id: 'normal-massage', name: 'Normal Body Massage (45 mins)', description: 'Full-body relaxation that melts the day off your shoulders.', image: massageImg },
      { id: 'deep-tissue', name: 'Deep Tissue Massage (45 mins)', description: 'For knots you forgot you had. Intense but deeply satisfying.', image: massageImg },
      { id: 'deep-relax', name: 'Deep Relaxation Massage (45 mins)', description: 'Walk in tense, walk out like you just woke up from the best nap.', image: massageImg },
      { id: 'thai-massage', name: 'Thai Massage (45 mins)', description: 'Stretching, pressure points — an entirely different kind of reset.', image: massageImg },
      { id: 'head-massage', name: 'Head Massage (30 mins)', description: 'Your scalp holds so much tension. This releases it.', image: massageImg },
      { id: 'shoulder-massage', name: 'Shoulder & Hands Massage (30 mins)', description: 'For the parts of you that carry the weight of everything.', image: massageImg },
      { id: 'foot-massage', name: 'Foot Massage (20 mins)', description: 'Quick, effective, and your back never complains less.', image: massageImg }
    ]
  }, {
    id: 'mens-grooming',
    title: "Men's Grooming",
    description: 'Clean fades, sharp shaves, full grooming — everything to look put together without trying.',
    icon: <User className="w-5 h-5" />,
    color: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
    services: [
      { id: 'basic-haircut', name: "Men's Basic Haircut", description: 'A proper cut, priced fairly, done well.', image: mensGroomingImg },
      { id: 'fade-haircut', name: 'Fade / Advanced Cut', description: 'Clean edges, sharp lines — the kind of fade your barber needs to earn.', image: mensGroomingImg },
      { id: 'clean-shave', name: 'Clean Shave', description: 'Hot towel, smooth finish. Walk out feeling ten years younger.', image: mensGroomingImg },
      { id: 'beard-trim', name: 'Beard Trim', description: 'Shape it up — clean lines that look intentional, not accidental.', image: mensGroomingImg },
      { id: 'men-hair-color', name: 'Hair Color', description: "Base color or fashion shades — your call. Done with premium products that don't fry your hair.", image: mensGroomingImg },
      { id: 'beard-color', name: 'Beard Color', description: 'Even, natural-looking color that matches your hair or makes a statement.', image: mensGroomingImg },
      { id: 'men-hair-spa', name: "Men's Hair Spa", description: "Yes, men need this too. L'Oréal, Keratin, Protein — pick your repair.", image: mensGroomingImg }
    ]
  }];

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section — Outcome focused */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 px-4 py-8">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-sm uppercase tracking-wider text-primary mb-3">WHAT WE DO</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-4 leading-tight">
              Walk In Stressed, Walk Out<br className="hidden sm:block" /> Like You Were <span className="text-primary italic">Made</span> To
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Haircuts, facials, waxing, massage, and grooming — over 70 services, all done with genuine care.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button onClick={() => handleCallClick({ section_name: 'services_hero', cta_label: 'Call Now' })} data-analytics-event="cta_click" data-analytics-section="services_hero" data-analytics-label="Call Now" data-analytics-cta-type="phone" size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button onClick={() => navigate('/')} data-analytics-event="cta_click" data-analytics-section="services_hero" data-analytics-label="Back to Home" data-analytics-destination="/" variant="outline" size="lg" className="rounded-full px-8">
                Back to Home
              </Button>
            </div>
          </div>
        </section>

        {/* Specialty Spotlight */}
        <section className="bg-primary/[0.03] py-12 px-4 border-y">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="grid grid-cols-2 gap-3 flex-shrink-0 max-w-md mx-auto lg:mx-0 lg:w-[420px]">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src={serviceNanoplastia} alt="Nanoplastia before" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src={serviceColoring} alt="Balayage result" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Why Clients Drive Past 10 Salons to Get Here
                </span>
                <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-foreground mb-3 leading-tight">
                  Nanoplastia & Balayage — <br className="hidden sm:block" />
                  <span className="text-primary">The Treatments We're Known For</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  We do 70+ services, but these two are what clients <em>remember</em>.
                  Shehzad's signature balayage gives you color that grows out naturally, not harsh.
                  And our Nanoplastia treatment — listed in our Google business name — rebuilds your hair from inside, frizz-free and healthy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you're visiting this page wondering if your hair "deserves" a specialty treatment — it does. Book a free consultation and we'll be honest about what your hair needs.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/')}
                  data-analytics-event="cta_click"
                  data-analytics-section="services_spotlight"
                  data-analytics-label="Book a Free Consultation"
                  data-analytics-destination="/"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                >
                  Book a Free Consultation <span className="ml-1.5">→</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <Categories categories={serviceCategories} activeCategory={activeCategory} scrollToCategory={scrollToCategory} />

        {/* Service Categories */}
        <section className="py-12 px-4 pt-16">
          <div className="container mx-auto max-w-7xl px-0">
            {serviceCategories.map((category, catIdx) => (
              <div key={category.id} id={category.id} className="scroll-mt-36">
                {/* Category header */}
                <div className="mb-6 text-center sm:text-left">
                  <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                    <div className={cn('p-2 rounded-xl', category.color)}>
                      {category.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground max-w-xl mx-auto sm:mx-0">
                    {category.description}
                  </p>
                </div>
                {catIdx === 0 && <div className="mb-8" />}
                {catIdx > 0 && (
                  <div className="my-12 w-full h-px bg-border/40" />
                )}

                {/* Service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                  {category.services.map(service => (
                    <div
                      key={service.id}
                      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up border"
                    >
                      {/* Image area */}
                      {service.image && (
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          {/* Category icon badge */}
                          <div className={cn('absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/80 shadow-sm', category.color)}>
                            <span className="w-4 h-4">{category.icon}</span>
                          </div>
                          {/* Category tint on hover */}
                          <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity', category.color)} />
                        </div>
                      )}

                      {/* Text area */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0', category.color)}>
                            <span className="w-3.5 h-3.5">{category.icon}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-playfair font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <Button
                          onClick={() => handleCallClick({
                            section_name: 'service_card',
                            cta_label: 'Call to Book',
                            service_name: service.name,
                            service_category: category.id,
                          })}
                          data-analytics-event="service_interest"
                          data-analytics-section="services_list"
                          data-analytics-label={service.name}
                          data-analytics-service={service.name}
                          data-analytics-category={category.id}
                          variant="outline"
                          size="sm"
                          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                        >
                          <Phone className="w-3.5 h-3.5 mr-1.5" />
                          Call to Book
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Ready to Feel Like You Again?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We don't require advance payment, we reschedule if life gets busy, and we always start with a free consultation. Just show up — we'll handle the rest.
            </p>
            <Button onClick={() => handleCallClick({ section_name: 'services_cta', cta_label: 'Call Now' })} data-analytics-event="cta_click" data-analytics-section="services_cta" data-analytics-label="Call Now" data-analytics-cta-type="phone" size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto rounded-full">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </section>

        {/* Floating Call Button — mobile only */}
        <Button
          onClick={() => handleCallClick({ section_name: 'services_floating_cta', cta_label: 'Call Now' })}
          data-analytics-event="cta_click"
          data-analytics-section="services_floating_cta"
          data-analytics-label="Call Now"
          data-analytics-cta-type="phone"
          className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 md:h-auto md:w-auto md:px-6 md:rounded-full shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 transition-transform cursor-pointer"
          size="lg"
          aria-label="Call Moon Studios"
        >
          <Phone className="w-6 h-6 md:mr-2" />
          <span className="hidden md:inline">Call Now</span>
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
