import { Flame, TreePine, Building } from "lucide-react";
import riceField from "@/assets/rice-field.png";

const problems = [
  {
    icon: Flame,
    title: "Rice Husk Burning",
    description: "Millions of tonnes of rice husk are burned annually, releasing harmful CO₂ and particulate matter into the atmosphere.",
  },
  {
    icon: TreePine,
    title: "Deforestation",
    description: "MDF production drives unsustainable logging, destroying critical forest ecosystems worldwide.",
  },
  {
    icon: Building,
    title: "Unsustainable Construction",
    description: "The construction industry urgently needs materials with lower environmental impact and carbon footprint.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">The Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why We Need a Change
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Current construction materials come at a massive environmental cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={riceField}
              alt="Rice paddy fields — the source of rice husk waste"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
