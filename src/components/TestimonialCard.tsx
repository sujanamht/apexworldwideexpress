import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  quote: string;
}

const TestimonialCard = ({ name, position, image, quote }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
       
        <p className="text-gray-700 relative z-10 mb-6 italic">
          "{quote}"
        </p>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <img
          src="/profile.png"
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-3"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 