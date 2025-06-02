import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const ContactSection = () => {
      return (
        <section id="contact" className="section-padding bg-background">
          <div className="container-custom text-center">
            <motion.h2
              className="mb-8 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Let's Build <span className="text-primary">Together</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to transform your business with cutting-edge technology? Schedule your free 30-minute discovery session today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-md px-10 py-4 text-xl">
                Schedule Free Session
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default ContactSection;