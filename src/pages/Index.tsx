import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Timer, DollarSign, HeadphonesIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    features: false,
    testimonials: false,
    cta: false
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "E-commerce Manager",
      image: "/testimonial/t1.jpg",
      quote: "Apex Express has transformed our logistics operations. Their reliable service and real-time tracking have significantly improved our customer satisfaction."
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      image: "/testimonial/t2.jpg",
      quote: "The international shipping solutions provided by Apex are unmatched. Their customs handling expertise has made global expansion seamless for us."
    },
    {
      name: "Emma Rodriguez",
      position: "Supply Chain Manager",
      image: "/testimonial/t3.jpg",
      quote: "Their same-day delivery service has been a game-changer for our business. The team's dedication to timely delivery is exceptional."
    },
    {
      name: "David Thompson",
      position: "Retail Operations Manager",
      image: "/testimonial/t4.jpg",
      quote: "The consistency and reliability of Apex Express have helped us maintain our promise of next-day delivery to our customers across the country."
    },
    {
      name: "Lisa Wang",
      position: "Logistics Coordinator",
      image: "/testimonial/t5.jpg",
      quote: "Their customer service is outstanding. Any issues are resolved quickly and professionally, making them a trusted partner for our shipping needs."
    },
    {
      name: "James Martinez",
      position: "Distribution Manager",
      image: "/testimonial/t6.jpg",
      quote: "We've seen a significant reduction in shipping delays since partnering with Apex. Their efficiency has directly improved our customer satisfaction rates."
    }
  ];

  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services-section');
      const featuresSection = document.getElementById('features-section');
      const testimonialsSection = document.getElementById('testimonials-section');
      const ctaSection = document.getElementById('cta-section');
      
      if (servicesSection) {
        const top = servicesSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, services: top < window.innerHeight * 0.8 }));
      }
      
      if (featuresSection) {
        const top = featuresSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, features: top < window.innerHeight * 0.8 }));
      }

      if (testimonialsSection) {
        const top = testimonialsSection.getBoundingClientRect().top;
        setIsVisible(prev => ({ ...prev, testimonials: top < window.innerHeight * 0.8 }));
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
      title: "Domestic Shipping",
      description: "Fast and reliable shipping services within the country, ensuring your packages arrive safely and on time.",
      image: "/service-img/s3.png"
    },
    {
      title: "International Shipping",
      description: "Global shipping solutions connecting you to destinations worldwide with customs handling expertise.",
      image: "/service-img/s1.jpg"
    },
    {
      title: "Same-Day Delivery",
      description: "Urgent shipping needs handled with our premium same-day delivery service in selected areas.",
      image: "/service-img/s2.png"
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

  const nextTestimonialPage = () => {
    setCurrentTestimonialPage((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonialPage = () => {
    setCurrentTestimonialPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection 
        title="Fast, Secure, and Reliable Parcel Services" 
        subtitle="Delivering across the USA and beyond with speed & efficiency" 
        backgroundImage="bg-[url('/slider.jpg')]"
      />

      {/* Services Section */}
      <section id="services-section" className="section-padding bg-white">
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
                title={service.title}
                description={service.description}
                imageSrc={service.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-apex-purple text-white px-8 py-4 rounded-full font-medium inline-flex items-center hover:shadow-xl transition-all group"
            >
              <span className="mr-2">View All Services</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="section-padding bg-apex-purple">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Apex Express</h2>
            <p className="text-lg text-white/80">
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

      {/* Testimonials Section */}
      <section id="testimonials-section" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className={`max-w-7xl mx-auto transition-all duration-500 ${
            isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative px-12">
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonialPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all z-10 text-apex-purple hover:scale-110"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextTestimonialPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all z-10 text-apex-purple hover:scale-110"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>

              {/* Testimonials Grid */}
              <div className="overflow-hidden mx-auto">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ 
                    transform: `translateX(-${currentTestimonialPage * 100}%)`,
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0 px-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                        {testimonials
                          .slice(
                            pageIndex * testimonialsPerPage,
                            (pageIndex + 1) * testimonialsPerPage
                          )
                          .map((testimonial, index) => (
                            <div 
                              key={pageIndex * testimonialsPerPage + index}
                              className="transform transition-all duration-500 hover:-translate-y-1 mb-4"
                              style={{ 
                                transitionDelay: `${index * 100}ms`
                              }}
                            >
                              <TestimonialCard {...testimonial} />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center mt-4 space-x-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialPage(index)}
                    className={`transition-all duration-300 focus:outline-none group ${
                      currentTestimonialPage === index
                        ? 'scale-100'
                        : 'scale-90 opacity-50 hover:opacity-75'
                    }`}
                    aria-label={`Go to testimonial page ${index + 1}`}
                  >
                    <div className={`w-3 h-3 rounded-full bg-apex-purple transition-all duration-300 ${
                      currentTestimonialPage === index
                        ? 'scale-100 opacity-100'
                        : 'scale-90 opacity-50 group-hover:opacity-75'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
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
                className="bg-[#E49210] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d18510] transition-colors"
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
