import { Wind, Zap, Droplet } from 'lucide-react';

const HairProblems = () => {
  const problems = [
    { icon: Wind, label: 'Frizz' },
    { icon: Zap, label: 'Damage' },
    { icon: Droplet, label: 'Dryness' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-foreground mb-10">
          Common hair problems<br />you may experience
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-medium text-foreground">{problem.label}</p>
            </div>
          ))}
        </div>
        
        <p className="text-lg text-muted-foreground font-medium">
          We fix this every day.
        </p>
      </div>
    </section>
  );
};

export default HairProblems;
