import React from 'react';
    import { motion } from 'framer-motion';

    const TechStackSection = ({ techStackLogos }) => {
      const duplicatedTechStackLogos = [...techStackLogos, ...techStackLogos];
      return (
        <section id="tech-stack" className="section-padding bg-secondary/20 overflow-hidden">
          <div className="container-custom">
            <motion.h2
              className="text-center mb-12 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Technologies We <span className="text-primary">Master</span>
            </motion.h2>
          </div>
          <div className="relative w-full">
            <motion.div
              className="scrolling-wrapper flex items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 60, // Adjust for speed, higher is slower
                repeat: Infinity,
              }}
            >
              {duplicatedTechStackLogos.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="flex flex-col items-center justify-center p-4 mx-4 md:mx-8 w-28 h-28 md:w-36 md:h-36 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <tech.Icon className="h-10 w-10 md:h-14 md:w-14 text-primary mb-2" />
                  <p className="text-xs md:text-sm text-muted-foreground font-medium text-center">{tech.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      );
    };

    export default TechStackSection;