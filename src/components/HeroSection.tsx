
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {subtitle}
          </p>
          
          {showCta && (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-300">
              <Link 
                to="/tracking" 
                className="button-gradient px-8 py-3 rounded-full font-medium min-w-[180px] hover:shadow-xl"
              >
                Track Your Parcel
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-full font-medium border-2 border-white text-white hover:bg-white/10 transition-colors duration-300 min-w-[180px]"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Scroll down indicator */}
      {fullHeight && (
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-float cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </button>
      )}
    </div>
  );
};

export default HeroSection;
