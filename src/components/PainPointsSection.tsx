import { motion } from "framer-motion";
import { AlertCircle, Clock, DollarSign, Eye } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "CRMs that don't get it",
    description: "Tired of software that doesn't understand your workflow?",
  },
  {
    icon: Clock,
    title: "Spreadsheet chaos",
    description: "Wasting time on spreadsheets and endless text threads?",
  },
  {
    icon: DollarSign,
    title: "Overpriced bloat",
    description: "Paying $400/month for software you barely use?",
  },
  {
    icon: Eye,
    title: "Privacy concerns",
    description: "Designers accidentally seeing job pricing?",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Sound <span className="text-gradient">Familiar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We built FilmOps because we faced these exact problems running our own shop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <point.icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
