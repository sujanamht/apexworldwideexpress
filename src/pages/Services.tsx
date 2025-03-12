
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Package, 
  Truck, 
  Train, 
  Container, 
  Warehouse,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState({
    services: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services-grid');
      
      if (servicesSection) {
        const top = servicesSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, services: top < window.innerHeight * 0.8 }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Plane size={40} />,
      title: "Air Freight",
      description: "The most efficient way to move your goods.",
      image: "https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Package size={40} />,
      title: "Express Service",
      description: "Worldwide delivery for urgent documents, parcels, and freight.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Truck size={40} />,
      title: "Domestic Service",
      description: "Door-to-door domestic delivery service, secure and cost-effective.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Train size={40} />,
      title: "Train Freight",
      description: "Delivering the right solutions for your logistics needs.",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Container size={40} />,
      title: "Customs Clearance",
      description: "Reliable customs clearance, timely delivery.",
      image: "https://images.unsplash.com/photo-1494412574096-a33b48fcb357?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Warehouse size={40} />,
      title: "Warehouse Solutions",
      description: "Free up your space with our warehousing services.",
      image: "https://images.unsplash.com/photo-1586528116493-ce4c8cd61c01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Comprehensive Logistics & Freight Solutions" 
        subtitle="Efficient, Reliable, and Secure Shipping Across the Globe" 
        showCta={false}
        fullHeight={false}
      />

      {/* Services Grid */}
      <section className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-apex-purple">Our Services</h2>
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
                imageSrc={service.image}
              />
            ))}
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
              className="bg-gradient-to-r from-apex-orange to-orange-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center hover:shadow-xl transition-all group"
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
