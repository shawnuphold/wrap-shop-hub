import { motion } from "framer-motion";
import { ArrowLeft, Sun, Clock, DollarSign, Car, FileCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import windowTint from "@/assets/window-tint.jpg";

const features = [
  {
    icon: Car,
    title: "Vehicle-Specific Quoting",
    description: "Quick quotes based on vehicle type, window count, and film grade. Get accurate pricing in seconds."
  },
  {
    icon: Clock,
    title: "Bay Scheduling",
    description: "Manage multiple install bays efficiently. See who's working on what and when slots open up."
  },
  {
    icon: DollarSign,
    title: "Film Cost Tracking",
    description: "Track material usage by job. Know your true cost per vehicle and protect your margins."
  },
  {
    icon: Sun,
    title: "Film Spec Documentation",
    description: "Record VLT%, IR rejection, and UV specs for every install. Customers love the documentation."
  },
  {
    icon: Zap,
    title: "Quick Turn Workflows",
    description: "Tint jobs move fast. FilmOps keeps up with rapid scheduling and same-day job completion tracking."
  },
  {
    icon: FileCheck,
    title: "Instant Approvals",
    description: "Send quotes via text or email. Customers approve with one tap—no login, no friction."
  }
];

const WindowTint = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={windowTint} alt="Window tint installation" className="w-full h-full object-cover" />
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
            <span className="text-primary font-medium mb-4 block">For Window Tint Shops</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Tint More Cars. <span className="text-gradient">Stress Less.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Fast-paced tint shops need fast tools. Manage quotes, scheduling, and customers without slowing down.
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
              Built for <span className="text-gradient">Tint Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Speed and simplicity for high-volume tint operations.
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
              Ready to Streamline Your Tint Shop?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join tint shops running more cars with less headaches.
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

export default WindowTint;
