
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft flex flex-col items-center text-center card-hover">
      <div className="w-16 h-16 rounded-full bg-apex-orange/10 flex items-center justify-center mb-5 text-apex-orange">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
