import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Mail } from "lucide-react";
import filmopsLogo from "@/assets/filmops-logo.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img 
            src={filmopsLogo} 
            alt="FilmOps - CRM for Wrap, Tint & PPF Shops" 
            className="h-24 md:h-32 w-auto mb-4"
          />
          <p className="text-slate-500 text-lg md:text-xl font-body tracking-wide">
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
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a4a7a]/30 bg-[#1a4a7a]/10 text-[#1a4a7a] font-medium text-lg">
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
          <p className="text-slate-500 text-base mb-2">Expected Launch</p>
          <p className="text-4xl md:text-6xl font-display text-[#1a4a7a]">
            FEBRUARY 2026
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-body"
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
            className="inline-flex items-center gap-2 text-[#1a4a7a] hover:text-[#1a4a7a]/80 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            hello@filmops.io
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-slate-400 text-sm space-y-2"
        >
          <div className="flex items-center justify-center gap-4">
            <Link to="/privacy" className="hover:text-[#1a4a7a] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#1a4a7a] transition-colors">
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
