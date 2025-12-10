import { motion } from "framer-motion";
import { Car, Shield, Sun, Signpost, Layers } from "lucide-react";
import ppfInstall from "@/assets/ppf-install.jpg";
import windowTint from "@/assets/window-tint.jpg";

const audiences = [
  { icon: Car, label: "Vehicle Wrap Shops" },
  { icon: Shield, label: "PPF Installers" },
  { icon: Sun, label: "Window Tint Shops" },
  { icon: Signpost, label: "Sign & Graphics Companies" },
  { icon: Layers, label: "Multi-Service Shops" },
];

const WhoItsForSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            Built for <span className="text-gradient">Your Shop</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you specialize in one service or do it all, FilmOps adapts to your workflow.
          </p>
        </motion.div>

        {/* Service Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img 
              src={ppfInstall} 
              alt="Professional PPF installation"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="glass px-4 py-2 rounded-full text-sm font-medium">
                Paint Protection Film
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img 
              src={windowTint} 
              alt="Professional window tinting"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="glass px-4 py-2 rounded-full text-sm font-medium">
                Window Tinting
              </span>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-full px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <audience.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{audience.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
