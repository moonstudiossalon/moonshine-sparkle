import { Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { Textarea } from '@/components/ui/textarea';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    problem: '',
    date: '',
    time: ''
  });

  const services = ['Nanoplastia Hair Treatment', 'Olaplex Hair Treatment', 'Hair Coloring with Highlights/Balayage', 'Hydra Facial & Korean Glass Facial', 'Hair Smoothening & Advanced Hair Cut', 'Other Services'];

  const timeSlots = ['9:30 AM', '10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.problem || !formData.date || !formData.time) {
      toast({
        title: "Please fill all fields",
        description: "Name, problem, date, and time are required.",
        variant: "destructive"
      });
      return;
    }

    const message = `Hi! I'd like to book an appointment:\n\nName: ${formData.name}\nProblem: ${formData.problem}\nDate: ${formData.date}\nTime: ${formData.time}`;
    const whatsappUrl = `https://wa.me/919004832184?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your booking via WhatsApp"
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919004832184';
  };

  return (
    <section id="booking" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto max-w-6xl px-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-stretch">
          {/* Left side - Heading */}
          <div className="lg:col-span-2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
              Your Dream Hair<br />
              <span className="text-primary italic">Is One Call Away</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Book on WhatsApp — we'll confirm your slot in minutes. No forms, no friction.
            </p>

            {/* Trust bullets */}
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              {[
                'Free consultation before your appointment',
                'Flexible rescheduling — life happens!',
                'No advance payment needed',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/50">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[1.5rem] shadow-medium p-5 sm:p-7 lg:p-8 border border-primary/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm sm:text-base"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-semibold text-foreground mb-2">
                    What's going on with your hair? *
                  </label>
                  <Textarea
                    id="problem"
                    value={formData.problem}
                    onChange={e => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm sm:text-base min-h-[80px] resize-none"
                    placeholder="Describe your hair or skin concerns..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={e => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm sm:text-base"
                      required
                    >
                      <option value="">Choose a time</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold px-6 h-12 sm:h-14 text-base sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all duration-300"
                  >
                    Book on WhatsApp
                  </Button>

                  <Button
                    type="button"
                    onClick={handleCall}
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 h-12 sm:h-14 text-base sm:text-lg rounded-xl transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
