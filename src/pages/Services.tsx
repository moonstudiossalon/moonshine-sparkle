import { useState } from 'react';
import { Search, Phone, MessageCircle, Calendar, ChevronDown, ArrowLeft, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type ServiceCategory = {
  id: string;
  title: string;
  services: string[];
};

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'women' | 'men' | 'massage'>('women');
  const [searchQuery, setSearchQuery] = useState('');

  const handleBookingClick = (serviceType?: string) => {
    navigate('/', { state: { scrollTo: 'booking', serviceType } });
  };

  const handleNavigateToSection = (section: string) => {
    navigate('/', { state: { scrollTo: section } });
  };

  const womenServices: ServiceCategory[] = [
    {
      id: 'women-threading',
      title: 'Threading',
      services: ['Eyebrow', 'Upper lip / forehead / chin', 'Face sides', 'Full face'],
    },
    {
      id: 'women-cleanup',
      title: 'Clean-Up',
      services: ['Normal', 'Advance'],
    },
    {
      id: 'women-bleach-dtan',
      title: 'Bleach / D-Tan',
      services: [
        'Face',
        'Back / stomach',
        'Full hands',
        'Full legs',
        'Feet',
        'Full body bleach / D-tan',
        'Body polish',
        'Full body scrub',
      ],
    },
    {
      id: 'women-waxing-lipo',
      title: 'Waxing (Liposoluble)',
      services: [
        'Upper lip / chin / forehead',
        'Underarms',
        'Full hands',
        'Full legs',
        'Half legs',
        'Full back',
        'Front',
        'Full body',
      ],
    },
    {
      id: 'women-waxing-rica',
      title: 'Waxing (Rica)',
      services: [
        'Combo areas (face/hands/underarms variants)',
        'Full body',
        'Belly',
        'Full back',
        'Bikini (V-wax – Normal / Rica)',
      ],
    },
    {
      id: 'women-hair-rituals',
      title: 'Hair Rituals',
      services: [
        'Hairwash & blow blast',
        'Hairwash & blow-dry',
        'Color-protector / dandruff / treatment shampoo',
        'Head massage (25 mins)',
        'Head massage + steam + wash + set',
        'Blow-dry / iron',
      ],
    },
    {
      id: 'women-hair-spa',
      title: 'Hair Spa',
      services: [
        'L\'Oréal',
        'Protein (Keratin)',
        'Moroccan (Argan oil)',
        'Repair (Olaplex-type)',
        'Cooling',
      ],
    },
    {
      id: 'women-haircuts',
      title: 'Haircuts',
      services: [
        'Kids haircut',
        'Fringe / flicks / bangs',
        'Normal haircut',
        'Advance haircut',
        'Advance haircut + wash + blow + set',
      ],
    },
    {
      id: 'women-facials-regular',
      title: 'Facials – Regular',
      services: ['Fruit / papaya', 'Charcoal'],
    },
    {
      id: 'women-facials-advance',
      title: 'Facials – Advance',
      services: ['Lotus / VLCC', 'Cheryls / Ozone', 'O3+'],
    },
    {
      id: 'women-facials-organic',
      title: 'Facials – Organic',
      services: [
        'Diamond (insta glow)',
        'Papaya (wrinkle care)',
        'Vitamin-C (skin rejuvenation)',
        'Red wine (anti-ageing)',
        'Oxygen (tan)',
        'Detox (acne)',
      ],
    },
    {
      id: 'women-medi-facial',
      title: 'Medi Facial',
      services: ['Hydra (cleanup)', 'Hydra (facial)', 'Hydra MD', 'Power mask (add-on)'],
    },
    {
      id: 'women-pedicure',
      title: 'Pedicure',
      services: ['Normal', 'Herbal', 'Spa', 'Pedilogix'],
    },
    {
      id: 'women-manicure',
      title: 'Manicure',
      services: ['Normal', 'Herbal', 'Spa', 'Pedilogix'],
    },
  ];

  const menServices: ServiceCategory[] = [
    {
      id: 'men-hair-rituals',
      title: 'Hair Rituals (Men)',
      services: [
        'Hairwash',
        'Hair set (with / without wash)',
        'Basic haircut',
        'Fade / advance haircut',
        'Clean shave',
        'Beard trim',
        'Beard color',
        'Moustache color',
        'Head massage',
        'Head massage + steam + wash',
        'Hair colour (L\'Oréal / Innova / Majirel)',
        'Base shade / fashion shade',
        'Cleansing / moisturizer (SPF)',
        'Hair spa (L\'Oréal / Keratin / Moroccan)',
        'Smoothening',
        'Keratin treatment',
        'Dandruff treatment',
        'Hairfall treatment',
      ],
    },
    {
      id: 'men-waxing',
      title: 'Waxing (Liposoluble – Men)',
      services: [
        'Upper lip / chin / forehead',
        'Underarms',
        'Full legs',
        'Half legs',
        'Full hands & underarms',
        'Full hands',
        'Back',
        'Front',
        'Full body',
      ],
    },
  ];

  const massageServices: ServiceCategory[] = [
    {
      id: 'massage-therapy',
      title: 'Massage Therapy (Unisex)',
      services: [
        'Normal body massage – 45 mins',
        'Deep tissue – 45 mins',
        'Deep relaxation – 45 mins',
        'Joints points – 30/45 mins',
        'Points & nerves – 30 mins',
        'Thai massage – 45 mins',
        'Foot massage – 20 mins',
        'Back massage – 20 mins',
        'Head massage – 30 mins',
        'Shoulder & hands – 30 mins',
      ],
    },
  ];

  const getActiveServices = () => {
    switch (activeTab) {
      case 'women':
        return womenServices;
      case 'men':
        return menServices;
      case 'massage':
        return massageServices;
      default:
        return womenServices;
    }
  };

  const filterServices = (categories: ServiceCategory[]) => {
    if (!searchQuery) return categories;
    
    return categories
      .map(category => ({
        ...category,
        services: category.services.filter(service =>
          service.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter(category => category.services.length > 0);
  };

  const filteredServices = filterServices(getActiveServices());

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4  lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <Button 
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold text-foreground mb-4">
                Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Salon & spa services in Andheri East
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  onClick={() => handleBookingClick()}
                  size="lg"
                  className="bg-primary hover:bg-accent text-primary-foreground"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
                <Button 
                  onClick={() => handleNavigateToSection('stylists')}
                  variant="outline"
                  size="lg"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Meet Our Stylists
                </Button>
                <Button 
                  onClick={() => handleNavigateToSection('contact')}
                  variant="outline"
                  size="lg"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Our Location
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="sticky top-16 sm:top-20 z-40 bg-background border-b border-border shadow-sm">
          <div className="container mx-auto max-w-6xl px-4  lg:px-8">
            <div className="flex gap-2 py-4">
              {(['women', 'men', 'massage'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                    activeTab === tab
                      ? 'bg-primary text-primary-foreground shadow-medium'
                      : 'bg-card text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 px-4  lg:px-8 bg-secondary/20">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2 border-border bg-background text-foreground focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 px-4  lg:px-8 pb-32 sm:pb-12">
          <div className="container mx-auto max-w-4xl">
            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No services found matching your search.</p>
              </div>
            ) : (
              <Accordion type="multiple" className="space-y-4">
                {filteredServices.map((category) => (
                  <AccordionItem
                    key={category.id}
                    value={category.id}
                    id={category.id}
                    className="bg-card rounded-2xl border-2 border-border overflow-hidden shadow-soft"
                  >
                    <AccordionTrigger
                      className="px-6 py-4 hover:no-underline hover:bg-secondary/20 transition-colors [&[data-state=open]]:bg-primary/5"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground text-left">
                        {category.title}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="space-y-2">
                        {category.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-muted-foreground py-2 border-b border-border last:border-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm sm:text-base">{service}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        onClick={() => handleBookingClick(category.title)}
                        size="sm"
                        className="mt-4 w-full sm:w-auto bg-primary hover:bg-accent text-primary-foreground"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book {category.title}
                      </Button>
                      {activeTab === 'men' && category.id === 'men-waxing' && (
                        <p className="mt-4 text-xs text-muted-foreground italic">
                          * No Boyzilian Wax
                        </p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </section>

        {/* Sticky Bottom Bar - Mobile Only */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg sm:hidden">
          <div className="container mx-auto px-4 py-3">
            <div className="flex gap-2">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="sm"
                variant="outline"
                className="flex-1 h-11 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/919004832184', '_blank')}
                size="sm"
                variant="outline"
                className="flex-1 h-11 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
              <Button
                onClick={() => window.location.href = '/#booking'}
                size="sm"
                className="flex-1 h-11 bg-primary hover:bg-accent text-primary-foreground"
              >
                <Calendar className="w-4 h-4 mr-1" />
                Book
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;