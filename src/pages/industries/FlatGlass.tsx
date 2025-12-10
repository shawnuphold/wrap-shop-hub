import { motion } from "framer-motion";
import { ArrowLeft, Building2, Ruler, DollarSign, ClipboardList, FileCheck, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import flatGlass from "@/assets/flat-glass.jpg";

const features = [
  {
    icon: Building2,
    title: "Commercial Bid Management",
    description: "Create detailed bids for commercial buildings. Track square footage, film specs, and labor estimates."
  },
  {
    icon: Ruler,
    title: "Window Measurement Tracking",
    description: "Document every window's dimensions. Generate accurate material orders and cut lists."
  },
  {
    icon: ClipboardList,
    title: "Multi-Phase Projects",
    description: "Large buildings take time. Track progress across floors, wings, and installation phases."
  },
  {
    icon: DollarSign,
    title: "Job Costing & Margins",
    description: "Commercial jobs have tight margins. Track every cost to ensure you hit your targets."
  },
  {
    icon: HardHat,
    title: "Crew Scheduling",
    description: "Coordinate installation crews across multiple job sites. Track hours and productivity."
  },
  {
    icon: FileCheck,
    title: "Documentation & Compliance",
    description: "Generate completion certificates and warranty documentation for property managers."
  }
];

const FlatGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={flatGlass} alt="Commercial flat glass installation" className="w-full h-full object-cover" />
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
            <span className="text-primary font-medium mb-4 block">For Flat Glass Professionals</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Commercial Film. <span className="text-gradient">Professional Management.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Bid, manage, and complete commercial window film projects with the precision your clients expect.
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
              Built for <span className="text-gradient">Commercial Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enterprise-grade project management for flat glass professionals.
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
              Ready to Win More Commercial Projects?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join flat glass pros delivering projects on time and on budget.
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

export default FlatGlass;
