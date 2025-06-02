import React from 'react';
    import { motion } from 'framer-motion';

    const ApproachSection = () => {
      return (
        <section id="approach" className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <motion.h2
              className="text-center mb-12 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Your Vision, Our <span className="text-background">Expertise</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img alt="Team collaborating on a project" className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video" src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="p-6 bg-background/10 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">You run the business. We run the backend.</h3>
                  <p className="text-primary-foreground/80">Focus on your core operations while we handle the complexities of technology, ensuring your digital infrastructure is robust, scalable, and secure.</p>
                </div>
                <div className="p-6 bg-background/10 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">From CAD to Cloud—engineering meets intelligence.</h3>
                  <p className="text-primary-foreground/80">We understand the journey from concept to deployment. Our engineering mindset, combined with AI and cloud expertise, delivers solutions that truly perform.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    export default ApproachSection;