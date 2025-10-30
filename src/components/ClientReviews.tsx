import { Star, ExternalLink, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const ClientReviews = () => {
  const reviews = [
    {
      name: 'Riddhima C.',
      rating: 5,
      reviewCount: 15,
      date: '9 months ago on Google',
      text: "I couldn't be happier with the results of my hair highlights! The attention to detail and precision was outstanding. The color is perfectly blended, giving my hair a natural yet vibrant look that suits me perfectly. The stylist truly understood my vision and went above and beyond to deliver. I've received so many compliments already—definitely coming back for more! Highly recommend!",
      avatar: 'RC',
    },
    {
      name: 'Anindita R.',
      rating: 5,
      reviewCount: 15,
      date: '8 months ago on Google',
      text: "I went for Nanoplastia treatment 2 days back and I am amazed by the service provided by Shehzad. Monica the owner is a sweetheart. She is amazing and so is Shehzad. It's my first visit but definitely not the last. Shehzad is a one-man army… patiently did the treatment with a smile on his face throughout. I have been to several parlours in several states but the warmth here is unparalleled. Thank you guys, you are fabulous!",
      avatar: 'AR',
    },
    {
      name: 'Anannya D.',
      rating: 5,
      reviewCount: 8,
      date: '6 months ago on Google',
      text: "Omg!! This is by far the best hair experience ever. Monica the owner is a sweetheart! They listened carefully and gave me exactly what I wanted. Sadam was magical!! He was patient and did my treatment with so much care and professionalism. My hair has never looked better! Highly recommend Moon Studios to everyone looking for a solid transformation. These people are amazing at their jobs and lovely humans too!",
      avatar: 'AD',
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Date */}
              <p className="text-xs text-muted-foreground mb-4">{review.date}</p>

              {/* Review text */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2"
            onClick={() => window.open('https://maps.app.goo.gl/2UPypwux2XpX57jE6', '_blank')}
          >
            <MapPin className="w-5 h-5" />
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
