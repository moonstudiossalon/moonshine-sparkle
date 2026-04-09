import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceHaircut from '@/assets/service-haircut.jpg';

const TopServices = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const services = [{
    title: 'Haircuts',
    description: "The kind of cut that makes people ask who does your hair — styles for men, women, and kids.",
    image: serviceHaircut
  }, {
    title: 'Hair Coloring',
    description: 'Subtle highlights that catch the light, bold color that turns heads — looks like it was made for you.',
    image: serviceColoring
  }, {
    title: 'Hair Spa',
    description: "Dry, dull, or damaged hair gets deep nourishment — walks out softer, calmer, alive.",
    image: serviceOlaplex
  }, {
    title: 'Advanced Treatments',
    description: 'Nanoplastia, Botox, Keratin — advanced smoothing and repair treatments that actually last.',
    image: serviceNanoplastia
  }];

  return <section
    ref={sectionRef}
    id="services"
    data-analytics-section="top_services"
    data-analytics-label="Top Services"
    data-analytics-section-view="true"
    className="py-20 px-4 lg:px-8"
  >
      <div className="container max-w-7xl mx-auto px-0">
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            Your Hair & Our Full-Care
          </h2>
        </div>

        {/* Desktop: 4 cards in a row */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
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
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: 2 cards per row */}
        <div className="grid grid-cols-2 md:hidden gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
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
            </div>
          ))}
        </div>

        <div className={`text-center scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '480ms' }}>
          <Button onClick={() => navigate('/services')} data-analytics-event="cta_click" data-analytics-section="top_services" data-analytics-label="View All Services" data-analytics-destination="/services" variant="outline" size="lg" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Services
          </Button>
        </div>
      </div>
    </section>;
};

export default TopServices;
