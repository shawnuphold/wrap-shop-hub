import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$79",
    users: "1-2 users",
    popular: false,
  },
  {
    name: "Pro",
    price: "$149",
    users: "Up to 5 users",
    popular: true,
  },
  {
    name: "Business",
    price: "$249",
    users: "Up to 15 users",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$399",
    users: "Unlimited users",
    popular: false,
  },
];

const features = [
  "Full feature access",
  "Proof markup & comments",
  "Designer-safe mode",
  "Real-time job costing",
  "Magic links",
  "Bring your own Twilio",
  "Priority support",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Simple Pricing
          </span>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            One Price. <span className="text-gradient">All Features.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No usage fees. No hidden charges. No per-text or per-call pricing. Just pick your team size.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? "bg-gradient-card border-2 border-primary shadow-glow scale-105" 
                  : "glass hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="font-display text-5xl text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{plan.users}</p>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Features Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl text-center mb-6">
            All Plans Include
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            14-day free trial on all plans. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
