import { motion } from "framer-motion";
import { 
  MessageSquareMore, 
  EyeOff, 
  TrendingUp, 
  Link2, 
  Wallet, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: MessageSquareMore,
    title: "Proof Markup with Pinned Comments",
    description: "Clients click directly on the design to leave feedback. No more \"the thing on the left side\" confusion.",
    highlight: true,
  },
  {
    icon: EyeOff,
    title: "Designer-Safe Mode",
    description: "Your designers see jobs and upload proofs—but never see pricing, costs, or margins. Keep financials where they belong.",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Real-Time Job Costing",
    description: "Know your margins before the wrap hits the wall. Color-coded profit tracking (red/yellow/green) on every job.",
    highlight: false,
  },
  {
    icon: Link2,
    title: "Magic Links",
    description: "Clients view quotes and approve proofs without creating accounts. One click, done.",
    highlight: false,
  },
  {
    icon: Wallet,
    title: "Flat Monthly Pricing",
    description: "No per-text fees. No per-call charges. No surprises. Just one monthly price.",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Bring Your Own Twilio",
    description: "Connect your own Twilio account for SMS. You pay Twilio directly—we don't mark it up.",
    highlight: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            Built for <span className="text-gradient">How You Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature designed specifically for wrap shops, not adapted from generic software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                feature.highlight 
                  ? "bg-gradient-card border border-primary/30 shadow-glow" 
                  : "glass hover:border-primary/30"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                feature.highlight 
                  ? "bg-gradient-primary" 
                  : "bg-secondary group-hover:bg-primary/20"
              }`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.highlight 
                    ? "text-primary-foreground" 
                    : "text-primary"
                }`} />
              </div>
              <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
