import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceHaircut from '@/assets/service-haircut.jpg';

const TopServices = () => {
  const services = [
    {
      title: 'Nanoplastia Hair Treatment',
      price: '₹3,999',
      description: 'Signature treatment for frizzy, damaged hair — most praised in reviews.',
      image: serviceNanoplastia,
    },
    {
      title: 'Olaplex Hair Treatment',
      price: 'Premium range',
      description: 'Advanced bond-building treatment for hair repair.',
      image: serviceOlaplex,
    },
    {
      title: 'Hair Coloring with Highlights/Balayage',
      price: 'Varies',
      description: 'Global color & balayage technique with precision blending.',
      image: serviceColoring,
    },
    {
      title: 'Hydra Facial & Korean Glass Facial',
      price: '₹2,999 (combo offer)',
      description: 'Skin treatment packages with special offers.',
      image: serviceFacial,
    },
    {
      title: 'Hair Smoothening & Advanced Hair Cut',
      price: 'Starting ₹300+',
      description: 'Popular everyday services with expert styling.',
      image: serviceHaircut,
    },
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            Expert premium hair services<br />tailored for you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <Sparkles className="w-6 h-6 text-primary drop-shadow-md" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary font-bold text-lg mb-3">{service.price}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <Button
                  onClick={scrollToBooking}
                  variant="outline"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServices;
