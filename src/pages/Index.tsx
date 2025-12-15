import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Mail } from "lucide-react";
import filmopsLogo from "@/assets/filmops-logo.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d2847] via-[#1a4a7a] to-[#0d2847] flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/20 mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={filmopsLogo} 
              alt="FilmOps - CRM for Wrap, Tint & PPF Shops" 
              className="h-32 md:h-44 lg:h-56 w-auto"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/70 text-xl md:text-2xl font-body tracking-wide"
          >
            CRM Built for Wrap, Tint & PPF Shops
          </motion.p>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white font-semibold text-xl">
            <Calendar className="w-6 h-6" />
            Coming Soon
          </span>
        </motion.div>

        {/* Launch Date */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <p className="text-white/50 text-lg mb-3 uppercase tracking-widest font-medium">Expected Launch</p>
          <p className="text-5xl md:text-7xl lg:text-8xl font-display text-white tracking-tight">
            FEBRUARY 2026
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14"
        >
          <p className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto font-body leading-relaxed">
            Quotes, proofs, and jobs — all in one place. 
            <br className="hidden md:block" />
            <span className="text-white font-medium">Built by shop owners, for shop owners.</span>
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-14"
        >
          <a 
            href="mailto:hello@filmops.io" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a4a7a] rounded-full font-medium text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg shadow-black/20"
          >
            <Mail className="w-5 h-5" />
            hello@filmops.io
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-white/40 text-sm space-y-3"
        >
          <div className="flex items-center justify-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>© 2025 FilmOps. All rights reserved.</p>
        </motion.div>
      </div>
    </main>
  );
};

export default Index;
