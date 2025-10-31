import { Wind, Zap, Droplet, AlertCircle, Scissors, TrendingDown } from 'lucide-react';
const HairProblems = () => {
  const problems = [{
    icon: Wind,
    label: 'Frizz'
  }, {
    icon: Zap,
    label: 'Damage'
  }, {
    icon: Droplet,
    label: 'Dryness'
  }, {
    icon: AlertCircle,
    label: 'Hairfall'
  }, {
    icon: Scissors,
    label: 'Breakage'
  }, {
    icon: TrendingDown,
    label: 'Hair Thinning'
  }];
  return <section className="py-16 px-4  lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center px-0">
        <h2 className="text-2xl sm:text-4xl font-playfair font-semibold text-foreground mb-10">
          Your Hair Has Stories<br />We Listen
        </h2>
        
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {problems.map((problem, index) => <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 animate-fade-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm sm:text-base font-medium text-foreground text-center">{problem.label}</p>
            </div>)}
        </div>
        
        <p className="text-lg text-muted-foreground font-medium">
          Let’s Solve It Together
        </p>
      </div>
    </section>;
};
export default HairProblems;