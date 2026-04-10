import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, PhoneOutgoing, Flower, Youtube, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const quickLinks = [
    { label: 'Services', target: 'services' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'Stylists', target: 'stylists' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact', target: 'contact' },
  ];

  const moreLinks = [
    { label: 'Best Salon in Andheri East', href: '/best-salon-andheri-east' },
    { label: 'Family Salon in Marol', href: '/family-salon-marol-mumbai' },
    { label: 'Nanoplastia Hair Treatment', href: '/nanoplastia-andheri-east' },
    { label: 'Balayage Hair Colour', href: '/balayage-salon-andheri' },
    { label: 'Hydra Medi Facial', href: '/hydra-medi-facial-andheri-east' },
    { label: 'Olaplex Hair Treatment', href: '/olaplex-hair-treatment-andheri-east' },
    { label: 'Manicure and Pedicure', href: '/manicure-pedicure-mumbai' },
    { label: 'Salon Near Powai', href: '/salon-near-powai' },
    { label: 'Salon Near Ghatkopar', href: '/salon-near-ghatkopar' },
    { label: 'Salon Near Kurla', href: '/salon-near-kurla' },
  ];

  const openSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.location.href = `/#${id}`;
  };

  return (
    <footer ref={sectionRef} data-analytics-section="footer" data-analytics-label="Footer" data-analytics-section-view="true" className={`bg-secondary/30 py-12 px-4  lg:px-8 border-t border-border scroll-fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
              Moon Studios
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A warm, family-friendly salon in Andheri East and Marol for women, men, and kids. Known for expert
              hair, skin, and grooming services with thoughtful consultation and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => openSection(item.target)}
                    data-analytics-event="nav_click"
                    data-analytics-section="footer"
                    data-analytics-label={item.label}
                    data-analytics-destination={item.target}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">More at Moon Studios</h4>
            <ul className="space-y-2">
              {moreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  window.open('https://instagram.com/moonstudiossalon', '_blank', 'noopener,noreferrer');
                }}
                data-analytics-event="outbound_click"
                data-analytics-section="footer"
                data-analytics-label="Instagram"
                data-analytics-platform="instagram"
                data-analytics-destination="https://instagram.com/moonstudiossalon"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  window.open('https://www.youtube.com/@moonstudiossalon/shorts', '_blank', 'noopener,noreferrer');
                }}
                data-analytics-event="outbound_click"
                data-analytics-section="footer"
                data-analytics-label="YouTube"
                data-analytics-platform="youtube"
                data-analytics-destination="https://www.youtube.com/@moonstudiossalon/shorts"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  window.open('https://www.google.com/maps/place/Moon+Studios-The+Family+Salon-Nanoplastia+Hair+Treatment+%7C+Hydra+Medi+Facial+%7C+Olaplex+Hair+Treatment-Balayage+Hair+colour/@19.1142267,72.8875102,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c991b4c48baf:0x59444ef9221923!8m2!3d19.1142267!4d72.8875102!16s%2Fg%2F11pcdwvq61?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer');
                }}
                data-analytics-event="map_open"
                data-analytics-section="footer"
                data-analytics-label="Google Maps"
                data-analytics-platform="google_maps"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MapPin className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  window.open('https://www.facebook.com/profile.php?id=61579161101740', '_blank', 'noopener,noreferrer');
                }}
                data-analytics-event="outbound_click"
                data-analytics-section="footer"
                data-analytics-label="Facebook"
                data-analytics-platform="facebook"
                data-analytics-destination="https://www.facebook.com/profile.php?id=61579161101740"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <a
                href="tel:+919004832184"
                data-analytics-section="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <PhoneOutgoing className="w-5 h-5" />
              </a>
              <a
                href="https://wellnessta.com/partner/moon-studip-a-andheri-east-c-mumbai"
                data-analytics-event="outbound_click"
                data-analytics-section="footer"
                data-analytics-label="Wellnessta"
                data-analytics-platform="wellnessta"
                data-analytics-destination="https://wellnessta.com/partner/moon-studip-a-andheri-east-c-mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Flower className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Moon Studios. All rights reserved. Crafted with care.
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
