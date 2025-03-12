import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ShieldCheck,
  Clock3,
  Headphones as HeadphonesIcon,
  BarChart3
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    benefits: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services-grid');
      const benefitsSection = document.getElementById('benefits-section');
      
      if (servicesSection) {
        const top = servicesSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, services: top < window.innerHeight * 0.8 }));
      }

      if (benefitsSection) {
        const top = benefitsSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, benefits: top < window.innerHeight * 0.8 }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Air Freight",
      description: "The most efficient way to move your goods.",
      image: "/service-img/s1.jpg"
    },
    {
      title: "Express Service",
      description: "Worldwide delivery for urgent documents, parcels, and freight.",
      image: "/service-img/s2.png"
    },
    {
      title: "Domestic Service",
      description: "Door-to-door domestic delivery service, secure and cost-effective.",
      image: "/service-img/s3.png"
    },
    {
      title: "Train Freight",
      description: "Delivering the right solutions for your logistics needs.",
      image: "/service-img/s4.jpg"
    },
    {
      title: "Customs Clearance",
      description: "Reliable customs clearance, timely delivery.",
      image: "/service-img/s5.jpg"
    },
    {
      title: "Warehouse Solutions",
      description: "Free up your space with our warehousing services.",
      image: "/service-img/s6.jpg"
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure Handling",
      description: "Your parcels are handled with utmost care, with security measures at every step of the delivery process."
    },
    {
      icon: <Clock3 size={24} />,
      title: "Time Efficiency",
      description: "Optimized routes and delivery processes to ensure your shipments arrive at their destination on time."
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: "Dedicated Support",
      description: "Our customer service team is available around the clock to address your concerns and questions."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to help you track and optimize your shipping operations."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Our Services" 
        subtitle="Tailored logistics solutions to meet your shipping needs" 
        showCta={false}
        fullHeight={false}
        backgroundImage="bg-[url('/slider.jpg')]"
      />

      {/* Services Grid */}
      <section className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
        

          <div 
            id="services-grid" 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate ${
              isVisible.services ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits-section" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-apex-purple">The Apex Advantage</h2>
              <p className="text-gray-700 mb-8">
                At Apex Worldwide Express, we go beyond just delivering packages. We provide comprehensive logistics solutions that add value to your business. Our services are designed to streamline your shipping processes, reduce costs, and improve customer satisfaction.
              </p>
              
              <div className={`space-y-6 ${isVisible.benefits ? 'animate-fade-in' : 'opacity-0'}`}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-apex-orange/10 flex items-center justify-center mr-4 text-apex-orange shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80" 
                  alt="Logistics Services" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-apex-orange/20 rounded-full hidden md:block"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-apex-purple/20 rounded-full hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-apex-purple text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Tailored Logistics Solution?</h2>
            <p className="text-lg mb-8 text-white/80">
              Contact our team of experts to discuss your specific logistics requirements
            </p>
            <Link 
              to="/contact" 
              className="bg-apex-orange text-white px-8 py-4 rounded-full font-medium inline-flex items-center hover:bg-apex-orange/90 hover:shadow-xl transition-all group"
            >
              <span className="mr-2">Request a Quote</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
