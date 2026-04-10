import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const SalonNearKurla = () => {
  useEffect(() => {
    document.title = 'Salon Near Kurla for Hair and Beauty Services | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Searching for a salon near Kurla? Moon Studios in Andheri East offers family salon services, haircuts, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, and grooming in a warm, review-backed setting.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/salon-near-kurla');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Near Kurla</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              A Salon Near Kurla Worth the Trip
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moon Studios in Andheri East is a warm, family-friendly salon for clients coming from Kurla who want
              trusted hair, facial, color, and treatment services with honest consultation and attentive care.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
              Call to Book
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why people travel here</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When people search for a salon near Kurla, they are often comparing convenience against quality. Moon
                Studios works best for clients who want more confidence in the result, especially for treatments,
                color work, or a comfortable family-friendly atmosphere.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Reviews consistently point to the salon's warmth, professionalism, and specialist expertise rather than
                just generic salon convenience.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">What clients book most</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Haircuts and styling for women, men, and kids</li>
                <li>Balayage and advanced color services</li>
                <li>Nanoplastia and repair-focused hair treatments</li>
                <li>Hydra Medi Facial and skincare services</li>
                <li>Olaplex treatment, grooming, threading, and waxing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Visiting from Kurla?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios before you travel and we will guide you on timing, availability, and the best route to
              the salon.
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

export default SalonNearKurla;
