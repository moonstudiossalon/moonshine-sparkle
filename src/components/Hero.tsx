import { Star, Shield, Users } from 'lucide-react';
import { Button } from './ui/button';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight">
            Let your hair shine with<br />strength & beauty
          </h1>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">Certified stylists</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">5000+ happy clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="font-medium">Hygiene-first</span>
            </div>
          </div>

          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-hover transition-all mb-4"
          >
            Book Appointment
          </Button>

          {/* Rating badges */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-medium">4.9 Rating on JustDial</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-medium">4.9 Rating on Google</span>
            </div>
          </div>
        </div>

        {/* Three tilted image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          {[
            { img: hero1, rotation: '-rotate-2' },
            { img: hero2, rotation: 'rotate-1' },
            { img: hero3, rotation: '-rotate-1' }
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.rotation} hover:rotate-0 transition-all duration-300 hover:scale-105 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-hover aspect-[3/4] bg-card">
                <img
                  src={item.img}
                  alt={`Hair transformation ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
