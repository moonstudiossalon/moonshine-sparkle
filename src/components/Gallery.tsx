import { Instagram } from 'lucide-react';
import { Button } from './ui/button';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';

const Gallery = () => {
  const transformations = [
    { 
      before: 'https://placehold.co/600x600/e0e0e0/666?text=Before+1',
      after: hero1, 
      alt: 'Hair transformation with balayage highlights',
      type: 'image'
    },
    { 
      before: 'https://placehold.co/600x600/e0e0e0/666?text=Before+2',
      after: hero2, 
      alt: 'Professional styling result',
      type: 'image'
    },
    { 
      before: 'https://placehold.co/600x600/e0e0e0/666?text=Before+3',
      after: hero3, 
      alt: 'Perfect hair color treatment',
      type: 'image'
    },
    { 
      before: 'https://placehold.co/600x600/e0e0e0/666?text=Before+4',
      after: serviceNanoplastia, 
      alt: 'Nanoplastia smoothening treatment',
      type: 'image'
    },
    { 
      before: 'https://placehold.co/600x600/e0e0e0/666?text=Before+5',
      after: serviceColoring, 
      alt: 'Hair coloring with highlights',
      type: 'image'
    },
    { 
      before: 'https://placehold.co/600x600/e0e0e0/666?text=Before+6',
      after: serviceOlaplex, 
      alt: 'Olaplex bond repair treatment',
      type: 'image'
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            See Transformations You’ll Love
          </h2>
          <p className="text-muted-foreground">
            Follow us on Instagram for more stunning results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.type === 'image' ? (
                <>
                  {/* Before Image */}
                  <img
                    src={item.before}
                    alt={`Before - ${item.alt}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />
                  {/* After Image */}
                  <img
                    src={item.after}
                    alt={`After - ${item.alt}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Before/After Labels */}
                  <div className="absolute top-3 left-3 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-semibold transition-opacity duration-300 group-hover:opacity-0">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    After
                  </div>
                </>
              ) : (
                <video
                  src={item.after}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2"
            onClick={() => window.open('https://www.instagram.com/moon_studios_21', '_blank')}
          >
            <Instagram className="w-5 h-5" />
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
