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
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight px-4">
            Bring Your Family<br />Leave With Style
          </h1>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground px-4">
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
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all mb-4"
          >
            Book Your Visit
          </Button>

          {/* Rating badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-muted-foreground">
            <a href="https://www.justdial.com/Mumbai/Moon-Studio-The-Family-Salon-_-Hair-Salon-Andheri-East/022PXX22-XX22-180915172828-M8K4_BZDET" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="font-medium">4.9 Rating on </span>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
                  alt="JustDial"
                  className="h-4"
                />
              </div>
            </a>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-medium">4.9 Rating on</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt="Google"
                className="h-5"
              />
            </div>
          </div>
        </div>

        {/* Three tilted image cards - stacked on mobile, grid on desktop */}
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Mobile: Stacked overlapping style */}
          <div className="flex sm:hidden justify-center items-center relative h-[400px]">
            {[
              { img: hero1, rotation: '-rotate-6', zIndex: 30, translateX: '-translate-x-8', translateY: 'translate-y-8' },
              { img: hero2, rotation: 'rotate-3', zIndex: 20, translateX: 'translate-x-0', translateY: 'translate-y-0' },
              { img: hero3, rotation: '-rotate-3', zIndex: 10, translateX: 'translate-x-8', translateY: '-translate-y-8' }
            ].map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.rotation} ${item.translateX} ${item.translateY} animate-fade-up w-[240px]`}
                style={{ animationDelay: `${index * 100}ms`, zIndex: item.zIndex }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-medium aspect-[3/4] bg-card">
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

          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Hero;
