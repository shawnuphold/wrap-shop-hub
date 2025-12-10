import { motion } from "framer-motion";
import { ArrowLeft, Wallpaper, Ruler, DollarSign, Users, FileCheck, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import wallWrap from "@/assets/wall-wrap.jpg";

const features = [
  {
    icon: Building,
    title: "Commercial Project Management",
    description: "Track multi-wall, multi-room installations. Manage complex commercial projects with ease."
  },
  {
    icon: Ruler,
    title: "Square Footage Tracking",
    description: "Calculate material needs based on wall dimensions. Account for waste and pattern matching."
  },
  {
    icon: Wallpaper,
    title: "Design Proof System",
    description: "Upload mockups and get client feedback with pinned comments. Revisions are crystal clear."
  },
  {
    icon: DollarSign,
    title: "Project Profitability",
    description: "Track labor, materials, and subcontractors. Know your margins before the install is done."
  },
  {
    icon: Users,
    title: "Crew Coordination",
    description: "Assign installers to jobs and track hours. Coordinate large installs across multiple days."
  },
  {
    icon: FileCheck,
    title: "Client Approval Workflow",
    description: "Get sign-off on designs and scope before work begins. Protect yourself with documented approvals."
  }
];

const WallWraps = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={wallWrap} alt="Wall wrap installation" className="w-full h-full object-cover" />
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
            <span className="text-primary font-medium mb-4 block">For Wall Wrap Installers</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Big Walls. <span className="text-gradient">Bigger Projects.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Manage commercial wall graphic projects from concept to completion. Keep crews, clients, and costs aligned.
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
              Built for <span className="text-gradient">Wall Wrap Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tools for managing large-format commercial installations.
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
              Ready to Scale Your Wall Wrap Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join installers managing bigger projects with better margins.
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

export default WallWraps;
