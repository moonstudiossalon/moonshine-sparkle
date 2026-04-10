import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const BestSalonAndheriEast = () => {
  useEffect(() => {
    document.title = 'Best Family Salon in Andheri East, Marol | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Moon Studios is a warm, family-friendly salon in Andheri East and Marol, Mumbai for women, men, and kids. Explore haircuts, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, and grooming with 545+ Google reviews.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/best-salon-andheri-east');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Andheri East and Marol</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              A Trusted Family Salon in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moon Studios brings together warmth, hygiene, and technical expertise for women, men, and kids in
              Andheri East and Marol. Clients come to us for precision haircuts, Balayage, Nanoplastia, Hydra Medi
              Facial, Olaplex repair treatments, and everyday grooming that feels genuinely cared for.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
                Call to Book
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why clients choose Moon Studios</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                People looking for a salon in Andheri East usually want three things at once: comfort, honesty, and
                consistently good work. Moon Studios is known for friendly consultations, careful service, a welcoming
                atmosphere, and specialists who pay attention to hair texture, face shape, skin needs, and lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are especially known for advanced hair treatments and color work, while still being a dependable
                local salon for routine haircuts, grooming, facials, threading, waxing, manicure, pedicure, and
                family appointments.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Signature services people ask for</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li>Nanoplastia hair treatment for smoother, healthier-looking hair</li>
                <li>Balayage hair colour for soft dimension and a natural grow-out</li>
                <li>Hydra Medi Facial for deep cleansing and hydration</li>
                <li>Olaplex hair treatment for bond repair and strength</li>
                <li>Haircuts and styling for women, men, and kids</li>
                <li>Full family grooming under one roof in Marol, Andheri East</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Easy to reach from nearby areas</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Marol and Chakala</h3>
                <p className="text-muted-foreground">
                  A practical neighborhood choice for regular haircuts, treatments, and family salon visits close to
                  home or office.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Powai and Saki Naka</h3>
                <p className="text-muted-foreground">
                  Many clients travel from nearby eastern suburbs for specialist treatments like Nanoplastia,
                  Balayage, and Hydra Medi Facial.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Ghatkopar and Kurla</h3>
                <p className="text-muted-foreground">
                  Convenient for clients who want a trusted salon near Andheri East without compromising on warmth,
                  hygiene, or technical expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is Moon Studios only for women?</h3>
                <p className="text-muted-foreground">
                  No. Moon Studios is a family salon serving women, men, and kids with haircut, grooming, skincare,
                  and advanced treatment services.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Where is the salon located?</h3>
                <p className="text-muted-foreground">
                  Moon Studios is located at Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar,
                  Andheri East, Mumbai 400072, close to Marol Naka and Andheri East.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What are you best known for?</h3>
                <p className="text-muted-foreground">
                  Clients often mention Nanoplastia, Balayage, Hydra Medi Facial, Olaplex treatments, and the warm,
                  attentive service experience in their reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready to book your next visit?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios for appointments, treatment consultations, or quick directions from anywhere around
              Andheri East and Marol.
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

export default BestSalonAndheriEast;
