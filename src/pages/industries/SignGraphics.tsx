import { motion } from "framer-motion";
import { ArrowLeft, Signpost, Palette, DollarSign, Truck, FileCheck, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroWrap from "@/assets/hero-wrap.jpg";

const features = [
  {
    icon: Palette,
    title: "Design Proof Workflow",
    description: "Upload designs, get client feedback with pinned comments, and track revisions—all in one place."
  },
  {
    icon: Layers,
    title: "Multi-Product Jobs",
    description: "Signs, banners, vehicle graphics, storefront lettering—manage diverse product mixes in single orders."
  },
  {
    icon: DollarSign,
    title: "Accurate Job Costing",
    description: "Track materials, print time, finishing, and installation labor. Know your margins on every job."
  },
  {
    icon: Truck,
    title: "Production & Install Scheduling",
    description: "Coordinate print production, finishing, and field installation teams seamlessly."
  },
  {
    icon: FileCheck,
    title: "Client Approvals",
    description: "Send proofs via Magic Links. Clients approve without creating accounts—faster turnarounds."
  },
  {
    icon: Signpost,
    title: "Project Documentation",
    description: "Keep photos, specs, and client communications organized for every sign project."
  }
];

const SignGraphics = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroWrap} alt="Sign and graphics installation" className="w-full h-full object-cover" />
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
            <span className="text-primary font-medium mb-4 block">For Sign & Graphics Companies</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Every Sign. <span className="text-gradient">Every Detail.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              From concept to installation, manage your sign and graphics projects with tools built for your workflow.
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
              Built for <span className="text-gradient">Sign Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Manage the complexity of sign and graphics production.
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
              Ready to Streamline Your Sign Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join sign companies delivering more projects with less chaos.
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

export default SignGraphics;
