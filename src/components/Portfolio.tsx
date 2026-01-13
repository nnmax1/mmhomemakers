import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/667howard.jpg";
import project2 from "@/assets/520bennington.jpg";
import project3 from "@/assets/40godfrey.png";
import project4 from "@/assets/southvandien.png";

const projects = [
  {
    id: 1,
    title: "40 Godfrey Terrace",
    location: "Glen Rock, NJ",
    year: "2025 - Present",
    image: project3,
    status: "In Progress",
  },
  {
    id: 2,
    title: "667 Howard Rd",
    location: "Ridgewood, NJ",
    year: "2024",
    image: project1,
    status: "Completed",
  },
    {
    id: 3,
    title: "520 Bennington Terrace",
    location: "Ridgewood, NJ",
    year: "2023",
    image: project2,
    status: "Completed",
  },
  {
    id: 4,
    title: "318 S. Van Dien Ave",
    location: "Ridgewood, NJ",
    year: "2022",
    image: project4,
    status: "Completed",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-secondary">
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
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Discover our collection of properties 
            across New Jersey's most desirable neighborhoods.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="card-elevated">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
          
                
                  {/* Status Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs tracking-wider uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
