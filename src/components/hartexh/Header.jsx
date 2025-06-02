import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = ({ navLinks, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleGetInTouchClick = () => {
    scrollToSection("#contact");
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        headerScrolled
          ? "bg-background/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom h-20 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleNavLinkClick(e, "#hero")}
          className="text-3xl font-extrabold"
        >
          HTX<span className="text-primary"></span>
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={handleGetInTouchClick}
            className="ml-4 bg-primary text-primary-foreground hover:bg-primary/80"
          >
            Get In Touch
          </Button>
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-xl pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium text-center"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={handleGetInTouchClick}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/80 mt-2 py-3"
            >
              Get In Touch
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
