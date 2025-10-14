import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Animated Energy Lines at Top */}
      <div className="absolute top-0 left-0 w-full h-px">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/logo.webp" 
                alt="HoneyBadger Charging" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-foreground leading-relaxed">
              Zero-cost EV charging solutions that power the future.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Drivers */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Drivers</h3>
            <ul className="space-y-3">
              <li>
                <a href="/find-charger" className="text-foreground hover:text-primary transition-colors">
                  Find a Charger
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Charging Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Partners</h3>
            <ul className="space-y-3">
              <li>
                <a href="/host-charger" className="text-foreground hover:text-primary transition-colors">
                  Host a Charger
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Property Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Fleet Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">Office</p>
                  <a href="tel:+12364800827" className="text-foreground hover:text-primary transition-colors font-medium">
                    (236) 480-0827
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">Support</p>
                  <a href="tel:+18778360242" className="text-foreground hover:text-primary transition-colors font-medium">
                    (877) 836-0242
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">Email</p>
                  <a href="mailto:support@badgercharging.ca" className="text-foreground hover:text-primary transition-colors font-medium">
                    support@badgercharging.ca
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">Location</p>
                  <p className="text-foreground">
                    Vancouver, BC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-border space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-foreground">
            <p>&copy; {currentYear} HoneyBadger Charging. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-foreground">
            <span>Powered by clean energy</span>
            <Zap className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </footer>
  );
};
