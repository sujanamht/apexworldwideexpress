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
        title="About Us" 
        subtitle="Delivering excellence in logistics and parcel services worldwide" 
        showCta={false}
        fullHeight={false}
        backgroundImage="bg-[url('/slider2.jpeg')]"
      />

      {/* about Section */}
      <section id="mission-section" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isVisible.mission ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-apex-purple">APEX WORLDWIDE EXPRESS</h2>
              <p className="text-gray-700 mb-5 text-justify">
                Founded in 2008, Apex Worldwide Express began with a simple mission: to provide fast, reliable, and affordable shipping solutions that meet the highest standards of quality and customer service.
              </p>
              <p className="text-gray-700 mb-5 text-justify">
                What started as a small local delivery service has grown into a global logistics company with operations in over 25 countries. Our success comes from our unwavering commitment to excellence and our ability to adapt to the changing needs of our customers.
              </p>
              <p className="text-gray-700 text-justify">
                Today, we are proud to be a trusted partner for businesses of all sizes, from small e-commerce startups to large multinational corporations. Our comprehensive range of services is designed to provide end-to-end solutions for all your shipping and logistics needs.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="./public/about.png" 
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

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto ">
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Purpose</h2>
            
            <div className=" flex justify-between space-x-6">
              {/* Vision */}
              <div className="bg-white w-1/2 border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-7">
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                     
                      <div className="h-px flex-grow bg-apex-orange/20"></div> 
                      <h3 className="text-lg font-semibold text-apex-orange">Our Vision</h3>
                    </div>
                    <p className="text-gray-700 text-end">
                      Be Asia's leading Express & E-Commerce fulfilment provider.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-apex-orange/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-apex-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Mission */}
              <div className="bg-white w-1/2 border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-apex-purple/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-apex-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-apex-purple">Our Mission</h3>
                      <div className="h-px flex-grow bg-apex-purple/20"></div>
                    </div>
                    <p className="text-gray-700">
                      To constantly anticipate, innovate, interact & respond to customer needs and surpass expectations.
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
