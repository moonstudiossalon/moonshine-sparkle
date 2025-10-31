import { Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { Textarea } from '@/components/ui/textarea';
const BookingForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    problem: '',
    date: '',
    time: ''
  });
  const services = ['Nanoplastia Hair Treatment', 'Olaplex Hair Treatment', 'Hair Coloring with Highlights/Balayage', 'Hydra Facial & Korean Glass Facial', 'Hair Smoothening & Advanced Hair Cut', 'Other Services'];

  // Generate time slots from 9:30 AM to 9:00 PM in 1-hour intervals
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

    // Create WhatsApp message
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
  return <section id="booking" className="py-16 sm:py-20 px-4  lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto max-w-6xl px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Heading */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3 sm:mb-4">
              Your dream hair is<br />one appointment away
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">Fill in your details and we'll get back to you</p>
          </div>
          
          {/* Right side - Form */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-medium h-full flex flex-col px-[24px]">
            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name *
              </label>
              <input type="text" id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Enter your name" required />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-semibold text-foreground mb-2">
                Problem You Are Facing *
              </label>
              <Textarea id="problem" value={formData.problem} onChange={e => setFormData({
                ...formData,
                problem: e.target.value
              })} className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all min-h-[100px] resize-none" placeholder="Describe your hair or skin concerns..." required />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
                Preferred Date *
              </label>
              <input type="date" id="date" value={formData.date} onChange={e => setFormData({
                ...formData,
                date: e.target.value
              })} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" required />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-foreground mb-2">
                Preferred Time *
              </label>
              <select id="time" value={formData.time} onChange={e => setFormData({
                ...formData,
                time: e.target.value
              })} className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" required>
                <option value="">Choose a time slot</option>
                {timeSlots.map(slot => <option key={slot} value={slot}>
                    {slot}
                  </option>)}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 mt-auto">
              <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-semibold px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all py-[10px]">
                Book Now
              </Button>
              
              <Button type="button" onClick={handleCall} variant="outline" size="lg" className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg rounded-xl transition-all py-[10px]">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>;
};
export default BookingForm;