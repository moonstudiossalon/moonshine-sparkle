import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import StructuredData from '@/components/StructuredData';
import OfferFull from '@/components/offers/OfferFull';
import { OFFERS } from '@/lib/offers';

const Offers = () => {
  useSEO({
    title: 'Happy Hour Offer — Free Second Service | Moon Studios Andheri East',
    description:
      'Pay for one service and get the second free at Moon Studios, Andheri East — Monday to Thursday, 12 PM to 5 PM, by appointment. Four pairs to choose from.',
    canonicalUrl: 'https://moonstudiossalon.in/offers',
  });

  return (
    <div className="moon min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1 pt-16 pb-24 md:pb-0 offers-screen">
        <section className="px-5 py-7 sm:py-16 sm:text-center">
          <div className="sm:container sm:mx-auto sm:max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-2">
              Running Offers
            </p>
            <h1
              className="font-playfair font-semibold leading-[1.08] mb-3"
              style={{ fontSize: 'clamp(28px,8vw,56px)' }}
            >
              Come in quiet hours,
              <br />
              leave with <em className="text-primary italic">two</em> services.
            </h1>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: 'clamp(14px,3.5vw,17px)', maxWidth: '48ch', margin: '0 auto' }}
            >
              Our weekday slots are calmer — so we give the second service free. Fewer people, more
              attention, same team.
            </p>
          </div>
        </section>

        {OFFERS.map((offer) => (
          <OfferFull key={offer.id} offer={offer} />
        ))}
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Offers;
