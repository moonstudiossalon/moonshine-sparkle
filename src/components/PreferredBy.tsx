import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Star } from 'lucide-react';
import sanchariImg from '../assets/images/sanchari_sengupta.png';
import laxshImg from '../assets/images/laxsh_raj.png';
import snehaImg from '../assets/images/dj_sneha.png';
import parleenImg from '../assets/images/parleen.png';
import dubaiImg from '../assets/images/dubai.png';
import nikhikImg from '../assets/images/nikhik.png';
import sajilImg from '../assets/images/kandwala.png';
const PreferredBy = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: false
  }, [AutoScroll({
    playOnInit: true,
    speed: 1,
    stopOnInteraction: false
  })]);
  const clients = [{
    name: 'Sanchari Sengupta',
    title: 'Playback Singer',
    image: sanchariImg,
    url: 'https://share.google/t9QsmnTQmPm85OfXo'
  }, {
    name: 'Lakshya Raj Anand',
    title: 'Film producer',
    image: laxshImg,
    url: 'https://share.google/4eyKno0nbS8Yx5tAN'
  }, {
    name: 'Sneha Agarwal',
    title: 'DJ',
    image: snehaImg,
    url: 'https://www.instagram.com/djsnea'
  }, {
    name: 'Parleen Singh',
    title: 'Mindset Coach/ Author',
    image: parleenImg,
    url: 'https://www.instagram.com/singhparleen'
  }, {
    name: 'Manjeet kaur',
    title: 'MISS INDIA/MISS DUBAI',
    image: dubaiImg,
    url: 'https://www.instagram.com/yes.manjeetkaur'
  }, {
    name: 'Nikhil Singh',
    title: 'Winner Battleground',
    image: nikhikImg,
    url: 'https://www.instagram.com/fitwithnikhil09'
  }, {
    name: 'Sajil Khandelwal',
    title: 'Businessman',
    image: sajilImg,
    url: 'https://www.instagram.com/sajilkhandelwal'
  }];
  return <section className="py-16 px-4  lg:px-8 bg-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-primary fill-primary" />
            Loved by the Stylish
            <Star className="w-8 h-8 text-primary fill-primary" />
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrities • Professionals • Moms • Dads • Leaders
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {[...clients, ...clients].map((client, index) => <div key={index} className="flex-[0_0_200px] min-w-0">
                <div className="rounded-2xl p-8 duration-300 text-center h-full flex flex-col items-center justify-center py-0 px-0">
                  <a href={client.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto border-4 border-primary/20">
                      <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {client.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {client.title}
                    </p>
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default PreferredBy;