import { Scissors, Sparkles, Heart } from 'lucide-react';

const Stylists = () => {
  const stylists = [
    {
      name: 'Monica',
      role: 'Owner & Lead Stylist',
      description: 'Warm consultations. Precision-driven.',
      icon: Heart,
    },
    {
      name: 'Shehzad',
      role: 'Cutting & Styling',
      description: 'Face-framing layers, creative cuts.',
      icon: Scissors,
    },
    {
      name: 'Sadam',
      role: 'Color & Treatments',
      description: 'Patient, thorough, transformation-focused.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="stylists" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            The people behind<br />all this attention
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stylist.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                {stylist.name}
              </h3>
              
              <p className="text-primary font-medium mb-3">{stylist.role}</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stylist.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stylists;
