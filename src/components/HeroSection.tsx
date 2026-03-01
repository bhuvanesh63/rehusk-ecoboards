import { Button } from "@/components/ui/button";
import heroBoard from "@/assets/hero-board.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
            🌾 Sustainable Innovation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Sustainable Building Material from{" "}
            <span className="text-primary">Agricultural Waste</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Turning rice husk into durable, eco-friendly composite boards — a greener alternative to MDF and PVC.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#solution">Explore Product</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroBoard}
              alt="ReHusk composite board made from rice husk"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-lg">
            <p className="text-sm font-medium text-muted-foreground">Carbon footprint</p>
            <p className="text-2xl font-bold text-primary font-display">-40%</p>
            <p className="text-xs text-muted-foreground">vs traditional MDF</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
