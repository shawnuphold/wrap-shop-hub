import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-display text-gradient mb-4">
            FILMOPS
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-body tracking-wide">
            CRM Built for Wrap, Tint & PPF Shops
          </p>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-lg">
            <Calendar className="w-5 h-5" />
            Coming Soon
          </span>
        </motion.div>

        {/* Launch Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <p className="text-muted-foreground text-base mb-2">Expected Launch</p>
          <p className="text-4xl md:text-6xl font-display text-foreground">
            FEBRUARY 2026
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body"
        >
          Quotes, proofs, and jobs — all in one place. 
          <br className="hidden md:block" />
          Built by shop owners, for shop owners.
        </motion.p>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <a 
            href="mailto:hello@filmops.io" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            hello@filmops.io
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-muted-foreground/60 text-sm"
        >
          © 2025 FilmOps. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
};

export default Index;
