import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="section-padding pt-32 md:pt-40 bg-background min-h-[80vh] md:min-h-screen flex items-center"
    >
      <div className="container-custom text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Build Smarter, Operate Faster, <br className="hidden md:block" />{" "}
            Scale <span className="text-primary">Confidently</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-8">
            At Hartexh, we bridge the gap between data, engineering, and cloud
            to empower small enterprises and startups with powerful, scalable
            technology solutions.
          </p>
          <p className="text-md md:text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-10">
            Founded by multidisciplinary engineers, we bring deep expertise in
            software development, data analysis, and cloud architecture to help
            businesses automate, optimize, and grow. Let’s build your digital
            backbone—from strategy to execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-md px-8 py-3 text-lg"
            >
              Schedule Discovery Session{" "}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="border-primary text-primary hover:bg-primary/5 shadow-md px-8 py-3 text-lg"
            >
              Explore Our Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
