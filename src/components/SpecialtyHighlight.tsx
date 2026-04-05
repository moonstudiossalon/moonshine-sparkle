import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import before4 from '@/assets/gallery/f_color_b.jpg';
import after5 from '@/assets/gallery/f_color_af.jpg';
import before3 from '@/assets/gallery/1761652646179.jpg';
import after2 from '@/assets/gallery/1761652646175.jpg';

const specialties = [
  {
    id: 'nanoplastia',
    badge: 'Signature Treatment',
    title: 'Nanoplastia — Smooth,\nHealthy Hair That Moves',
    body: [
      "Nanoplastia isn't just another smoothing treatment. It uses organic acids and amino acids to rebuild your hair from the inside — repairing damage, removing frizz, and giving you that natural, lightweight bounce that lasts.",
      "It's for anyone battling humidity damage, frizz, chemical damage from years of coloring, or just hair that won't behave. No formaldehyde. No harsh chemicals. Just visibly healthier, smoother hair.",
      "At Moon Studios, this is what our Google Maps listing leads with — because it's what we're known for in Andheri East. Hundreds of treatments, consistent results."
    ],
    cta: 'Book a Free Consultation',
    beforeAfter: { before: before3, after: after2 },
    image: serviceNanoplastia,
    icon: Sparkles
  },
  {
    id: 'balayage',
    badge: "Shehzad's Signature",
    title: 'Balayage — Color That\nLooks Like It Was Meant To Be',
    body: [
      "Balayage is hand-painted color — soft sun-kissed tones that grow out naturally, not in harsh lines. It's the most requested service at Moon Studios because it looks like the color you were born with, just better.",
      "Whether you want warm caramel tones, cool ash blonde, or subtle lowlights that add dimension, Shehzad's freehand technique gives you dimensional color that looks good at 2 days and 2 months.",
      "Every balayage at Moon Studios starts with a honest consultation about your hair health. If your hair isn't ready for it, we'll tell you — and suggest what works first."
    ],
    cta: 'Book a Free Consultation',
    beforeAfter: { before: before4, after: after5 },
    image: serviceColoring,
    icon: Sparkles
  }
];

const SpecialtyHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    const el = document.getElementById('specialty');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % specialties.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    resetTimer();
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, activeIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, 8000);
  }, [goNext]);

  useEffect(() => {
    timerRef.current = setTimeout(goNext, 8000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [goNext]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const current = specialties[activeIndex];

  return (
    <section
      id="specialty"
      className={`py-0 bg-primary/[0.03] overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Featured Treatments"
    >
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous treatment"
          className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm rounded-full p-2.5 shadow-medium hover:bg-background transition-all cursor-pointer group scroll-fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
          <ChevronLeft className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next treatment"
          className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm rounded-full p-2.5 shadow-medium hover:bg-background transition-all cursor-pointer group scroll-fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          <ChevronRight className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide wrapper */}
        <div
          className="transition-opacity duration-500 ease-out"
          style={{ opacity: isTransitioning ? 0 : 1 }}
          onPointerDown={() => { if (timerRef.current) clearTimeout(timerRef.current); }}
          onPointerUp={() => { timerRef.current = setTimeout(goNext, 8000); }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            {/* Badge */}
            <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                  <current.icon className="w-3 h-3" />
                  {current.badge}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left — Visuals */}
              <div className="space-y-4">
                <div className={`scroll-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                  <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <img src={current.beforeAfter.before} alt={`Before ${current.id}`} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute top-3 left-3 bg-background/90 text-foreground px-2.5 py-1 rounded-full text-xs font-semibold">Before</div>
                    </div>
                    <div className="relative aspect-[3/4]">
                      <img src={current.beforeAfter.after} alt={`After ${current.id}`} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-semibold">After</div>
                    </div>
                  </div>
                </div>

                <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '350ms' }}>
                  <div className="rounded-2xl overflow-hidden aspect-[2/1]">
                    <img
                      src={current.image}
                      alt={current.id === 'nanoplastia' ? 'Nanoplastia treatment at Moon Studios' : 'Balayage coloring at Moon Studios'}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right — Story */}
              <div className="flex flex-col justify-center">
                <h2 className={`scroll-fade-left text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-6 leading-tight whitespace-pre-line ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                  {current.title}
                </h2>

                <div className="space-y-4">
                  {current.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`scroll-fade-left text-base sm:text-lg text-muted-foreground leading-relaxed ${isVisible ? 'visible' : ''}`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className={`scroll-fade-up mt-8 ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={scrollToBooking} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-auto text-base rounded-full">
                      {current.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button onClick={scrollToBooking} variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 h-auto text-base rounded-full">
                      Is This Right for You?
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                      Free consultation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                      No advance payment
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                      Flexible rescheduling
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className={`flex items-center justify-center gap-3 py-6 scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          {specialties.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Show ${specialties[index].id}`}
              className={`transition-all duration-300 rounded-full border-2 cursor-pointer ${
                index === activeIndex
                  ? 'w-8 h-3 bg-primary border-primary'
                  : 'w-3 h-3 bg-muted-foreground/20 border-muted-foreground/20 hover:bg-muted-foreground/40'
              }`}
            />
          ))}
        </div>

        {/* Auto-slide progress */}
        <div className={`h-1 bg-muted/10 scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <div
            className="h-full bg-primary/30 transition-all duration-[8000ms] ease-linear"
            key={activeIndex}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialtyHighlight;
