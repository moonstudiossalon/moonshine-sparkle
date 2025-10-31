import { MapPin, Clock, CreditCard, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
const Location = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8501965309724!2d72.88492991149732!3d19.114226682023627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c991b4c48baf%3A0x59444ef9221923!2sMoon%20Studios-The%20Family%20Salon-Nanoplastia%20Hair%20Treatment%20%7C%20Hydra%20Medi%20Facial%20%7C%20Olaplex%20Hair%20Treatment-Balayage%20Hair%20colour!5e0!3m2!1sen!2sin!4v1761295422766!5m2!1sen!2sin";
  return <section id="contact" className="py-20 px-4  lg:px-8">
      <div className="container mx-auto max-w-7xl px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            Find Us Here
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-medium h-[500px] bg-card relative group cursor-pointer">
            <iframe src={mapUrl} width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Moon Studios Location Map" />
            <a href="https://maps.app.goo.gl/YqntQGMKfKekQMN69" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-foreground font-semibold">Click to open in Google Maps</p>
              </div>
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 shadow-soft rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-base font-normal">
                     Moon Studios(The Family Salon) <br /> 
                     Shop C, Harmony Apartments, 13, Krishanlal Marwah Marg <br />
                     Ashok Nagar, Andheri East, Mumbai, Maharashtra 400072
                  </p>
                </div>
              </div>
              

              <div className="flex py-3 items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-3">Hours</h3>
                  <div className="space-y-2">
                    <div className="inline-block bg-secondary/50 px-3 py-1.5 rounded-lg">
                      <p className="text-sm font-medium text-foreground">Open All Days</p>
                    </div>
                    <div className="inline-block bg-primary/10 px-3 py-1.5 rounded-lg ml-2">
                      <p className="text-sm font-medium text-primary">9:30 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="flex py-3 items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                  <a href="tel:+919004832184" className="text-primary hover:text-accent transition-colors">
                    +91 90048 32184
                  </a>
                </div>
              </div>
              
              
              <div className="flex py-3 items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment</h3>
                  <p className="text-muted-foreground">
                    UPI, Cards, Cash accepted
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
              <Button onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Moon+Studio+Andheri+East+Mumbai', '_blank')} size="lg" className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-semibold px-6 sm:px-8 h-11 sm:h-14 text-sm sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all py-[10px]">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
              
              <Button onClick={() => window.location.href = 'tel:+919004832184'} variant="outline" size="lg" className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 h-11 sm:h-14 text-sm sm:text-lg rounded-xl transition-all py-[10px]">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;