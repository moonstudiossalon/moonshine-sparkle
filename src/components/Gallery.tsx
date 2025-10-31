import { Instagram } from 'lucide-react';
import { Button } from './ui/button';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import before1 from '@/assets/gallery/before-1.jpg';
import before2 from '@/assets/gallery/before-2.jpg';
import before3 from '@/assets/gallery/before-3.jpg';
import before4 from '@/assets/gallery/before-4.jpg';
import before5 from '@/assets/gallery/before-5.jpg';
import before6 from '@/assets/gallery/before-6.jpg';
import before7 from '@/assets/gallery/before-7.jpg';
const Gallery = () => {
  const transformations = [{
    before: before1,
    after: hero1,
    alt: 'Hair transformation with balayage highlights',
    type: 'image'
  }, {
    before: before2,
    after: hero2,
    alt: 'Professional styling result',
    type: 'image'
  }, {
    before: before3,
    after: hero3,
    alt: 'Perfect hair color treatment',
    type: 'image'
  }, {
    before: before4,
    after: serviceNanoplastia,
    alt: 'Nanoplastia smoothening treatment',
    type: 'image'
  }, {
    before: before5,
    after: serviceColoring,
    alt: 'Hair coloring with highlights',
    type: 'image'
  }, {
    before: before6,
    after: serviceOlaplex,
    alt: 'Olaplex bond repair treatment',
    type: 'image'
  }, {
    before: before4,
    after: hero2,
    alt: 'Hair styling transformation video',
    type: 'video',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  }, {
    before: before7,
    after: hero1,
    alt: 'Beautiful hair color result',
    type: 'image'
  }];
  return <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container max-w-7xl mx-0 px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            See Transformations You’ll Love
          </h2>
          <p className="text-muted-foreground">
            Follow us on Instagram for more stunning results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {transformations.map((item, index) => <div key={index} className="group relative aspect-[5/7] overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer animate-fade-up" style={{
          animationDelay: `${index * 50}ms`
        }}>
              {item.type === 'image' ? <>
                  {/* Before Image */}
                  <img src={item.before} alt={`Before - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 group-hover:opacity-0" loading="lazy" />
                  {/* After Image */}
                  <img src={item.after} alt={`After - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {/* Before/After Labels */}
                  <div className="absolute top-3 left-3 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-semibold transition-opacity duration-300 group-hover:opacity-0">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    After
                  </div>
                </> : <>
              {/* Before Video Thumbnail */}
                  <img src={item.before} alt={`Before - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 group-hover:opacity-0" loading="lazy" />
                  {/* After Video */}
                  <video src={item.videoUrl} className="absolute inset-0 w-full h-full object-cover z-0" loop muted playsInline onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }} />
                  {/* Before/After Labels for Video */}
                  <div className="absolute top-3 left-3 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-semibold transition-opacity duration-300 group-hover:opacity-0">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    After
                  </div>
                </>}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>)}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2" onClick={() => window.open('https://www.instagram.com/moon_studios_21', '_blank')}>
            <Instagram className="w-5 h-5" />
            See More
          </Button>
        </div>
      </div>
    </section>;
};
export default Gallery;