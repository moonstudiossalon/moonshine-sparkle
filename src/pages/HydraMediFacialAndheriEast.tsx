import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const HydraMediFacialAndheriEast = () => {
  useEffect(() => {
    document.title = 'Hydra Medi Facial in Andheri East | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Book Hydra Medi Facial in Andheri East at Moon Studios. Deep cleansing, hydration, glow-focused care, and a warm salon experience in Marol for women, men, and family appointments.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/hydra-medi-facial-andheri-east');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Hydra Medi Facial in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              If you are looking for a Hydra Medi Facial in Andheri East or Marol, Moon Studios offers a calm,
              clean, consultation-led experience focused on hydration, texture, glow, and skin comfort.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Facial
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">What this facial helps with</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Dehydrated or tired-looking skin</li>
                <li>Build-up, rough texture, and dullness</li>
                <li>Pre-event glow and skin refresh</li>
                <li>Clients who want a results-led facial without heavy downtime</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why clients choose Moon Studios</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our facial clients value two things equally: visible results and a salon experience that feels warm,
                attentive, and hygienic. We take time to understand your skin concerns before starting and recommend
                services honestly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That same warmth is one of the reasons the salon stands out in public reviews alongside our advanced
                treatment work.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is Hydra Medi Facial good before an event?</h3>
                <p className="text-muted-foreground">
                  Yes. Many clients choose it when they want a fresher, more hydrated look before a wedding, party,
                  shoot, or special occasion.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Where is Moon Studios located?</h3>
                <p className="text-muted-foreground">
                  We are in Andheri East, Mumbai near Marol, making us easy to reach from Chakala, Powai, Saki Naka,
                  Ghatkopar, and Kurla.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Want hydrated, glow-ready skin?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios to book your Hydra Medi Facial or ask which facial is best for your skin right now.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-white text-primary hover:bg-white/90">
              Call for a Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HydraMediFacialAndheriEast;
