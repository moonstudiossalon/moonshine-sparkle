import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';

const Gallery = () => {
  const images = [
    { src: hero1, alt: 'Hair transformation with balayage highlights' },
    { src: hero2, alt: 'Professional styling result' },
    { src: hero3, alt: 'Perfect hair color treatment' },
    { src: serviceNanoplastia, alt: 'Nanoplastia smoothening treatment' },
    { src: serviceColoring, alt: 'Hair coloring with highlights' },
    { src: serviceOlaplex, alt: 'Olaplex bond repair treatment' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            Before & After<br />Transformations
          </h2>
          <p className="text-muted-foreground">
            Follow us on Instagram for more stunning results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => window.open(image.src, '_blank')}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
