import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
    className={`fixed top-0 left-0 right-0 z-50  ${
      isScrolled ? 'py-3 backdrop-blur-md bg-white' : 'py-5'
    }`}
  >
  
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Apex Worldwide Express" 
              className="h-10 md:h-12" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden  md:flex items-center space-x-8 text-apex-purple">
            <NavLink to="/" active={isActive('/')} isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')} isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/services" active={isActive('/services')} isScrolled={isScrolled}>Services</NavLink>
            <NavLink to="/tracking" active={isActive('/tracking')} isScrolled={isScrolled}>Tracking</NavLink>
            <NavLink to="/contact" active={isActive('/contact')} isScrolled={isScrolled}>Contact</NavLink>
            <button className="bg-apex-orange hover:bg-apex-orange/90 text-apex-purple px-5 py-2 rounded-full text-sm font-medium transition-colors">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden flex items-center justify-center p-1.5 rounded-md transition-colors ${
              isScrolled ? 'text-apex-purple hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-white/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="flex flex-col items-center pt-8 pb-8 space-y-6">
            <NavLink to="/" active={isActive('/')} isScrolled={true}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')} isScrolled={true}>About</NavLink>
            <NavLink to="/services" active={isActive('/services')} isScrolled={true}>Services</NavLink>
            <NavLink to="/tracking" active={isActive('/tracking')} isScrolled={true}>Tracking</NavLink>
            <NavLink to="/contact" active={isActive('/contact')} isScrolled={true}>Contact</NavLink>
            <button className="bg-apex-orange hover:bg-apex-orange/90 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, isScrolled, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative font-medium text-sm transition-colors duration-300 ${
        active 
          ? 'text-apex-orange' 
          : isScrolled
            ? 'text-apex-dark hover:text-apex-orange'
            : 'text-apex-purple hover:text-apex-orange'
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-apex-orange rounded-full animate-scale-in"></span>
      )}
    </Link>
  );
};

export default Navbar;
