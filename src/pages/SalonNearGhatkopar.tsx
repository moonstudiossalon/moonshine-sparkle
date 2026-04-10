import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const SalonNearGhatkopar = () => {
  useEffect(() => {
    document.title = 'Salon Near Ghatkopar for Hair and Beauty Services | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Searching for a salon near Ghatkopar? Moon Studios in Andheri East offers family salon services, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, haircuts, and grooming with a warm, review-backed experience.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/salon-near-ghatkopar');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Near Ghatkopar</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              A Trusted Salon Near Ghatkopar
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moon Studios in Andheri East is a trusted option for clients coming from Ghatkopar who want specialist
              hair and skincare services in a salon known for warmth, hygiene, and careful consultation.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
              Book a Visit
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">What makes Moon Studios different</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clients often describe the salon as friendly, comfortable, and expert-led. That combination matters
                most when you are choosing a place for color, smoothing, facial services, or hair repair rather than
                just a quick appointment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team serves women, men, and kids, which makes the salon useful for both specialist appointments
                and regular family visits.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Services worth travelling for</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Balayage and hair colour with a soft, lived-in finish</li>
                <li>Nanoplastia and smoothing-focused treatment care</li>
                <li>Olaplex treatment for damaged or chemically treated hair</li>
                <li>Hydra Medi Facial and skin refresh treatments</li>
                <li>Haircuts, grooming, and family salon appointments</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Visiting from Ghatkopar?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call ahead for timing, consultation guidance, and the easiest route to the salon from your side of the
              city.
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

export default SalonNearGhatkopar;
