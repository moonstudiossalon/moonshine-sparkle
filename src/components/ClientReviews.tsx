import { useEffect, useRef, useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { Button } from './ui/button';
const ClientReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const reviews = [{
    name: 'Riddhima C.',
    rating: 5,
    reviewCount: 15,
    date: '9 months ago on Google',
    text: "I couldn't be happier with the results of my hair highlights! The attention to detail and precision was outstanding. The color is perfectly blended, giving my hair a natural yet vibrant look that suits me perfectly. The stylist truly understood my vision and went above and beyond to deliver. I've received so many compliments already—definitely coming back for more! Highly recommend!",
    avatar: 'RC'
  }, {
    name: 'Anindita R.',
    rating: 5,
    reviewCount: 15,
    date: '8 months ago on Google',
    text: "I went for Nanoplastia treatment 2 days back and I am amazed by the service provided by Shehzad. Monica the owner is a sweetheart. She is amazing and so is Shehzad. It's my first visit but definitely not the last. Shehzad is a one-man army… patiently did the treatment with a smile on his face throughout. I have been to several parlours in several states but the warmth here is unparalleled. Thank you guys, you are fabulous!",
    avatar: 'AR'
  }, {
    name: 'Anannya D.',
    rating: 5,
    reviewCount: 8,
    date: '6 months ago on Google',
    text: "Omg!! This is by far the best hair experience ever. Monica the owner is a sweetheart! They listened carefully and gave me exactly what I wanted. Sadam was magical!! He was patient and did my treatment with so much care and professionalism. My hair has never looked better! Highly recommend Moon Studios to everyone looking for a solid transformation. These people are amazing at their jobs and lovely humans too!",
    avatar: 'AD'
  }];
  return <section
    ref={sectionRef}
    id="reviews"
    data-analytics-section="reviews"
    data-analytics-label="Client Reviews"
    data-analytics-section-view="true"
    className="py-20 px-4  lg:px-8 bg-secondary/20"
  >
      <div className="container mx-auto max-w-6xl px-0">
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            Real Stories from Happy Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => <div key={index} className={`scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              {/* Avatar and name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-xs text-muted-foreground">{review.reviewCount} reviews</p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
              </div>

              {/* Date */}
              <p className="text-xs text-muted-foreground mb-4">{review.date}</p>

              {/* Review text */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
              </div>
            </div>)}
        </div>

        <div className={`text-center space-y-4 scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" size="lg" data-analytics-event="review_engagement" data-analytics-section="reviews" data-analytics-label="View All Reviews" data-analytics-platform="google_maps" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2" onClick={() => window.open('https://maps.app.goo.gl/2UPypwux2XpX57jE6', '_blank')}>
              <MapPin className="w-5 h-5" />
              View All Reviews
            </Button>
            <Button 
              size="lg" 
              data-analytics-event="cta_click"
              data-analytics-section="reviews"
              data-analytics-label="Book Your Appointment"
              data-analytics-cta-type="scroll_to_booking"
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold"
              onClick={() => {
                const element = document.getElementById('booking');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Appointment
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Join thousands of satisfied clients. {' '}
            <button 
              onClick={() => {
                const element = document.getElementById('gallery');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-analytics-event="cta_click"
              data-analytics-section="reviews"
              data-analytics-label="See their transformations"
              data-analytics-cta-type="scroll_to_gallery"
              className="text-primary hover:text-accent font-semibold underline transition-colors"
            >
              See their transformations
            </button>
          </p>
        </div>
      </div>
    </section>;
};
export default ClientReviews;
