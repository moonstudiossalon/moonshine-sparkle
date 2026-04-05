import { Instagram, Facebook, PhoneOutgoing, Flower } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 py-12 px-4  lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
              Moon Studios
            </h3>
            <p className="text-muted-foreground text-sm">
              Your trusted hair care partner in Andheri East. Precision cuts. Personal care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Reviews', 'Stylists', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </button>
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
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  window.open('https://www.facebook.com/profile.php?id=61579161101740', '_blank', 'noopener,noreferrer');
                }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <a
                href="tel:+919004832184"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <PhoneOutgoing className="w-5 h-5" />
              </a>
              <a
                href="https://wellnessta.com/partner/moon-studip-a-andheri-east-c-mumbai"
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
