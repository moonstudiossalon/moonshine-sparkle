import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const SalonNearPowai = () => {
  useEffect(() => {
    document.title = 'Salon Near Powai for Hair, Facial and Family Services | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Looking for a salon near Powai? Moon Studios in Andheri East is a trusted family salon for haircuts, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, and grooming, with a warm service experience and strong Google reviews.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/salon-near-powai');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Near Powai</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Looking for a Salon Near Powai?
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moon Studios is in Andheri East near Marol and is a practical choice for clients coming from Powai who
              want dependable haircut, color, facial, and advanced treatment services in a salon that feels warm and
              genuinely welcoming.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
              Call for Directions
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why clients from Powai choose us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some clients want a nearby neighborhood salon. Others are happy to travel a bit for better service,
                more consistent results, and specialists they trust with treatments like Balayage, Nanoplastia,
                Olaplex, or Hydra Medi Facial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Moon Studios is one of those salons people revisit because the experience is both technically strong
                and emotionally comfortable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Popular services</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Haircuts and styling for women, men, and kids</li>
                <li>Balayage and advanced hair colour</li>
                <li>Nanoplastia and repair-focused hair treatments</li>
                <li>Hydra Medi Facial and glow-focused skincare</li>
                <li>Olaplex treatment, threading, waxing, and grooming</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Coming from Powai?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios for the quickest route, availability, and service guidance before you visit.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-white text-primary hover:bg-white/90">
              Call Moon Studios
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SalonNearPowai;
