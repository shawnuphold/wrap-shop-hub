import { motion } from "framer-motion";
import { ArrowLeft, Palette, Clock, DollarSign, Users, FileCheck, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroWrap from "@/assets/hero-wrap.jpg";

const features = [
  {
    icon: Palette,
    title: "Design Proof Markup",
    description: "Clients click directly on wrap designs to leave pinned feedback. No more confusing email threads—just clear, visual communication."
  },
  {
    icon: Clock,
    title: "Production Scheduling",
    description: "Track print, laminate, and install phases. Know exactly where every wrap job stands in your workflow."
  },
  {
    icon: DollarSign,
    title: "Real-Time Job Costing",
    description: "Track material costs, labor hours, and margins on every wrap. Color-coded profit indicators show you what's making money."
  },
  {
    icon: Users,
    title: "Designer-Safe Mode",
    description: "Let your designers access jobs and upload proofs without ever seeing pricing, costs, or profit margins."
  },
  {
    icon: FileCheck,
    title: "Magic Link Approvals",
    description: "Send clients a link to view and approve designs—no account creation needed. Faster approvals, happier customers."
  },
  {
    icon: MessageSquare,
    title: "Client Communication Hub",
    description: "All messages, approvals, and revisions in one place. Never lose track of what a client asked for."
  }
];

const VehicleWraps = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroWrap} alt="Vehicle wrap installation" className="w-full h-full object-cover" />
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
            <span className="text-primary font-medium mb-4 block">For Vehicle Wrap Shops</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Run Your Wrap Shop <span className="text-gradient">Without the Chaos</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              From design approval to final install, FilmOps keeps your wrap projects organized, profitable, and on schedule.
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
              Built for <span className="text-gradient">Wrap Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every feature designed around how wrap shops actually work.
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
              Ready to Transform Your Wrap Shop?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of wrap shops running smoother operations with FilmOps.
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

export default VehicleWraps;
