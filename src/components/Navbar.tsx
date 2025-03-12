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
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white shadow-sm backdrop-blur-md' : 'py-5 '
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
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/tracking" active={isActive('/tracking')}>Tracking</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
            <button className="button-gradient px-5 py-2 rounded-full text-sm font-medium">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center p-1.5 text-apex-purple hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-white  z-40 animate-fade-in">
          <nav className="flex flex-col items-center bg-white  pt-8 pb-8 space-y-6">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/tracking" active={isActive('/tracking')}>Tracking</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
            <button className="button-gradient px-8 py-3 rounded-full text-sm font-medium mt-4">
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
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative font-medium text-sm transition-colors duration-300 ${
        active 
          ? 'text-apex-orange' 
          : 'text-apex-dark hover:text-apex-orange'
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
