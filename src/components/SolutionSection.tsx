const composition = [
  { label: "Recycled Polymer", pct: 50, color: "bg-primary" },
  { label: "Biopolymer Binder", pct: 30, color: "bg-accent" },
  { label: "Rice Husk Fiber", pct: 15, color: "bg-earth" },
  { label: "Additives", pct: 5, color: "bg-muted-foreground" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">The Solution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ReHusk Composite Board
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            An eco-friendly alternative to MDF and PVC, engineered from agricultural waste and recycled materials.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">Material Composition</h3>

          <div className="space-y-5">
            {composition.map((c) => (
              <div key={c.label} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-foreground">{c.label}</span>
                  <span className="text-muted-foreground">{c.pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full ${c.color} transition-all duration-1000`}
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
