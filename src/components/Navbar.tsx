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
      style={{
        width: '800px'
      }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/95 backdrop-blur-md border border-border translate-y-0 opacity-100 transition-all duration-[3000ms] ease-in-out ${
        activeDropdown ? "rounded-[2.2rem]" : "rounded-full"
      }`}
    >
      <div className="px-6 sm:px-8 py-2">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div 
            className="cursor-pointer flex-shrink-0"
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo.webp" 
              alt="HoneyBadger Charging" 
              className="h-10 sm:h-12 w-auto object-contain mt-1.5"
              style={{ width: '140px' }}
            />
          </div>
          
          {/* Center Content: Navigation + Actions */}
          <div className="hidden md:flex items-center gap-8">
            {/* Center Navigation */}
            <div className="flex items-center gap-4 lg:gap-8">
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
            
            {/* Right Actions */}
            <div className="flex items-center gap-1 flex-shrink-0">
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
        </div>

        {/* Mega Dropdown Content - Integrated Extension */}
        <div className={`overflow-hidden transition-[max-height] ease-out ${
          activeDropdown ? 'max-h-96 duration-500' : 'max-h-0 duration-200'
        }`} style={{transitionDelay: activeDropdown ? '300ms' : '0ms'}}>
          <div className={`${
            activeDropdown ? 'border-t border-border/50 mt-4' : ''
          }`}>
            <div 
              className={`transition-all duration-200 ${
                activeDropdown ? 'pt-6 pb-4' : 'pt-0 pb-0'
              }`}
              style={{
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
                {activeDropdown === 'drivers' && (
                  <div className="grid grid-cols-3 gap-6" style={{ width: '100%', maxWidth: '100%' }}>
                    <button
                      className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                      onClick={() => navigate('/find-charger')}
                    >
                      <div>
                        <div className="font-medium text-lg mb-2">Find a Charger</div>
                        <div className="text-sm text-muted-foreground">Locate charging stations near you</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Mobile App</div>
                        <div className="text-sm text-muted-foreground">Download our iOS and Android app</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Charging Guide</div>
                        <div className="text-sm text-muted-foreground">Learn how to charge your EV</div>
                      </div>
                    </button>
                  </div>
                )}
                
                {activeDropdown === 'partners' && (
                  <div className="grid grid-cols-3 gap-6" style={{ width: '100%', maxWidth: '100%' }}>
                    <button
                      className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                      onClick={() => navigate('/host-charger')}
                    >
                      <div>
                        <div className="font-medium text-lg mb-2">Host a Charger</div>
                        <div className="text-sm text-muted-foreground">Earn revenue with charging stations</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Property Solutions</div>
                        <div className="text-sm text-muted-foreground">Commercial and residential options</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Fleet Solutions</div>
                        <div className="text-sm text-muted-foreground">Enterprise charging infrastructure</div>
                      </div>
                    </button>
                  </div>
                )}
                
                {activeDropdown === 'about' && (
                  <div className="grid grid-cols-2 gap-6" style={{ width: '100%', maxWidth: '100%' }}>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Mission</div>
                        <div className="text-sm text-muted-foreground">Our commitment to clean energy</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Careers</div>
                        <div className="text-sm text-muted-foreground">Join our growing team</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">Contact Us</div>
                        <div className="text-sm text-muted-foreground">Get in touch with our team</div>
                      </div>
                    </button>
                    <button className="flex items-start text-left p-4 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50">
                      <div>
                        <div className="font-medium text-lg mb-2">News</div>
                        <div className="text-sm text-muted-foreground">Media inquiries and resources</div>
                      </div>
                    </button>
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
