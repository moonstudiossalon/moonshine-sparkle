import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const BookingCTA = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919004832184';
  };

  const scrollToBooking = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-6">
          Your dream hair is<br />one appointment away
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-hover transition-all"
          >
            Book Appointment
          </Button>
          
          <Button
            onClick={handleCall}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: +91 90048 32184
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
