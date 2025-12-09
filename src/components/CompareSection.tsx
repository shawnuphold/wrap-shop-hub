import { motion } from "framer-motion";
import { Check, X, Minus, AlertTriangle, Clock, DollarSign, Shield, MousePointer, Sparkles, Users } from "lucide-react";

const comparisonData = [
  { feature: "Starting Price", filmops: "$79/mo", torqcrm: "~$397/mo", shopvox: "~$167/mo", tintwiz: "$100/mo", garagetool: "$100/mo" },
  { feature: "Per-User Fees", filmops: "None", torqcrm: "Unknown", shopvox: "$19-29/user", tintwiz: "None", garagetool: "$10/user" },
  { feature: "Per-Text Fees", filmops: "None (BYOT)", torqcrm: "$0.015/text", shopvox: "N/A", tintwiz: "N/A", garagetool: "N/A" },
  { feature: "Per-Email Fees", filmops: "None", torqcrm: "$0.004/email", shopvox: "N/A", tintwiz: "N/A", garagetool: "N/A" },
  { feature: "Proof Markup w/ Pinned Comments", filmops: true, torqcrm: false, shopvox: "Basic", tintwiz: false, garagetool: "Basic" },
  { feature: "Designer Role (No Pricing)", filmops: true, torqcrm: false, shopvox: false, tintwiz: false, garagetool: false },
  { feature: "Magic Links (No Client Login)", filmops: true, torqcrm: false, shopvox: false, tintwiz: false, garagetool: false },
  { feature: "Real-Time Job Costing", filmops: true, torqcrm: "Unknown", shopvox: true, tintwiz: false, garagetool: "Basic" },
  { feature: "Built for Wraps/PPF/Tint", filmops: true, torqcrm: true, shopvox: "Partial", tintwiz: "Tint focus", garagetool: true },
  { feature: "Vehicle Templates", filmops: true, torqcrm: "Unknown", shopvox: "Via smartWrap", tintwiz: false, garagetool: "15,000+" },
  { feature: "White-Label Platform", filmops: "No", torqcrm: "Yes (GHL)", shopvox: "No", tintwiz: "No", garagetool: "No" },
  { feature: "Setup Complexity", filmops: "Minutes", torqcrm: "Hours", shopvox: "8-12 weeks", tintwiz: "Minutes", garagetool: "Minutes" },
];

const competitors = [
  {
    name: "TorqCRM",
    price: "~$397/month + usage fees",
    reality: "White-labeled GoHighLevel ($297-497/mo base) resold with wrap-specific templates",
    fees: ["Per-text: $0.015", "Per-email: $0.004", "Per-voicemail: $0.05"],
    pros: ["Full marketing automation", "Funnel building capabilities"],
    cons: ["Generic CRM adapted for wraps", "Usage fees add up fast", "Complex setup process"],
    advantage: "Purpose-built, flat pricing, no hidden fees"
  },
  {
    name: "shopVOX",
    price: "~$167/month base ($2000/year for 5 users)",
    reality: "$19-29 per additional user, 8-12 weeks average setup time",
    fees: ["Per-user: $19-29/month"],
    pros: ["Comprehensive for sign shops", "Inventory management", "QuickBooks integration"],
    cons: ["Complex UI", "Steep learning curve", "Designed for print/sign shops first"],
    advantage: "Wrap-first design, simpler interface, faster setup"
  },
  {
    name: "Tint Wiz",
    price: "$100/month flat (unlimited users)",
    reality: "Focused primarily on window tint and PPF installations",
    fees: [],
    pros: ["Simple pricing", "Good for tint shops", "Inventory tracking"],
    cons: ["Limited wrap features", "No proof markup system", "Tint-focused only"],
    advantage: "Full wrap/sign support, proof approval with pinned comments"
  },
  {
    name: "GarageTool",
    price: "$100/month + $10/user/month",
    reality: "Vehicle template library focus with per-user pricing model",
    fees: ["Per-user: $10/month"],
    pros: ["15,000+ vehicle templates", "Wrap-focused", "QuickBooks integration"],
    cons: ["Per-user fees", "Basic proof system", "Limited designer controls"],
    advantage: "Designer role isolation, better proof markup, flat pricing"
  }
];

const differentiators = [
  { icon: DollarSign, title: "No Hidden Fees", description: "One price, unlimited texts/emails with your own Twilio" },
  { icon: Shield, title: "Designer-Safe", description: "Your team uploads proofs without seeing what you charge" },
  { icon: Users, title: "Client-First", description: "Magic links mean customers approve quotes and proofs without creating accounts" },
  { icon: MousePointer, title: "Pinned Comments", description: "Clients click exactly where they want changes, no confusion" },
  { icon: Sparkles, title: "Built by Shop Owners", description: "Not adapted from generic CRM or white-labeled software" },
];

const renderCellValue = (value: string | boolean) => {
  if (value === true) {
    return (
      <div className="w-7 h-7 rounded-full bg-success/20 flex items-center justify-center mx-auto">
        <Check className="w-4 h-4 text-success" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center mx-auto">
        <X className="w-4 h-4 text-destructive" />
      </div>
    );
  }
  if (value === "Unknown" || value === "N/A") {
    return (
      <div className="w-7 h-7 rounded-full bg-muted/40 flex items-center justify-center mx-auto">
        <Minus className="w-4 h-4 text-muted-foreground" />
      </div>
    );
  }
  return <span className="text-xs md:text-sm">{value}</span>;
};

const CompareSection = () => {
  return (
    <section id="compare" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Detailed Comparison
          </span>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            FilmOps vs <span className="text-gradient">The Competition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See exactly how FilmOps stacks up against every major player in the wrap shop software space.
          </p>
        </motion.div>

        {/* Full Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 overflow-x-auto"
        >
          <div className="glass rounded-xl overflow-hidden min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-2 p-4 md:p-6 border-b border-border bg-primary/5">
              <div className="font-medium text-muted-foreground text-sm">Feature</div>
              <div className="text-center">
                <span className="font-display text-lg md:text-xl text-gradient">FilmOps</span>
              </div>
              <div className="text-center">
                <span className="font-display text-lg md:text-xl text-muted-foreground">TorqCRM</span>
              </div>
              <div className="text-center">
                <span className="font-display text-lg md:text-xl text-muted-foreground">shopVOX</span>
              </div>
              <div className="text-center">
                <span className="font-display text-lg md:text-xl text-muted-foreground">Tint Wiz</span>
              </div>
              <div className="text-center">
                <span className="font-display text-lg md:text-xl text-muted-foreground">GarageTool</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-6 gap-2 p-4 md:p-6 items-center ${
                  index !== comparisonData.length - 1 ? "border-b border-border" : ""
                } ${index % 2 === 0 ? "bg-background/30" : ""}`}
              >
                <div className="text-xs md:text-sm font-medium">{row.feature}</div>
                <div className="text-center font-semibold text-primary">{renderCellValue(row.filmops)}</div>
                <div className="text-center text-muted-foreground">{renderCellValue(row.torqcrm)}</div>
                <div className="text-center text-muted-foreground">{renderCellValue(row.shopvox)}</div>
                <div className="text-center text-muted-foreground">{renderCellValue(row.tintwiz)}</div>
                <div className="text-center text-muted-foreground">{renderCellValue(row.garagetool)}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitor Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl mb-4">
            Competitor <span className="text-gradient">Deep Dive</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A closer look at what you're really getting with each platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-display text-2xl">{competitor.name}</h4>
                <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                  {competitor.price}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 italic">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-yellow-500" />
                {competitor.reality}
              </p>

              {competitor.fees.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hidden Fees:</p>
                  <div className="flex flex-wrap gap-2">
                    {competitor.fees.map((fee) => (
                      <span key={fee} className="px-2 py-1 rounded bg-destructive/10 text-destructive text-xs">
                        {fee}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pros:</p>
                  <ul className="space-y-1">
                    {competitor.pros.map((pro) => (
                      <li key={pro} className="text-sm flex items-start gap-2">
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Cons:</p>
                  <ul className="space-y-1">
                    {competitor.cons.map((con) => (
                      <li key={con} className="text-sm flex items-start gap-2">
                        <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs uppercase tracking-wider text-primary mb-1">FilmOps Advantage:</p>
                <p className="text-sm font-medium text-primary">{competitor.advantage}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why FilmOps is Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl mb-4">
              Why FilmOps is <span className="text-gradient">Different</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass rounded-xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-2xl font-serif">"</span>
            </div>
            <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-6">
              "We tried [competitor] for 6 months. The per-text fees alone were costing us $200/month on top of the subscription. FilmOps flat pricing saved us money and the proof system cut our revision emails in half."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">JD</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Shop Owner</p>
                <p className="text-xs text-muted-foreground">Vehicle Wrap Shop, TX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;
