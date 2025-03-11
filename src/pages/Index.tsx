
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { Link } from 'react-router-dom';
import { Package, Plane, Truck, Clock, Store, Warehouse, CheckCircle, Timer, DollarSign, HeadphonesIcon } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    features: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services-section');
      const featuresSection = document.getElementById('features-section');
      const ctaSection = document.getElementById('cta-section');
      
      if (servicesSection) {
        const top = servicesSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, services: top < window.innerHeight * 0.8 }));
      }
      
      if (featuresSection) {
        const top = featuresSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, features: top < window.innerHeight * 0.8 }));
      }
      
      if (ctaSection) {
        const top = ctaSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, cta: top < window.innerHeight * 0.8 }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Package size={40} />,
      title: "Domestic Shipping",
      description: "Fast and reliable shipping services within the country, ensuring your packages arrive safely and on time."
    },
    {
      icon: <Plane size={40} />,
      title: "International Shipping",
      description: "Global shipping solutions connecting you to destinations worldwide with customs handling expertise."
    },
    {
      icon: <Truck size={40} />,
      title: "Same-Day Delivery",
      description: "Urgent shipping needs handled with our premium same-day delivery service in selected areas."
    },
    {
      icon: <Store size={40} />,
      title: "E-Commerce Fulfillment",
      description: "End-to-end fulfillment solutions designed specifically for online businesses and marketplaces."
    },
    {
      icon: <Clock size={40} />,
      title: "Freight Services",
      description: "Comprehensive freight handling for large shipments, with air, sea, and land transport options."
    },
    {
      icon: <Warehouse size={40} />,
      title: "Warehousing & Storage",
      description: "Secure storage facilities with inventory management systems to optimize your supply chain."
    }
  ];

  const features = [
    {
      icon: <CheckCircle size={24} />,
      title: "Fast & Secure Deliveries",
      description: "We prioritize speed without compromising on the security of your valuable shipments."
    },
    {
      icon: <Timer size={24} />,
      title: "Real-Time Tracking",
      description: "Know exactly where your package is with our advanced real-time tracking system."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Affordable Pricing",
      description: "Competitive rates with no hidden fees, providing excellent value for all shipping needs."
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always available to assist with your queries and concerns."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection 
        title="Fast, Secure, and Reliable Parcel Services" 
        subtitle="Delivering across the USA and beyond with speed & efficiency" 
      />

      {/* Services Section */}
      <section id="services-section" className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Logistics Solutions</h2>
            <p className="text-lg text-gray-600">
              Comprehensive shipping and logistics services tailored to meet your business needs
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate ${
            isVisible.services ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="button-gradient px-8 py-3 rounded-full font-medium inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="section-padding bg-soft-glow bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Apex Express</h2>
            <p className="text-lg text-gray-600">
              We stand out from the competition with our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animate ${
            isVisible.features ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-section" 
        className={`py-20 bg-apex-purple text-white ${
          isVisible.cta ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Apex Express?</h2>
            <p className="text-lg mb-8 text-white/80">
              Join thousands of satisfied customers who trust us with their shipping needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/tracking" 
                className="bg-white text-apex-purple px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Track Your Parcel
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-full font-medium border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
