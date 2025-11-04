import stylistMonica from '@/assets/monica.jpg';
import stylistShehzad from '@/assets/sadzam.png';
const Stylists = () => {
  const stylists = [{
    name: 'Monica',
    role: 'Owner',
    description: 'Mastering every detail of the experience',
    image: stylistMonica
  }, {
    name: 'Shehzad',
    role: 'Lead Stylist',
    description: 'Dubai-trained, problem-solver extraordinaire, creative cuts.',
    image: stylistShehzad
  }];
  return <section id="stylists" className="py-20 px-4  lg:px-8">
      <div className=" max-w-4xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            The people behind<br />all this attention
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {stylists.map((stylist, index) => <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-center animate-fade-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={stylist.image} alt={`${stylist.name} - ${stylist.role}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
                  {stylist.name}
                </h3>
                
                <p className="text-primary font-medium mb-2 text-sm">{stylist.role}</p>
                
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {stylist.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Stylists;