import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const BalayageSalonAndheri = () => {
  useEffect(() => {
    document.title = 'Balayage Salon in Andheri East | Moon Studios';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get the best Balayage hair color in Andheri East at Moon Studios. Expert colorists create natural, sun-kissed highlights that grow out beautifully. Book your Balayage consultation today.');
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/balayage-salon-andheri');
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
              Expert Balayage Salon in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Moon Studios specializes in custom Balayage hair coloring - natural, sun-kissed highlights that grow out beautifully with minimal maintenance. Our expert colorists create personalized looks for every skin tone and hair type.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Book Your Balayage Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* What is Balayage Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              What is Balayage?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Balayage is a French hair coloring technique where color is hand-painted onto the hair to create a natural, graduated effect. Unlike traditional foil highlights, Balayage creates softer, more natural-looking regrowth lines.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The technique focuses on placing lighter shades where the sun would naturally hit your hair - around the face, on the ends, and throughout the mid-lengths for a dimensional, lived-in look.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Why Choose Balayage:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Low maintenance grow-out</li>
                  <li>Natural, sun-kissed look</li>
                  <li>Customizable for any hair color</li>
                  <li>Works on all hair types & lengths</li>
                  <li>Less damage than traditional highlights</li>
                  <li>Lasts 3-4 months between touch-ups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Balayage Techniques Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Our Balayage Techniques
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Classic Balayage</h3>
                <p className="text-muted-foreground">
                  Soft, blended highlights placed throughout the hair for natural dimension.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Face-Framing Balayage</h3>
                <p className="text-muted-foreground">
                  Lighter pieces focused around the face to brighten and illuminate your features.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Partial Balayage</h3>
                <p className="text-muted-foreground">
                  Highlights concentrated on the top and side sections for subtle dimension.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Full Balayage</h3>
                <p className="text-muted-foreground">
                  Complete hand-painted color service for maximum impact and dimension.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Balayage Pricing
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Partial Balayage</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹2,999</p>
                <p className="text-muted-foreground">Top & side sections, includes toner</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Half Head Balayage</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹3,999</p>
                <p className="text-muted-foreground">Half head coverage, includes toner</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Full Head Balayage</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹4,999</p>
                <p className="text-muted-foreground">Full coverage, includes toner & treatment</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Balayage + Haircut</h3>
                <p className="text-2xl font-bold text-primary mb-4">₹5,999</p>
                <p className="text-muted-foreground">Full Balayage + precision haircut</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              <em>Prices may vary based on hair length, thickness, and desired complexity. Consultation recommended for exact quote.</em>
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
                <h3 className="text-xl font-semibold mb-4">How long does Balayage last?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Balayage typically lasts 3-4 months before needing a touch-up. Because the color is blended and natural-looking, regrowth is less noticeable than traditional highlights.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Is Balayage suitable for grey hair?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! Balayage is excellent for blending grey hair. We can create highlights that seamlessly blend with your natural grey or use Balayage to minimize the appearance of grey while maintaining a low-maintenance look.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">How is Balayage different from ombre or sombre?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Balayage is a technique, while ombre and sombre are color gradients. Balayage creates natural, scattered highlights, while ombre is a dark-to-light gradient and sombre is a softer version of ombre.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Where are you located for Balayage services in Andheri East?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moon Studios is located at Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar, Andheri East, Mumbai 400072. We're easily accessible from both Marol Naka and Andheri East metro stations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for Beautiful, Natural-Looking Color?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
              Experience the art of Balayage at Moon Studios. Our expert colorists will create a custom look that enhances your natural beauty.
            </p>
            <Button
              onClick={() => window.location.href = 'tel:+919004832184'}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Book Your Balayage Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BalayageSalonAndheri;