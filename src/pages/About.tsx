
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import { CheckCircle, Users, Globe, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    values: false,
    stats: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.getElementById('mission-section');
      const valuesSection = document.getElementById('values-section');
      const statsSection = document.getElementById('stats-section');
      
      if (missionSection) {
        const top = missionSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, mission: top < window.innerHeight * 0.8 }));
      }
      
      if (valuesSection) {
        const top = valuesSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, values: top < window.innerHeight * 0.8 }));
      }
      
      if (statsSection) {
        const top = statsSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, stats: top < window.innerHeight * 0.8 }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <CheckCircle size={24} className="text-apex-orange" />,
      title: "Reliability",
      description: "We deliver on our promises, ensuring your packages arrive on time, every time."
    },
    {
      icon: <CheckCircle size={24} className="text-apex-orange" />,
      title: "Integrity",
      description: "We operate with honesty and transparency in all our business dealings."
    },
    {
      icon: <CheckCircle size={24} className="text-apex-orange" />,
      title: "Excellence",
      description: "We strive for the highest standards in every aspect of our service."
    },
    {
      icon: <CheckCircle size={24} className="text-apex-orange" />,
      title: "Innovation",
      description: "We continuously improve our processes and adopt new technologies."
    },
    {
      icon: <CheckCircle size={24} className="text-apex-orange" />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority, driving everything we do."
    },
    {
      icon: <CheckCircle size={24} className="text-apex-orange" />,
      title: "Global Perspective",
      description: "We think globally while acting locally to serve diverse markets."
    }
  ];

  const stats = [
    { icon: <Globe size={32} />, value: "25+", label: "Countries Served" },
    { icon: <Users size={32} />, value: "10k+", label: "Satisfied Customers" },
    { icon: <TrendingUp size={32} />, value: "5M+", label: "Parcels Delivered" },
    { icon: <Award size={32} />, value: "15+", label: "Years of Experience" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Who We Are & Our Mission" 
        subtitle="Delivering excellence in logistics and parcel services worldwide" 
        showCta={false}
      />

      {/* Mission Section */}
      <section id="mission-section" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isVisible.mission ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-apex-purple">Our Story</h2>
              <p className="text-gray-700 mb-5">
                Founded in 2008, Apex Worldwide Express began with a simple mission: to provide fast, reliable, and affordable shipping solutions that meet the highest standards of quality and customer service.
              </p>
              <p className="text-gray-700 mb-5">
                What started as a small local delivery service has grown into a global logistics company with operations in over 25 countries. Our success comes from our unwavering commitment to excellence and our ability to adapt to the changing needs of our customers.
              </p>
              <p className="text-gray-700">
                Today, we are proud to be a trusted partner for businesses of all sizes, from small e-commerce startups to large multinational corporations. Our comprehensive range of services is designed to provide end-to-end solutions for all your shipping and logistics needs.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1570193825743-0b2e757cd475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" 
                    alt="Apex Worldwide Express Operations" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-apex-orange rounded-full hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-apex-purple rounded-full hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values-section" className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide us in delivering exceptional service every day
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible.values ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft card-hover">
                <div className="flex items-start">
                  <div className="mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-apex-purple text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
            isVisible.stats ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-apex-orange">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <div className="text-xl md:text-2xl text-gray-700 italic mb-8">
            "To connect businesses and individuals globally through reliable, efficient, and innovative logistics solutions that exceed customer expectations."
          </div>
          <p className="text-gray-600">
            At Apex Worldwide Express, we are committed to being the most trusted partner in the logistics industry, providing services that empower our clients to focus on their core business while we handle their shipping needs with utmost care and professionalism.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
