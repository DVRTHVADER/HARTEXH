import React from 'react';
    import Header from '@/components/hartexh/Header';
    import HeroSection from '@/components/hartexh/HeroSection';
    import ServicesSection from '@/components/hartexh/ServicesSection';
    import IndustriesSection from '@/components/hartexh/IndustriesSection';
    import ApproachSection from '@/components/hartexh/ApproachSection';
    import TechStackSection from '@/components/hartexh/TechStackSection';
    import ContactSection from '@/components/hartexh/ContactSection';
    import Footer from '@/components/hartexh/Footer';
    import { coreServices, industriesServed, techStackLogos, navLinks } from '@/components/hartexh/data';


    const HartexhPage = () => {
      const scrollToSection = (id) => {
        const element = document.getElementById(id.substring(1));
        if (element) {
          const headerOffset = 80; 
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      };

      return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
          <Header navLinks={navLinks} scrollToSection={scrollToSection} />
          <main className="flex-grow">
            <HeroSection scrollToSection={scrollToSection} />
            <ServicesSection coreServices={coreServices} />
            <IndustriesSection industriesServed={industriesServed} />
            <ApproachSection />
            <TechStackSection techStackLogos={techStackLogos} />
            <ContactSection />
          </main>
          <Footer />
        </div>
      );
    };

    export default HartexhPage;