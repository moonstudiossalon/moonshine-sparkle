import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
const SkinCareServices = () => {
  const navigate = useNavigate();
  const services = [{
    title: 'Facial Treatments',
    description: 'Choose from Regular, Advanced, Organic, or Medi facials for glowing, healthy skin.',
    image: serviceFacial
  }, {
    title: 'Waxing',
    description: 'Professional waxing services - Full, Half, Upper Arms for smooth, hair-free skin.',
    image: serviceColoring
  }, {
    title: 'Pedicure & Manicure',
    description: 'Pamper yourself with Normal, Herbal, Spa, or Pedilogix treatments for beautiful hands and feet.',
    image: serviceOlaplex
  }, {
    title: 'Bleach & D-Tan',
    description: 'Brighten your skin with our bleach, d-tan, body polish, and scrub treatments.',
    image: serviceNanoplastia
  }];
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true
  });
  return <section className="py-20 px-4  lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            Glow Starts With Us
          </h2>
        </div>

        {/* Desktop: 4 cards in a row */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">{services.map((service, index) => <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-playfair font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* Mobile/Tablet: 2 cards per row */}
        <div className="grid grid-cols-2 md:hidden gap-4 sm:gap-6">{services.map((service, index) => <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-playfair font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>

        <div className="text-center">
          <Button onClick={() => navigate('/services')} variant="outline" size="lg" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Services
          </Button>
        </div>
      </div>
    </section>;
};
export default SkinCareServices;