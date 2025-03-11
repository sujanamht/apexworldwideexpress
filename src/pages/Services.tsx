
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { Package, Plane, Truck, Clock, Store, Warehouse, ShieldCheck, Clock3, HeadphonesIcon, BarChart3 } from 'lucide-react';

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
      icon: <Package size={40} />,
      title: "Domestic Shipping",
      description: "Reliable shipping solutions within the country with various delivery speed options, from standard to express, tailored to meet your specific timeframe and budget requirements."
    },
    {
      icon: <Plane size={40} />,
      title: "International Shipping",
      description: "Global shipping services with customs handling expertise, ensuring your packages clear international borders smoothly and arrive at their destinations on time."
    },
    {
      icon: <Truck size={40} />,
      title: "Same-Day Delivery",
      description: "Ultra-fast delivery service for urgent shipments, available in selected metropolitan areas, ideal for time-sensitive documents and packages."
    },
    {
      icon: <Store size={40} />,
      title: "E-Commerce Fulfillment",
      description: "Comprehensive order fulfillment solutions for online stores, including inventory management, pick and pack services, and seamless integration with major e-commerce platforms."
    },
    {
      icon: <Clock size={40} />,
      title: "Freight Services",
      description: "Specialized handling for large shipments via air, sea, and land transport options, with full tracking capabilities and insurance options for valuable cargo."
    },
    {
      icon: <Warehouse size={40} />,
      title: "Warehousing & Storage",
      description: "Secure, climate-controlled storage facilities with advanced inventory management systems to optimize your supply chain operations and reduce overhead costs."
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
        title="Our Comprehensive Services" 
        subtitle="Tailored logistics solutions to meet your shipping needs" 
        showCta={false}
      />

      {/* Services Grid */}
      <section className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Logistics Solutions</h2>
            <p className="text-lg text-gray-600">
              Explore our wide range of shipping and logistics services designed to meet your business needs
            </p>
          </div>

          <div 
            id="services-grid" 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate ${
              isVisible.services ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Customized Solution?</h2>
            <p className="text-lg mb-8 text-white/80">
              Contact our team of experts to discuss your specific logistics requirements
            </p>
            <a 
              href="/contact" 
              className="bg-white text-apex-purple px-8 py-3 rounded-full font-medium inline-block hover:bg-opacity-90 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
