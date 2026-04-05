import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { Hand, Sparkles, Clock } from 'lucide-react';
import { useEffect } from 'react';

const ManicurePedicureMumbai = () => {
  useEffect(() => {
    document.title = 'Best Manicure & Pedicure in Andheri East, Mumbai | Moon Studios';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium manicure and pedicure services in Andheri East, Mumbai. Choose from Normal, Herbal, Spa, and Pedilogix treatments. Starting from ₹499. Book your hand and foot care appointment today.');
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/manicure-pedicure-mumbai');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-0 py-[20px]">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <p className="text-sm uppercase tracking-wider text-primary mb-4">HAND & FOOT CARE</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Best Manicure & Pedicure in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              From quick refreshes to luxurious spa treatments — our expert technicians pamper your hands and feet with professional-grade products. Starting from ₹499.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Book Your Manicure & Pedicure
              </Button>
              <Button
                onClick={() => window.location.href = 'https://wa.me/919004832184?text=Hi%2C%20I%27d%20like%20to%20book%20a%20manicure%2Fpedicure%20appointment%20at%20Moon%20Studios.'}
                variant="outline"
                size="lg"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-center">
              Our Manicure & Pedicure Services
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Choose from four levels of pampering — from a quick tidy-up to a full spa experience.
            </p>

            {/* Manicures */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Hand className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-playfair font-semibold">Manicures</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: 'Normal Manicure', price: '₹499', time: '30 mins', desc: 'Nail shaping, cuticle care, hand massage, and polish.' },
                  { name: 'Herbal Manicure', price: '₹699', time: '45 mins', desc: 'Herbal-infused exfoliation, moisturizing mask, and massage.' },
                  { name: 'Spa Manicure', price: '₹999', time: '60 mins', desc: 'Paraffin wax dip, deep exfoliation, extended massage, premium polish.' },
                  { name: 'Pedilogix Manicure', price: '₹1,499', time: '75 mins', desc: 'Our signature premium treatment with luxury products and hot towel wrap.' },
                ].map((service) => (
                  <div key={service.name} className="border p-6 rounded-xl hover:shadow-medium transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold">{service.name}</h4>
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {service.time}
                    </p>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedicures */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-playfair font-semibold">Pedicures</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: 'Normal Pedicure', price: '₹599', time: '30 mins', desc: 'Soak, nail care, callus removal, foot massage, and polish.' },
                  { name: 'Herbal Pedicure', price: '₹799', time: '45 mins', desc: 'Herbal soak, exfoliation, moisturizing treatment, and massage.' },
                  { name: 'Spa Pedicure', price: '₹1,099', time: '60 mins', desc: 'Hot stone massage, deep exfoliation, paraffin treatment, premium polish.' },
                  { name: 'Pedilogix Pedicure', price: '₹1,599', time: '75 mins', desc: 'Our most luxurious foot treatment with specialized products and hot towel.' },
                ].map((service) => (
                  <div key={service.name} className="border p-6 rounded-xl hover:shadow-medium transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold">{service.name}</h4>
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {service.time}
                    </p>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combo CTA */}
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-playfair font-semibold mb-3">💅 Combo Deal</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Book a Manicure + Pedicure combo together at any tier and save ₹199
              </p>
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                className="bg-primary hover:bg-primary/90"
              >
                Book Combo
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Why Moon Studios for Manicure & Pedicure?
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Hygienic Tools', desc: 'Single-use files, buffers, and liners — every client gets fresh tools. We sterilize all metal instruments between appointments.' },
                { title: 'Professional Products', desc: 'We use Pedilogix, Lotus, and other professional-grade products — no drugstore generic alternatives.' },
                { title: 'Experienced Technicians', desc: 'Our nail care specialists have years of experience and know the difference between a quick trim and true pampering.' },
                { title: 'Open All Days', desc: '9:30 AM to 9 PM, every day. Walk in or call ahead — same-day appointments available.' },
              ].map((item) => (
                <div key={item.title} className="border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">How long does a manicure or pedicure take?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A normal manicure takes about 30 minutes, while a spa or Pedilogix treatment can take 60-75 minutes. Pedicures generally add 5-10 minutes due to soaking time.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Do I need to book in advance?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Walk-ins are welcome, but we recommend calling ahead — especially on weekends — to secure your preferred time slot. Same-day appointments are usually available on weekdays.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Are your tools sanitized?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely. All metal tools are sterilized in an autoclave between clients. Disposable items like files, buffers, and pumice stones are single-use. We also use fresh liners in foot tubs for every pedicure.
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Where are you located?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moon Studios is at Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar, Andheri East, Mumbai 400072 — just 2 minutes from Marol Naka metro station.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for Pampered Hands & Feet?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
              Book your manicure or pedicure at Moon Studios today. Walk-ins welcome, but calling ahead guarantees your slot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Call Now: +91 90048 32184
              </Button>
              <Button
                onClick={() => window.location.href = 'https://wa.me/919004832184?text=Hi%2C%20I%27d%20like%20to%20book%20a%20manicure%2Fpedicure.'}
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ManicurePedicureMumbai;
