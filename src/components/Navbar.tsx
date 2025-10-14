import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { LanguageSelect } from "@/components/ui/language-select";
import SearchDialog from "@/components/ui/search-dialog";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      if (scrolled && !isHovered) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  // Initial expansion
  useEffect(() => {
    if (!isScrolled) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isScrolled]);

  return (
    <nav 
      onMouseEnter={() => {
        setIsHovered(true);
        setIsExpanded(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveDropdown(null);
        if (isScrolled) {
          setIsExpanded(false);
        }
      }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/95 backdrop-blur-md border border-border translate-y-0 opacity-100 transition-[width,max-width] duration-700 ease-out ${
        activeDropdown ? "rounded-[2.2rem]" : "rounded-full"
      } ${
        isExpanded || activeDropdown ? "max-w-4xl w-[calc(100%-6rem)]" : "max-w-2xl w-auto"
      }`}
    >
      <div className="px-6 sm:px-8 py-2">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Logo - Animated expansion */}
          <div 
            className={`flex-shrink-0 cursor-pointer transition-all duration-500 ease-out overflow-hidden ${
              isExpanded ? "w-[140px] sm:w-[160px] opacity-100" : "w-0 opacity-0"
            }`}
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo.webp" 
              alt="HoneyBadger Charging" 
              className="h-10 sm:h-12 w-auto object-contain mt-1.5"
            />
          </div>
          
          {/* Navigation - Center aligned with flex-grow */}
          <div className="hidden md:flex flex-grow items-center justify-center gap-4 lg:gap-8 max-w-2xl relative">
            {/* Drivers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('drivers')}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors whitespace-nowrap text-lg">
                Drivers
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'drivers' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
            </div>

            {/* Partners Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('partners')}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors whitespace-nowrap text-lg">
                Partners
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'partners' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors whitespace-nowrap text-lg">
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'about' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
            </div>

            <Button size="sm" className="whitespace-nowrap rounded-full">
              Become a Partner
            </Button>
          </div>

          {/* Right Actions - Language, Search, CTA */}
          <div className={`flex-shrink-0 hidden md:flex items-center gap-2 transition-all duration-500 ease-out overflow-hidden ${
            isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}>
            <LanguageSelect className="text-foreground hover:text-primary transition-colors" />
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega Dropdown Content - Integrated Extension */}
        <div className={`overflow-hidden transition-[max-height] ease-out ${
          activeDropdown ? 'max-h-96 duration-500' : 'max-h-0 duration-200'
        }`} style={{transitionDelay: activeDropdown ? '300ms' : '0ms'}}>
          <div className={`${
            activeDropdown ? 'border-t border-border/50 mt-4' : ''
          }`}>
              <div className={`transition-all duration-200 ${
                activeDropdown ? 'pt-6 pb-4' : 'pt-0 pb-0'
              }`}>
                {activeDropdown === 'drivers' && (
                  <div className="grid grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">For Drivers</h3>
                      <button
                        className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                        onClick={() => navigate('/find-charger')}
                      >
                        <div>
                          <div className="font-medium">Find a Charger</div>
                          <div className="text-sm text-muted-foreground">Locate charging stations near you</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Mobile App</div>
                          <div className="text-sm text-muted-foreground">Download our iOS and Android app</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Charging Guide</div>
                          <div className="text-sm text-muted-foreground">Learn how to charge your EV</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Documentation</div>
                          <div className="text-sm text-muted-foreground">Technical guides and docs</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Community</div>
                          <div className="text-sm text-muted-foreground">Join our community forums</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Help Center</div>
                          <div className="text-sm text-muted-foreground">Get help and support</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">24/7 Support</div>
                          <div className="text-sm text-muted-foreground">Round-the-clock assistance</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
                
                {activeDropdown === 'partners' && (
                  <div className="grid grid-cols-4 gap-8">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">For Partners</h3>
                      <button
                        className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                        onClick={() => navigate('/host-charger')}
                      >
                        <div>
                          <div className="font-medium">Host a Charger</div>
                          <div className="text-sm text-muted-foreground">Earn revenue with charging stations</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Property Solutions</div>
                          <div className="text-sm text-muted-foreground">Commercial and residential options</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Fleet Solutions</div>
                          <div className="text-sm text-muted-foreground">Enterprise charging infrastructure</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Properties</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Condos & Apartments</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Workplaces</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Public & Retail</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Golf Courses</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Hotels</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Business Types</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Retail & Shopping</div>
                          <div className="text-sm text-muted-foreground">Malls, stores, and shopping centers</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Hospitality</div>
                          <div className="text-sm text-muted-foreground">Hotels, restaurants, and venues</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Partner Portal</div>
                          <div className="text-sm text-muted-foreground">Manage your partnership</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Installation Support</div>
                          <div className="text-sm text-muted-foreground">End-to-end installation help</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
                
                {activeDropdown === 'about' && (
                  <div className="grid grid-cols-4 gap-8">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">About HoneyBadger</h3>
                      <button
                        className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                        onClick={() => navigate('/blog')}
                      >
                        <div>
                          <div className="font-medium">Our Story</div>
                          <div className="text-sm text-muted-foreground">Learn about our mission and vision</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Team</div>
                          <div className="text-sm text-muted-foreground">Meet the people behind HoneyBadger</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Mission</div>
                          <div className="text-sm text-muted-foreground">Our commitment to clean energy</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">News</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Latest News</div>
                          <div className="text-sm text-muted-foreground">Company updates and announcements</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Press Releases</div>
                          <div className="text-sm text-muted-foreground">Official company statements</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Industry Insights</div>
                          <div className="text-sm text-muted-foreground">EV charging industry trends</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Careers</div>
                          <div className="text-sm text-muted-foreground">Join our growing team</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Contact Us</div>
                          <div className="text-sm text-muted-foreground">Get in touch with our team</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Press & Media</div>
                          <div className="text-sm text-muted-foreground">Media inquiries and resources</div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Help Center</div>
                          <div className="text-sm text-muted-foreground">FAQs and support articles</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">Contact Support</div>
                          <div className="text-sm text-muted-foreground">Get help from our team</div>
                        </div>
                      </button>
                      <button className="flex items-start w-full text-left p-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                        <div>
                          <div className="font-medium">System Status</div>
                          <div className="text-sm text-muted-foreground">Network status and updates</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
      
      {/* Search Dialog */}
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </nav>
  );
};
