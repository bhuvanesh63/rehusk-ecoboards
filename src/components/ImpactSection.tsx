import { TrendingUp, Users, Factory, Sprout } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Green Construction Market", value: "$774B", sub: "Expected by 2030" },
  { icon: Factory, label: "Micro-Manufacturing", value: "Near Rice Mills", sub: "Affordable & scalable" },
  { icon: Users, label: "Target Market", value: "Real Estate & Furniture", sub: "Developers & manufacturers" },
  { icon: Sprout, label: "Farmer Impact", value: "Income Growth", sub: "From waste to revenue" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">Vision & Impact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Building a Sustainable Future
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From reducing agricultural waste burning to increasing farmer income — ReHusk creates impact at every level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="font-medium text-foreground text-sm mb-1">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
