import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { CheckCircle } from 'lucide-react';

    const ServicesSection = ({ coreServices }) => {
      return (
        <section id="services" className="section-padding bg-secondary/20">
          <div className="container-custom">
            <motion.h2
              className="text-center mb-16 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Our Core <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-3">
                        <service.Icon className="h-10 w-10 text-primary mr-4" />
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2 text-sm">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default ServicesSection;