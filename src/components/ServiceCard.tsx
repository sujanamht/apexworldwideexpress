import { useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative h-[380px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with Glass Effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden backdrop-blur-sm">
        {imageSrc && (
          <>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Gradient Overlays */}
            <div className={`absolute inset-0 transition-all duration-500 bg-black/60 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`} />
            <div className={`absolute inset-0 transition-all duration-500 bg-apex-purple/70 backdrop-blur-[2px] ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end overflow-hidden">
              {/* Title Container */}
              <div className={`transform transition-all duration-500 ${
                isHovered ? 'translate-y-0' : 'translate-y-0'
              }`}>
                <h3 className={`text-3xl font-bold text-white transition-all duration-500 ${
                  isHovered ? 'mb-4 -translate-y-8 scale-90' : 'mb-0'
                }`}>
                  {title}
                </h3>
                
                {/* Description with Slide Animation */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isHovered ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className={`text-white/90 text-lg leading-relaxed transform transition-all duration-500 ${
                    isHovered ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Decorative Elements */}
      <div className={`absolute -bottom-2 left-4 right-4 h-1 bg-white/20 rounded-full transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
      }`} />
      <div className={`absolute top-4 left-4 w-2 h-2 rounded-full bg-white/50 transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`} />
      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-white/50 transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`} />
    </div>
  );
};

export default ServiceCard;
