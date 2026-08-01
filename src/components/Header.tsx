import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { Icon } from './Icon';
import OfferBar from './offers/OfferBar';
import { trackEvent } from '@/lib/analytics';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    if (item === 'Services') {
      navigate('/services');
    } else if (item === 'Offers') {
      navigate('/offers');
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: item.toLowerCase() } });
    } else {
      const element = document.getElementById(item.toLowerCase());
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'booking' } });
    } else {
      const isMobile = window.innerWidth < 768;
      const targetId = isMobile ? 'booking' : 'booking-desktop';
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    trackEvent('phone_call_click', {
      section_name: 'header',
      contact_method: 'phone',
      cta_label: 'Call Header',
      destination_url: 'tel:+919004832184',
    });
    window.location.href = 'tel:+919004832184';
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        let targetId = location.state.scrollTo;
        if (targetId === 'booking') {
          const isMobile = window.innerWidth < 768;
          targetId = isMobile ? 'booking' : 'booking-desktop';
        }
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* ORIGINAL DESKTOP HEADER */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex-shrink-0">
              <h4 className="text-xl sm:text-2xl font-playfair font-bold text-foreground">
                Moon Studios
              </h4>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {['Services', 'Offers', 'Process', 'Reviews', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  data-analytics-event="nav_click"
                  data-analytics-section="header"
                  data-analytics-label={item}
                  data-analytics-destination={
                    item === 'Services' || item === 'Offers'
                      ? `/${item.toLowerCase()}`
                      : item.toLowerCase()
                  }
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+919004832184"
                aria-label="Call Moon Studios"
                title="Call Now"
                data-analytics-event="phone_call_click"
                data-analytics-section="header"
                data-analytics-label="Call Header"
                data-analytics-contact-method="phone"
                className="hidden md:flex w-[46px] h-[46px] rounded-full items-center justify-center flex-shrink-0 bg-primary/[0.08] text-primary border-[1.5px] border-primary/45 hover:scale-[1.08] active:scale-[0.94] transition-transform"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/919004832184?text=${encodeURIComponent("Hi Moon Studios! I'd like to book an appointment — when's your next available slot?")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book on WhatsApp"
                title="WhatsApp"
                data-analytics-event="booking_start"
                data-analytics-section="header"
                data-analytics-label="WhatsApp Header"
                data-analytics-booking-method="whatsapp"
                data-analytics-booking-type="quick"
                className="hidden md:flex w-[46px] h-[46px] rounded-full items-center justify-center flex-shrink-0 bg-[#25D366] text-white shadow-[0_6px_16px_-6px_rgba(37,211,102,0.6)] hover:scale-[1.08] active:scale-[0.94] transition-transform"
              >
                <span style={{ width: 20, height: 20, display: 'inline-flex' }}>
                  <Icon name="whatsapp" />
                </span>
              </a>
              <Button
                onClick={handleBookClick}
                data-analytics-event="cta_click"
                data-analytics-section="header"
                data-analytics-label="Book Your Visit"
                data-analytics-cta-type="scroll_to_booking"
                size="sm"
                className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-5 sm:px-7 h-9 sm:h-11 text-sm sm:text-base rounded-xl shadow-soft hover:shadow-medium transition-all"
              >
                Book Your Visit
              </Button>
            </div>
          </div>
        </div>

        {/* Offer bar rides inside the already-fixed header so it always sits
            directly under the nav. Hero's pt-32 clears both. */}
        <OfferBar />
      </header>

      {/* PROTOTYPE MOBILE HEADER — header + offer bar stick together */}
      <div className="topstack block md:hidden">
        <header className="mhead">
          <Link to="/" className="logo">
            Moon Studios
            <small>The Family Salon</small>
          </Link>
          <button className="headcall" onClick={handleCall} aria-label="Call now">
            <span style={{ width: 14, height: 14, display: 'inline-flex' }}>
              <Icon name="phone" />
            </span>
            Call
          </button>
        </header>
        <OfferBar />
      </div>

      {/* PROTOTYPE MOBILE SEG TAB — Home | All Services */}
      <div className="seg md:hidden" role="tablist" style={{ marginTop: 10 }}>
        <button
          role="tab"
          aria-selected={location.pathname === '/'}
          className={location.pathname === '/' ? 'on' : ''}
          onClick={() => {
            trackEvent('nav_click', { section_name: 'seg_tab', nav_label: 'Home', destination: '/' });
            navigate('/');
          }}
        >
          Home
        </button>
        <button
          role="tab"
          aria-selected={location.pathname === '/offers'}
          className={location.pathname === '/offers' ? 'on' : ''}
          onClick={() => {
            trackEvent('nav_click', { section_name: 'seg_tab', nav_label: 'Offers', destination: '/offers' });
            navigate('/offers');
          }}
        >
          Offers
        </button>
        <button
          role="tab"
          aria-selected={location.pathname === '/services'}
          className={location.pathname === '/services' ? 'on' : ''}
          onClick={() => {
            trackEvent('nav_click', { section_name: 'seg_tab', nav_label: 'All Services', destination: '/services' });
            navigate('/services');
          }}
        >
          All Services
        </button>
      </div>
    </>
  );
};

export default Header;
