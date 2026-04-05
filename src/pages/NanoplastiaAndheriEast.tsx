import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const NanoplastiaAndheriEast = () => {
  useEffect(() => {
    document.title = 'Nanoplastia Hair Treatment in Andheri East | Moon Studios';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get the best Nanoplastia hair treatment in Andheri East at Moon Studios. Formaldehyde-free, nano-technology treatment for frizzy, damaged hair. Results last 3-4 months. Book now.');
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/nanoplastia-andheri-east');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-0 py-[20px]">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Nanoplastia Hair Treatment in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the latest in hair smoothing technology - formaldehyde-free Nanoplastia treatment that repairs, strengthens, and adds incredible shine to frizzy, damaged hair.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Call Now for Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* What is Nanoplastia Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              What is Nanoplastia?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nanoplastia is an advanced hair treatment that uses nano-technology to reconstruct hair from the inside out. Unlike traditional keratin treatments, Nanoplastia is 100% formaldehyde-free and works by infusing amino acids, proteins, and vitamins deep into the hair cortex.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The treatment repairs damage, eliminates frizz, reduces volume, and adds incredible shine while maintaining hair's natural movement and flexibility.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Formaldehyde-free & safe</li>
                  <li>Eliminates frizz & flyaways</li>
                  <li>Repairs damaged hair</li>
                  <li>Adds incredible shine</li>
                  <li>Reduces drying time by 50%</li>
                  <li>Results last 3-4 months</li>
                  <li>Works on all hair types</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Our Nanoplastia Process
            </h2>
            <ol className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <li>
                <strong>Consultation & Hair Analysis:</strong> We assess your hair type, condition, and desired results to customize the treatment.
              </li>
              <li>
                <strong>Deep Cleansing:</strong> Hair is washed with a clarifying shampoo to remove buildup and open the cuticle.
              </li>
              <li>
                <strong>Application:</strong> The Nanoplastia formula is applied section by section, ensuring even coverage.
              </li>
              <li>
                <strong>Processing Time:</strong> The treatment processes for 30-50 minutes depending on hair length and thickness.
              </li>
              <li>
                <li>
                  <strong>Sealing:</strong> Hair is blow-dried and flat-ironed at precise temperatures to seal in the treatment.
                </li>
              </li>
              <li>
                <strong>Final Rinse & Style:</strong> Hair is rinsed, conditioned, and styled to reveal smooth, shiny results.
              </li>
            </ol>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Nanoplastia Pricing
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Shoulder Length Hair</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹3,999</p>
                <p className="text-muted-foreground">Includes consultation, treatment, wash & style</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Medium Length Hair</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹4,999</p>
                <p className="text-muted-foreground">Includes consultation, treatment, wash & style</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Long Hair</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹5,999</p>
                <p className="text-muted-foreground">Includes consultation, treatment, wash & style</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Extra Long Hair</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹6,999</p>
                <p className="text-muted-foreground">Includes consultation, treatment, wash & style</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              <em>Prices may vary based on hair thickness and texture. Free consultation available.</em>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Is Nanoplastia safe for colored or chemically treated hair?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! Nanoplastia is actually beneficial for colored and chemically treated hair as it helps repair damage from previous treatments. The formaldehyde-free formula is gentle and won't strip color.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">How long does the treatment take?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The complete Nanoplastia treatment takes approximately 2-3 hours depending on hair length and thickness. This includes consultation, washing, application, processing time, and styling.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">How do I maintain my Nanoplastia treatment?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use sulfate-free shampoos and conditioners, avoid chlorine/salt water exposure for the first week, and get touch-ups every 3-4 months for optimal results.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Where are you located in Andheri East?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moon Studios is located at Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar, Andheri East, Mumbai 400072. We're just 2 minutes from Marol Naka metro station and 5 minutes from Andheri East station.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for Smooth, Frizz-Free Hair?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
              Experience the Moon Studios difference with our expert Nanoplastia treatment. Book your consultation today!
            </p>
            <Button
              onClick={() => window.location.href = 'tel:+919004832184'}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Book Your Nanoplastia Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NanoplastiaAndheriEast;