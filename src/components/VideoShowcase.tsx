import { Volume2, VolumeX, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

interface VideoItem {
  id: string;
  title: string;
  description: string;
}

const videos: VideoItem[] = [
  { id: 'kQqPJmDil40', title: 'Fresh Fade Flow', description: 'Sharp cuts that change the whole vibe.' },
  { id: 'e_xiyPJ75G4', title: 'Colour Transformation', description: 'From dull to dazzling in one session.' },
  { id: 'sIkMaPHcmJg', title: 'The Salon Vibes', description: 'Where good music meets great hair.' },
  { id: 'vKog5vPy9gw', title: 'Nanoplastia Magic', description: 'Watch frizz disappear in real time.' },
  { id: 'gMn0cAUdfrE', title: 'Balayage Glow-Up', description: 'Sun-kissed colour, zero effort after.' },
  { id: '5zehCF1RbLA', title: 'The Weekend Refresh', description: 'Walk in tired, walk out ready.' },
  { id: 'Io3uJg9J058', title: 'Facial Glow', description: 'That post-facial radiance in under an hour.' },
];

const VideoShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(100);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());
  const isMobileRef = useRef(false);
  const scrollNextRef = useRef<(() => void) | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  scrollNextRef.current = scrollNext;

  // --- mobile detection ---
  useEffect(() => {
    const check = () => {
      isMobileRef.current =
        'ontouchstart' in window ||
        (navigator as any).maxTouchPoints > 0 ||
        window.innerWidth < 768;
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // --- active slide tracking ---
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  // --- intersection observer ---
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // --- play active / pause inactive via postMessage ---
  useEffect(() => {
    iframeRefs.current.forEach((iframe, idx) => {
      if (idx === activeIndex && isInViewport) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*',
        );
      } else {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
          '*',
        );
      }
    });
  }, [activeIndex, isInViewport]);

  // --- mute / volume ---
  useEffect(() => {
    iframeRefs.current.forEach((iframe) => {
      if (isMuted) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'mute', args: [] }),
          '*',
        );
      } else {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*',
        );
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [volume] }),
          '*',
        );
      }
    });
  }, [isMuted, volume]);

  // --- listen for YouTube state changes (ended = 0) ---
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      if (!e.data.includes('onStateChange')) return;

      try {
        const data = JSON.parse(e.data);
        if (data.event === 'onStateChange' && data.info === 0) {
          scrollNextRef.current?.();
        }
      } catch {
        // not our event
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  // --- swipe ---
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? scrollNext() : scrollPrev();
    }
  };

  const makeIframeSrc = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&loop=0&playsinline=1`;
  };

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="py-20 px-4 lg:px-8 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              See What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            Watch The Vibes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real transformations, real moments — swipe through our favourite
            clips.
          </p>
        </div>

        {/* Carousel — full-width on mobile, constrained on larger screens */}
        <div className="relative sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous video"
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card shadow-medium hover:shadow-hover items-center justify-center transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next video"
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card shadow-medium hover:shadow-hover items-center justify-center transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Viewport */}
          <div
            className="overflow-hidden"
            ref={emblaRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-3 sm:gap-5">
              {videos.map((video, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={video.id}
                    className="flex-[0_0_320px] sm:flex-[0_0_360px] md:flex-[0_0_340px] lg:flex-[0_0_28%] transition-opacity duration-300"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow">
                      {/* Iframe */}
                      <div className="aspect-[9/16] w-full relative">
                        <iframe
                          ref={(el) => {
                            if (el) {
                              iframeRefs.current.set(index, el);
                            } else {
                              iframeRefs.current.delete(index);
                            }
                          }}
                          src={makeIframeSrc(video.id)}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                        />

                        {/* Mobile mute badge */}
                        {isMobileRef.current && isInViewport && isActive && (
                          <div
                            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsMuted((p) => !p);
                            }}
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4 text-white" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Desktop volume controls */}
                      {isInViewport && isActive && !isMobileRef.current && (
                        <div className="hidden md:flex items-center gap-2 px-3 py-2">
                          <button
                            onClick={() => setIsMuted((p) => !p)}
                            className="text-foreground/70 hover:text-foreground transition-colors"
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4" />
                            ) : (
                              <Volume2 className="w-4 h-4" />
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={isMuted ? 0 : volume}
                            onChange={(e) => {
                              const v = parseInt(e.target.value);
                              setVolume(v);
                              if (v > 0 && isMuted) setIsMuted(false);
                            }}
                            className="w-20 h-1 accent-primary cursor-pointer"
                          />
                        </div>
                      )}

                      {/* Mobile spacer */}
                      {(!isInViewport || !isActive) && (
                        <div className="md:hidden px-4 pt-2 pb-1" />
                      )}

                      {/* Caption */}
                      <div className="px-4 pb-4">
                        <h3 className="font-semibold text-foreground text-base mb-1">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
