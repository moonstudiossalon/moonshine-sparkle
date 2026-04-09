import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
import { Button } from './ui/button';

import before1 from '@/assets/gallery/1_b.jpg';
import after1 from '@/assets/gallery/1_a.jpg';

import before2 from '@/assets/gallery/1761652646179.jpg';
import after2 from '@/assets/gallery/1761652646175.jpg';

import before3 from '@/assets/gallery/image_mare_before.jpg';
import after3 from '@/assets/gallery/image_male_after.jpg';

import before4 from '@/assets/gallery/female_hair_b.jpg';
import after4 from '@/assets/gallery/female_hair_after.jpg';

import before5 from '@/assets/gallery/f_color_b.jpg';
import after5 from '@/assets/gallery/f_color_af.jpg';

import before6 from '@/assets/gallery/f_face_b.jpg';
import after6 from '@/assets/gallery/f_face_af.jpg';

import before7 from '@/assets/gallery/f_hair_one_before.jpg';
import after7 from '@/assets/gallery/f_hair_one_after.jpg';

import before8 from '@/assets/gallery/last_one.jpg';
import after8 from '@/assets/gallery/last_one_after.jpg';

const transformations = [{
  before: before1,
  after: after1,
  alt: 'Hair transformation with balayage highlights'
}, {
  before: before2,
  after: after2,
  alt: 'Professional styling result'
}, {
  before: before3,
  after: after3,
  alt: 'Perfect hair color treatment'
}, {
  before: before4,
  after: after4,
  alt: 'Nanoplastia smoothening treatment'
}, {
  before: before5,
  after: after5,
  alt: 'Hair coloring with highlights'
}, {
  before: before6,
  after: after6,
  alt: 'Olaplex bond repair treatment'
}, {
  before: before7,
  after: after7,
  alt: 'Hair styling transformation'
}, {
  before: before8,
  after: after8,
  alt: 'Beautiful hair color result'
}];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" data-analytics-section="gallery" data-analytics-label="Gallery" data-analytics-section-view="true" className="py-20 px-4  lg:px-8 bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-0">
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            See Transformations You'll Love
          </h2>
          <p className="text-muted-foreground">
            Follow us on Instagram for more stunning results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {transformations.map((item, index) => (
            <div
              key={index}
              className={`scroll-scale ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300">
                <div className="flex h-full w-full">
                  <div className="relative w-1/2 h-full overflow-hidden">
                    <img src={item.before} alt={`Before - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-background/90 text-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative w-1/2 h-full overflow-hidden">
                    <img src={item.after} alt={`After - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white/50 -translate-x-1/2" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <Button variant="outline" size="lg" data-analytics-event="outbound_click" data-analytics-section="gallery" data-analytics-label="See More" data-analytics-platform="instagram" data-analytics-destination="https://www.instagram.com/moonstudiossalon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2" onClick={() => window.open('https://www.instagram.com/moonstudiossalon', '_blank')}>
            <Instagram className="w-5 h-5" />
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
