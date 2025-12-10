import { motion } from "framer-motion";
import { Car, Shield, Sun, Signpost, Layers, Building2, Wallpaper } from "lucide-react";
import { Link } from "react-router-dom";
import ppfInstall from "@/assets/ppf-install.jpg";
import windowTint from "@/assets/window-tint.jpg";
import wallWrap from "@/assets/wall-wrap.jpg";
import flatGlass from "@/assets/flat-glass.jpg";

const audiences = [
  { icon: Car, label: "Vehicle Wrap Shops", href: "/industries/vehicle-wraps" },
  { icon: Shield, label: "PPF Installers", href: "/industries/ppf" },
  { icon: Sun, label: "Window Tint Shops", href: "/industries/window-tint" },
  { icon: Wallpaper, label: "Wall Wrap Installers", href: "/industries/wall-wraps" },
  { icon: Building2, label: "Flat Glass Pros", href: "/industries/flat-glass" },
  { icon: Signpost, label: "Sign & Graphics Companies", href: "/industries/sign-graphics" },
  { icon: Layers, label: "Multi-Service Shops", href: "/industries/multi-service" },
];

const services = [
  { image: ppfInstall, label: "Paint Protection Film", alt: "Professional PPF installation", href: "/industries/ppf" },
  { image: windowTint, label: "Automotive Tint", alt: "Professional window tinting", href: "/industries/window-tint" },
  { image: wallWrap, label: "Wall Wraps & Graphics", alt: "Commercial wall wrap installation", href: "/industries/wall-wraps" },
  { image: flatGlass, label: "Commercial Flat Glass", alt: "Commercial building window film", href: "/industries/flat-glass" },
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

        {/* Service Images Grid - 4 images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <Link to={service.href} key={service.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
                    {service.label}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {audiences.map((audience, index) => (
            <Link to={audience.href} key={audience.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-full px-5 py-3 flex items-center gap-2.5 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <audience.icon className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">{audience.label}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
