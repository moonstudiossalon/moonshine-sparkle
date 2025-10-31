import { CheckCircle2, Leaf, Shield, Heart } from 'lucide-react';
import { Button } from './ui/button';
const WhyChooseUs = () => {
  const reasons = [{
    icon: CheckCircle2,
    title: 'Expert Consultancy',
    description: 'Most clients are delighted by our perfect analysis. We understand your needs and deliver exactly what you envision.'
  }, {
    icon: Heart,
    title: 'Calming Environment',
    description: 'Clients love the peaceful atmosphere we create. You will feel truly relaxed and rejuvenated during your visit.'
  }, {
    icon: Leaf,
    title: 'Transparent Products',
    description: 'We not only tell you what products we use, but also explain why and how they work for your specific needs.'
  }];
  return <section className="py-20 px-4  lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            Why People Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Families & Celebs Choose Us Because
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {reasons.map((reason, index) => <div key={index} style={{
          animationDelay: `${index * 100}ms`
        }} className="group bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up py-[24px] px-[24px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-playfair font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>)}
        </div>

        <div className="text-center">
          <Button onClick={() => {
          const element = document.getElementById('booking');
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }} size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-hover transition-all">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;