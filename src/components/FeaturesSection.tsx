import { Feather, Leaf, Flame, Droplets, Thermometer } from "lucide-react";

const features = [
  { icon: Feather, title: "30% Lighter", desc: "Significantly lighter than traditional MDF boards, reducing transport costs and easing installation." },
  { icon: Leaf, title: "40% Lower CO₂", desc: "Dramatically lower carbon footprint compared to conventional construction materials." },
  { icon: Flame, title: "Fire Resistant", desc: "Silica content from rice husk provides inherent fire resistance for safer buildings." },
  { icon: Droplets, title: "Moisture Resistant", desc: "Engineered to withstand humidity and moisture without swelling or warping." },
  { icon: Thermometer, title: "Thermal Insulation", desc: "Natural insulating properties help maintain comfortable indoor temperatures." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/70 font-medium">Product Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Built for Performance
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            ReHusk boards combine sustainability with superior engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
