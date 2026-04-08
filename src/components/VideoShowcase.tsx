import { Volume2, VolumeX, ChevronLeft, ChevronRight, Play, Instagram, Youtube } from 'lucide-react';
import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

interface VideoItem {
  id: string;
  title: string;
  description: string;
}

const videos: VideoItem[] = [

  { id: 'gMn0cAUdfrE', title: 'Complete Makeover', description: 'Sun-kissed colour, zero effort after.' },
  { id: 'v_w9hHuOthg', title: 'Hair Rescue Story', description: 'Turning hair heartbreak into a healthy, happy..' },
  { id: 'vW7M-onjBmQ', title: 'Global Grooming', description: 'From Germany to Mumbai—world-class hair care ...' },
  { id: 'sIkMaPHcmJg', title: 'ICWF Event Mackup', description: 'Where good music meets great hair...' },
  { id: 'Io3uJg9J058', title: 'Sharp Fade & Finish', description: 'From a relaxing wash to a precision cut—walk' },
  { id: '5zehCF1RbLA', title: 'The Weekend Refresh', description: 'Walk in tired, walk out ready.' },
  { id: 'gLb8TlAVgZY', title: 'The Search is Over', description: 'Finding your "hair home" after years ...' }
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
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-0">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              See What We Do
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-semibold text-foreground mb-3">
            Watch The Vibes
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Real transformations, real moments — swipe through our favourite
            clips.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto">
          {/* Arrows — desktop */}
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

          {/* Mobile arrows — left & right */}
          <button
            onClick={scrollPrev}
            aria-label="Previous video"
            className="md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-card/90 backdrop-blur shadow-md hover:shadow-lg flex items-center justify-center active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next video"
            className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-card/90 backdrop-blur shadow-md hover:shadow-lg flex items-center justify-center active:scale-95 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Viewport — negative margin on mobile to full-bleed, then padded on larger screens */}
          <div
            className="-mx-4 sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-6xl overflow-hidden"
            ref={emblaRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-0 sm:gap-4 lg:gap-5">
              {/* Leading spacer for gap between first and last video */}
              {videos.map((video, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={video.id}
                    className="flex-[0_0_300px] sm:flex-[0_0_350px] md:flex-[0_0_310px] lg:flex-[0_0_25%] transition-opacity duration-300"
                  >
                    {/* Iframe — no card wrapper, full-bleed video */}
                    <div className="rounded-2xl overflow-hidden relative group">
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
                        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-card">
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

                      {/* Caption — on mobile, simple text below video (no padding wasted) */}
                      {(!isMobileRef.current || isInViewport) && (
                        <div className="px-3 py-2.5 bg-card">
                          <h3 className="font-semibold text-foreground text-sm mb-0.5 truncate">
                            {video.title}
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {video.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Trailing spacer for gap between first and last video */}
              <div className="flex-[0_0_0] sm:flex-[0_0_10%] md:flex-[0_0_3%] lg:flex-[0_0_0%]" />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to video ${index + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 cursor-pointer',
                  index === activeIndex
                    ? 'bg-primary w-6 sm:w-8'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                )}
              />
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => window.open('https://www.youtube.com/@moonstudiossalon/shorts', '_blank')}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Youtube className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Follow Us on Youtube</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
