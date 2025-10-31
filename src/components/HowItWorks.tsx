import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Sparkles, Heart } from 'lucide-react';
const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const steps = [{
    icon: Search,
    title: 'Analyze',
    description: 'We assess your hair type, texture, and concerns to understand your unique needs.'
  }, {
    icon: Lightbulb,
    title: 'Recommend',
    description: 'Our experts suggest the perfect treatment and styling options tailored for you.'
  }, {
    icon: Sparkles,
    title: 'Execute',
    description: 'We perform your chosen service with precision, care, and attention to detail.'
  }, {
    icon: Heart,
    title: 'Follow-up Care',
    description: 'We provide personalized aftercare tips to maintain your beautiful results.'
  }];
  return <section id="process" ref={sectionRef} className="py-20 px-4  lg:px-8 relative">
      <div className="container mx-auto max-w-6xl px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
           Your Journey <br />  Four Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting path - animated line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2">
            <div className={`h-full bg-primary transition-all duration-1500 ease-out ${isVisible ? 'w-full' : 'w-0'}`} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
            {steps.map((step, index) => <div key={index} className={`relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'}`} style={{
            animationDelay: `${index * 150}ms`
          }}>
                {/* Step number badge */}
                <div className={`absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-medium transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} style={{
              transitionDelay: `${index * 150 + 100}ms`
            }}>
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center pt-4">
                  <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} style={{
                transitionDelay: `${index * 150 + 200}ms`
              }}>
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;