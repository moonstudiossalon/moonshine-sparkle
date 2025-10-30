import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceHaircut from '@/assets/service-haircut.jpg';

const TopServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'Haircuts',
      description: 'Expert haircuts for men, women, and kids - perfect styles for your entire family.',
      image: serviceHaircut,
    },
    {
      title: 'Hair Coloring',
      description: 'Professional hair coloring services with premium quality products for stunning results.',
      image: serviceColoring,
    },
    {
      title: 'Hair Spa',
      description: 'Deep nourishment with Keratin, Protein, or L’Oréal hair feels softer, calmer, alive',
      image: serviceOlaplex,
    },
    {
      title: 'Hair Treatments',
      description: 'Advanced hair treatments including Nanoplastia, Botox, and Keratin for smooth, healthy hair.',
      image: serviceNanoplastia,
    },
  ];

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            Your Hair & Our Full-Care
          </h2>
        </div>

        {/* Desktop: 4 cards in a row */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">{services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{
            animationDelay: `${index * 100}ms`
          }}
            >
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
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: 2 cards per row */}
        <div className="grid grid-cols-2 md:hidden gap-4 sm:gap-6">{services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{
            animationDelay: `${index * 100}ms`
          }}
            >
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
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate('/services')}
            variant="outline"
            size="lg"
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
};

export default TopServices;
