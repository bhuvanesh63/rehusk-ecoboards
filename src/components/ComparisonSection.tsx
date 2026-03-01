import { Check, X, Minus } from "lucide-react";

type Rating = "good" | "bad" | "mid";

interface Row {
  feature: string;
  rehusk: Rating;
  mdf: Rating;
  pvc: Rating;
}

const rows: Row[] = [
  { feature: "Eco-Friendly", rehusk: "good", mdf: "bad", pvc: "bad" },
  { feature: "Lightweight", rehusk: "good", mdf: "bad", pvc: "mid" },
  { feature: "Fire Resistant", rehusk: "good", mdf: "bad", pvc: "bad" },
  { feature: "Moisture Resistant", rehusk: "good", mdf: "bad", pvc: "good" },
  { feature: "Thermal Insulation", rehusk: "good", mdf: "mid", pvc: "bad" },
  { feature: "Low Carbon Footprint", rehusk: "good", mdf: "bad", pvc: "bad" },
  { feature: "Recyclable", rehusk: "good", mdf: "mid", pvc: "mid" },
];

const Icon = ({ rating }: { rating: Rating }) => {
  if (rating === "good") return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (rating === "bad") return <X className="w-5 h-5 text-destructive mx-auto" />;
  return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
};

const ComparisonSection = () => {
  return (
    <section id="comparison" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">Comparison</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ReHusk vs The Rest
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-6 py-4 font-medium">Feature</th>
                <th className="px-6 py-4 font-bold">ReHusk</th>
                <th className="px-6 py-4 font-medium">MDF</th>
                <th className="px-6 py-4 font-medium">PVC</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                  <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                  <td className="px-6 py-4"><Icon rating={row.rehusk} /></td>
                  <td className="px-6 py-4"><Icon rating={row.mdf} /></td>
                  <td className="px-6 py-4"><Icon rating={row.pvc} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
