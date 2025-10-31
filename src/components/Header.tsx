import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
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
      const element = document.getElementById('booking');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4  lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-playfair font-bold text-foreground">
              Moon Studios
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {['Services', 'Process', 'Reviews', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={handleBookClick}
            size="sm"
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-5 sm:px-7 h-9 sm:h-11 text-sm sm:text-base rounded-xl shadow-soft hover:shadow-medium transition-all"
          >
            Book Your Visit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
