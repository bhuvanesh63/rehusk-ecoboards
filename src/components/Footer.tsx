import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
        <Leaf className="w-5 h-5" />
        ReHusk
      </a>
      <p className="text-sm text-background/60">
        © {new Date().getFullYear()} ReHusk. Building sustainably from agricultural waste.
      </p>
      <div className="flex gap-6 text-sm text-background/60">
        <a href="#problem" className="hover:text-background transition-colors">About</a>
        <a href="#features" className="hover:text-background transition-colors">Product</a>
        <a href="#contact" className="hover:text-background transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
