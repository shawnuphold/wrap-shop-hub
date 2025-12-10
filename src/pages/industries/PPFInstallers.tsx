import { motion } from "framer-motion";
import { ArrowLeft, Shield, Ruler, DollarSign, Camera, FileCheck, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ppfInstall from "@/assets/ppf-install.jpg";

const features = [
  {
    icon: Ruler,
    title: "Pattern & Coverage Tracking",
    description: "Track full front, partial, or custom coverage packages. Know exactly what was quoted vs. what's being installed."
  },
  {
    icon: DollarSign,
    title: "Precise Job Costing",
    description: "PPF material isn't cheap. Track film usage, waste, and labor to ensure every job hits your target margins."
  },
  {
    icon: Camera,
    title: "Before/After Documentation",
    description: "Capture and organize install photos for quality assurance and customer records. Build your portfolio automatically."
  },
  {
    icon: Shield,
    title: "Warranty Management",
    description: "Track manufacturer warranties and your shop guarantees. Never lose track of coverage details."
  },
  {
    icon: FileCheck,
    title: "Digital Quotes & Approvals",
    description: "Send professional quotes with package options. Clients approve with one click—no account needed."
  },
  {
    icon: Package,
    title: "Inventory Awareness",
    description: "Know what film rolls you have on hand. Never get caught short on a job or over-order materials."
  }
];

const PPFInstallers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={ppfInstall} alt="PPF installation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-medium mb-4 block">For PPF Installers</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Protect Cars. <span className="text-gradient">Protect Profits.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Manage your PPF business with precision—from quote to cure. Track materials, margins, and warranties effortlessly.
            </p>
            <Button size="lg" className="rounded-full">
              Start Free Trial
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl mb-4">
              Built for <span className="text-gradient">PPF Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tools designed for the precision and professionalism PPF work demands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Ready to Level Up Your PPF Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join PPF installers who've streamlined their operations with FilmOps.
            </p>
            <Button size="lg" className="rounded-full">
              Get Started Free
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PPFInstallers;
