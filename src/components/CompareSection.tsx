import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Purpose-built for wrap shops", filmops: true, competitor: false },
  { feature: "Flat monthly pricing", filmops: true, competitor: false },
  { feature: "No per-text/call fees", filmops: true, competitor: false },
  { feature: "You own your data", filmops: true, competitor: false },
  { feature: "Designer-safe mode", filmops: true, competitor: false },
  { feature: "White-labeled GoHighLevel", filmops: false, competitor: true },
  { feature: "Starts at $397/mo + usage", filmops: false, competitor: true },
];

const CompareSection = () => {
  return (
    <section id="compare" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Comparison
          </span>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            FilmOps vs <span className="text-gradient">The Other Guys</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See why shops are switching from expensive, generic CRMs to FilmOps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-border">
              <div className="font-medium text-muted-foreground">Feature</div>
              <div className="text-center">
                <span className="font-display text-2xl text-gradient">FilmOps</span>
              </div>
              <div className="text-center">
                <span className="font-display text-2xl text-muted-foreground">TorqCRM</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-6 items-center ${
                  index !== comparisons.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm md:text-base">{row.feature}</div>
                <div className="flex justify-center">
                  {row.filmops ? (
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.competitor ? (
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;
