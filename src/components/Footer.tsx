import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-display text-3xl font-bold tracking-tight">
                M&M
              </span>
              <span className="text-xs tracking-[0.3em] text-primary-foreground/70 uppercase">
                Homemakers
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              At M&M Homemakers, we are committed to transforming the residential 
              landscape of New Jersey through innovative home building practices with 
              a focus on luxury living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="tel:2019144498" className="hover:text-primary-foreground transition-colors">
                  (201) 914-4498
                </a>
              </li>
              <li>
                <a href="mailto:info@peakdevelopersinc.com" className="hover:text-primary-foreground transition-colors">
                  mmhomemakersllc@gmail.com
                </a>
              </li>
              <li>New Jersey, USA</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} M&M Homemakers Inc. All rights reserved.
            </p>

     
  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
