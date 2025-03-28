import { ChevronDown, Package, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
  fullHeight?: boolean;
  backgroundImage?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  showCta = true, 
  fullHeight = true,
  backgroundImage = 'bg-hero-pattern'
}: HeroSectionProps) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  
  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber) {
      window.location.href = `/tracking?number=${trackingNumber}`;
    }
  };

  const scrollToContent = () => {
    // Scroll to the next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div 
      className={`relative ${backgroundImage} bg-cover bg-center ${
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]'
      } flex items-center justify-center`}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(56, 22, 77, 0.8)' }}></div>
      
      <div className="container text-center mx-auto px-4 md:px-6 relative z-10">
       
          <div className="text-center ">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl lg:max-w-none mx-auto animate-fade-in animation-delay-200">
              {subtitle}
            </p>
            
            {/* {showCta && (  for home page only */}
              <div className="flex flex-col sm:flex-row items-center  justify-center  space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-300">
                <Link 
                  to="/tracking" 
                  className="bg-[#E49210] text-white px-8 py-1.5 rounded-lg font-medium min-w-[180px] hover:bg-[#d18510] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Package size={20} />
                  Track Your Package
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-1.5 rounded-lg font-medium bg-white hover:bg-white/10 transition-colors duration-300 min-w-[180px] flex items-center justify-center gap-2"
                >
                  <Truck size={20} />
                  Get a Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
            {/* )} */}
          </div>

          
      </div>

      {/* Scroll down indicator */}
      {fullHeight && (
        <button 
          onClick={scrollToContent}
          className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-float cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </button>
      )}
    </div>
  );
};

export default HeroSection;
