import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Hammer, Building2, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Flipping",
    description:
      "We specialize in acquiring and transforming properties into stunning residences that exceed market expectations.",
  },
  {
    icon: Hammer,
    title: "Renovations & Additions",
    description:
      "Expert renovation services that modernize and enhance existing properties while maintaining their unique character.",
  },
  {
    icon: Building2,
    title: "Custom Home Builds",
    description:
      "From concept to completion, we create bespoke homes tailored to your vision and lifestyle needs.",
  },
  {
    icon: Users,
    title: "Investment Partnerships",
    description:
      "We align with like-minded investors and agents who share our vision for high-quality real estate investments.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm tracking-[0.2em] text-accent uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6">
            Comprehensive Development Solutions
          </h2>
          <p className="text-primary-foreground/70">
            From property flipping to custom builds, we offer a complete range 
            of development services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 border border-primary-foreground/10 hover:border-accent/50 transition-colors duration-500"
            >
              <div className="mb-6">
                <service.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-medium text-primary-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-foreground/70 mb-2">
            With a keen focus on delivering projects on time and within budget
          </p>
          <p className="text-lg text-primary-foreground font-display">
            Our experienced project managers ensure a smooth, hassle-free process.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
