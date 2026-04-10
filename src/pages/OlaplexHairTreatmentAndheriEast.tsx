import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const OlaplexHairTreatmentAndheriEast = () => {
  useEffect(() => {
    document.title = 'Olaplex Hair Treatment in Andheri East | Moon Studios';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get Olaplex hair treatment in Andheri East at Moon Studios. Bond-repair care for damaged, colored, or chemically treated hair with trusted consultation and a warm family salon experience in Marol, Mumbai.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/olaplex-hair-treatment-andheri-east');
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
              Olaplex Hair Treatment in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moon Studios offers Olaplex hair treatment in Andheri East for hair that feels weak, over-processed,
              dull, or stressed after coloring, smoothing, heat styling, or chemical services.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Olaplex Treatment
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Who this is ideal for</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Color-treated or bleached hair</li>
                <li>Hair that feels stretchy, rough, or breakage-prone</li>
                <li>Clients combining treatment with Balayage or global colour</li>
                <li>Anyone wanting stronger-feeling hair before or after a major service</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why book it here</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A bond-repair treatment works best when it is recommended honestly and paired with the right haircut,
                color plan, or aftercare. At Moon Studios, that consultation-first approach matters as much as the
                treatment itself.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Clients trust us for advanced treatment work because they feel listened to, not rushed or upsold.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can Olaplex be combined with color services?</h3>
                <p className="text-muted-foreground">
                  Yes. Many clients choose Olaplex alongside color services to help support hair strength during and
                  after chemical processing.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is Moon Studios close to Marol?</h3>
                <p className="text-muted-foreground">
                  Yes. The salon is in Andheri East near Marol, which makes it a convenient option for nearby
                  residential and office pockets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Need repair-focused hair care?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios and we will help you decide whether Olaplex, Nanoplastia, hair spa, or another
              treatment is the right fit for your hair.
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

export default OlaplexHairTreatmentAndheriEast;
