import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const FamilySalonMarolMumbai = () => {
  useEffect(() => {
    document.title = 'Family Salon in Marol Mumbai | Moon Studios';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Moon Studios is the premier family salon in Marol, Mumbai offering haircuts, coloring, treatments, and grooming services for all ages. Trusted by 500+ families with 545 Google reviews.');
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://moonstudiossalon.in/family-salon-marol-mumbai');
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
              Trusted Family Salon in Marol, Mumbai
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Moon Studios has been serving families in Marol and Andheri East for years. We offer complete hair, beauty, and grooming services for men, women, and kids under one roof. With 545+ Google reviews and a 4.9 rating, we're the trusted choice for families.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Book Your Family Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* Why Families Choose Us Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Why Families Choose Moon Studios
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finding a salon that serves the whole family can be challenging. At Moon Studios, we've created a welcoming environment where everyone - from toddlers to grandparents - receives expert care tailored to their needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our experienced stylists understand the unique needs of different age groups and hair types, ensuring every family member leaves looking and feeling their best.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Family-Friendly Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Kids' haircuts starting at ₹499</li>
                  <li>Senior discounts available</li>
                  <li>Family appointment blocks</li>
                  <li>Kid-friendly entertainment zone</li>
                  <li>Flexible scheduling for busy families</li>
                  <li>Services for all hair types & textures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Every Family Member Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Services for Every Family Member
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Kids Section */}
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Kids' Services</h3>
                <div className="space-y-3">
                  <p className="font-medium mb-2">Haircuts:</p>
                  <p className="text-muted-foreground">Basic cut: ₹499</p>
                  <p className="font-medium mb-2">Special Services:</p>
                  <p className="text-muted-foreground">• First haircut ceremony (Mundan)</p>
                  <p className="text-muted-foreground">• Party & event styling</p>
                  <p className="text-muted-foreground">• Lice treatment & prevention</p>
                </div>
              </div>

              {/* Teens Section */}
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Teen Services</h3>
                <div className="space-y-3">
                  <p className="font-medium mb-2">Popular Services:</p>
                  <p className="text-muted-foreground">• Trendy haircuts & styling</p>
                  <p className="text-muted-foreground">• Hair coloring & highlights</p>
                  <p className="text-muted-foreground">• Balayage & ombre</p>
                  <p className="text-muted-foreground">• Hair treatments for damage</p>
                  <p className="font-medium mb-2">Grooming:</p>
                  <p className="text-muted-foreground">• Eyebrow shaping</p>
                  <p className="text-muted-foreground">• Facial hair cleanup</p>
                </div>
              </div>

              {/* Adults Section */}
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Adult Services</h3>
                <div className="space-y-3">
                  <p className="font-medium mb-2">Hair Services:</p>
                  <p className="text-muted-foreground">• Precision haircuts</p>
                  <p className="text-muted-foreground">• Nanoplastia & keratin treatments</p>
                  <p className="text-muted-foreground">• Olaplex & protein treatments</p>
                  <p className="text-muted-foreground">• Global color & Balayage</p>
                  <p className="font-medium mb-2">Skin & Grooming:</p>
                  <p className="text-muted-foreground">• Customized facials</p>
                  <p className="text-muted-foreground">• Waxing & threading</p>
                  <p className="text-muted-foreground">• Beard shaping & coloring</p>
                  <p className="text-muted-foreground">• Massage & relaxation</p>
                </div>
              </div>

              {/* Seniors Section */}
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Senior Services</h3>
                <div className="space-y-3">
                  <p className="font-medium mb-2">Special Considerations:</p>
                  <p className="text-muted-foreground">• Gentle, comfortable seating</p>
                  <p className="text-muted-foreground">• Shorter appointment options</p>
                  <p className="text-muted-foreground">• Grey coverage & blending</p>
                  <p className="text-muted-foreground">• Thinning hair solutions</p>
                  <p className="font-medium mb-2">Relaxing Services:</p>
                  <p className="text-muted-foreground">• Scalp massage</p>
                  <p className="text-muted-foreground">• Hand & foot massage</p>
                  <p className="text-muted-foreground">• Simple, elegant styling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Reviews Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Trusted by 500+ Families
            </h2>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-4">545</p>
                <p className="text-lg font-medium text-muted-foreground">Google Reviews</p>
                <p className="text-xl font-bold text-primary mb-2">4.9</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
                Our reputation is built on consistent quality, honest pricing, and genuine care for every client. Families return to us generation after generation because they know they'll receive expert service in a clean, professional environment.
              </p>
            </div>
          </div>
        </section>

        {/* Location & Hours Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Visit Our Marol Location
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Our Address:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moon Studios – The Family Salon<br/>
                  Shop C13, Harmony Apartments<br/>
                  Krishanlal Marwah Marg, Ashok Nagar<br/>
                  Andheri East, Mumbai 400072
                </p>
                <p className="font-medium mb-2">Landmarks:</p>
                <p className="text-muted-foreground">• 2 min walk from Marol Naka Metro Station</p>
                <p className="text-muted-foreground">• 5 min walk from Andheri East Station</p>
                <p className="text-muted-foreground">• Opposite MAXUS Mall</p>
                <p className="text-muted-foreground">• Near Chakala Bus Depot</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Opening Hours:</h3>
                <p className="text-muted-foreground">
                  <strong>Monday - Sunday:</strong> 9:30 AM - 9:00 PM
                </p>
                <p className="text-muted-foreground">
                  We're open every day, including holidays, to accommodate busy family schedules.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => window.location.href = 'tel:+919004832184'}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Call for Directions or Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* Family Packages Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-center">
              Family Salon Packages
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mom & Me Package</h3>
                <p className="text-muted-foreground">
                  Perfect for bonding time! Includes:<br/>
                  • Mom's haircut & style<br/>
                  • Kid's haircut (under 12)<br/>
                  • Complimentary kids' snack<br/>
                  • Total: ₹1,299 (save ₹300)
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Family Grooming Package</h3>
                <p className="text-muted-foreground">
                  Get everyone ready for special occasions! Includes:<br/>
                  • Haircuts for up to 4 family members<br/>
                  • Basic grooming (eyebrows, neck cleanup)<br/>
                  • Blow-dry styling<br/>
                  • Total: ₹3,499 (save ₹600)
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Senior Care Package</h3>
                <p className="text-muted-foreground">
                  Special care for our elders! Includes:<br/>
                  • Gentle haircut & style<br/>
                  • Scalp massage<br/>
                  • Eyebrow & facial hair cleanup<br/>
                  • Total: ₹899 (regular ₹1,200)
                </p>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Teen Transformation</h3>
                <p className="text-muted-foreground">
                  For back-to-school or special events! Includes:<br/>
                  • Trendy haircut & style<br/>
                  • Deep conditioning treatment<br/>
                  • Eyebrow shaping<br/>
                  • Total: ₹1,499 (regular ₹1,800)
                </p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              <em>Packages must be booked in advance. Subject to availability.</em>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Book Your Family's Appointment Today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
              Experience why 500+ families trust Moon Studios for their hair, beauty, and grooming needs. Our expert team is ready to serve every member of your family.
            </p>
            <Button
              onClick={() => window.location.href = 'tel:+919004832184'}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Book Family Appointment
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FamilySalonMarolMumbai;