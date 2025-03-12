
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
}

const ServiceCard = ({ icon, title, description, imageSrc }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-soft group card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-8">
        <div className="mb-6 text-apex-orange">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-apex-purple transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="flex items-center text-apex-purple font-medium group">
          <span className="mr-2 group-hover:mr-3 transition-all">Learn More</span>
          <ArrowRight size={18} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
