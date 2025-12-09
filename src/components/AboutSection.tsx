import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Born from <span className="text-gradient">Frustration</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-xl p-8 md:p-12"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                FilmOps was born from frustration. After running a wrap shop and trying every 
                CRM out there, we realized none of them actually fit how shops work.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                We were paying hundreds of dollars a month for bloated software that required 
                constant workarounds. Designers could see pricing. Clients needed accounts just 
                to view a proof. Job costing was an afterthought.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                So we built our own—and now we are sharing it with the industry.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="font-display text-4xl text-gradient">500+</div>
                  <div className="text-muted-foreground text-sm">Active Shops</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-gradient">10K+</div>
                  <div className="text-muted-foreground text-sm">Jobs Tracked</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-gradient">$2M+</div>
                  <div className="text-muted-foreground text-sm">Revenue Managed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
