import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface VideoItem {
  id: string;
  title: string;
  description: string;
}

const videos: VideoItem[] = [
  {
    id: 'kQqPJmDil40',
    title: 'Fresh Fade Flow',
    description: 'Sharp cuts that change the whole vibe.',
  },
  {
    id: 'e_xiyPJ75G4',
    title: 'Colour Transformation',
    description: 'From dull to dazzling in one session.',
  },
  {
    id: 'sIkMaPHcmJg',
    title: 'The Salon Vibes',
    description: 'Where good music meets great hair.',
  },
  {
    id: 'vKog5vPy9gw',
    title: 'Nanoplastia Magic',
    description: 'Watch frizz disappear in real time.',
  },
  {
    id: 'gMn0cAUdfrE',
    title: 'Balayage Glow-Up',
    description: 'Sun-kissed colour, zero effort after.',
  },
  {
    id: '5zehCF1RbLA',
    title: 'The Weekend Refresh',
    description: 'Walk in tired, walk out ready.',
  },
  {
    id: 'Io3uJg9J058',
    title: 'Facial Glow',
    description: 'That post-facial radiance in under an hour.',
  },
];

const VideoShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Track active slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(scrollNext, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [scrollNext]);

  return (
    <section id="videos" className="py-20 px-4 lg:px-8 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">See What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            Watch The Vibes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real transformations, real moments — swipe through our favourite clips.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card shadow-medium hover:shadow-hover flex items-center justify-center transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card shadow-medium hover:shadow-hover flex items-center justify-center transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_30%] transition-opacity duration-300"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow">
                    {/* Video Embed */}
                    <div className="aspect-[9/16] w-full relative max-w-[280px] mx-auto">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=${activeIndex === index ? 1 : 0}&mute=${activeIndex === index ? 0 : 1}&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      />
                    </div>
                    {/* Caption */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-base mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
