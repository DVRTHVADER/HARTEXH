import React from 'react';
    import { motion } from 'framer-motion';
    import { Card } from '@/components/ui/card';

    const IndustriesSection = ({ industriesServed }) => {
      return (
        <section id="industries" className="section-padding bg-background">
          <div className="container-custom">
            <motion.h2
              className="text-center mb-16 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Industries We <span className="text-primary">Empower</span>
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industriesServed.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center h-full">
                    <industry.Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default IndustriesSection;