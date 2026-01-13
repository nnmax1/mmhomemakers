import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-img.png";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="M&M luxury home example"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm tracking-[0.2em] text-accent uppercase mb-4">
              Welcome to M&M Homemakers
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Designer Built.
              <span className="text-gradient"> Home Inspired.</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a professional home builder, we specialize in developing properties, 
              meticulously investing into each home to deliver elevated, quality residences 
              to new buyers. Our commitment extends beyond just selling homes; we aim 
              to create living spaces that inspire and delight.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              At M&M Homemakers, we are an investment-driven residential development 
              company, dedicated to delivering exceptional living experiences. We comprehensively invest into each property, ensuring that each home not only meets 
              but surpasses expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
