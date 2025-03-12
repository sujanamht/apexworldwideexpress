import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('nepal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Simulate form submission
    setTimeout(() => {
      // Check for empty fields
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitError('Please fill out all required fields.');
        setIsSubmitting(false);
        return;
      }
      
      // Check email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitError('Please enter a valid email address.');
        setIsSubmitting(false);
        return;
      }
      
      // Success
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const locations = {
    nepal: {
      title: 'Kathmandu, Nepal',
      address: 'Lal Durbar Marg, Durbarmarg, Kathmandu, Nepal',
      addressLink: 'https://maps.app.goo.gl/N7ttnbKeqDwxNcmK7',
      email: 'contact@apexparcel.com',
      phone: '+977 01-4438480',
    },
    india: {
      title: 'Delhi, India',
      address: 'Khasra no 819 k-2, Block Apex House, Mahipalpur, New Delhi - 110037',
      addressLink: 'https://maps.app.goo.gl/B69518rfy3quYbwk6',
      email: 'Awexpress.delhi@gmail.com',
      phone: '+91 93114141207',
    },
    singapore: {
      title: 'Singapore',
      address: 'APEX Parcel Singapore Office, Singapore 123456',
      addressLink: '#',
      email: 'singapore@apexparcel.com',
      phone: '+65 XXXXXXXX',
    }
  };

  const activeLocation = locations[activeTab as keyof typeof locations];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Get in Touch" 
        subtitle="We're here to assist you with all your shipping and logistics needs" 
        showCta={false}
        fullHeight={false}
        backgroundImage="bg-[url('/contact.jpg')]"
      />

      {/* Contact Section */}
      <section className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 md:px-16">
              <div>
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-16 text-apex-purple">Our Branches</h2>
                
                {/* Location Tabs */}
                <div className="flex flex-wrap justify-between  border-b border-gray-200 mb-8">
                  <button
                    className={`mr-8 pb-4 font-medium transition-colors relative ${
                      activeTab === 'nepal' 
                        ? 'text-apex-orange' 
                        : 'text-gray-500 hover:text-apex-purple'
                    }`}
                    onClick={() => setActiveTab('nepal')}
                  >
                    Nepal 🇳🇵
                    {activeTab === 'nepal' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apex-orange rounded-full"></span>
                    )}
                  </button>
                  <button
                    className={`mr-8 pb-4 font-medium transition-colors relative ${
                      activeTab === 'india' 
                        ? 'text-apex-orange' 
                        : 'text-gray-500 hover:text-apex-purple'
                    }`}
                    onClick={() => setActiveTab('india')}
                  >
                    India 🇮🇳
                    {activeTab === 'india' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apex-orange rounded-full"></span>
                    )}
                  </button>
                  <button
                    className={`pb-4 font-medium transition-colors relative ${
                      activeTab === 'singapore' 
                        ? 'text-apex-orange' 
                        : 'text-gray-500 hover:text-apex-purple'
                    }`}
                    onClick={() => setActiveTab('singapore')}
                  >
                    Singapore 🇸🇬
                    {activeTab === 'singapore' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apex-orange rounded-full"></span>
                    )}
                  </button>
                </div>

                {/* Location Information */}
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold mb-4">{activeLocation.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 mt-1 text-apex-orange shrink-0" />
                      <a 
                        href={activeLocation.addressLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-apex-orange"
                      >
                        {activeLocation.address}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="mr-3 text-apex-orange shrink-0" />
                      <a href={`mailto:${activeLocation.email}`} className="hover:text-apex-orange">
                        {activeLocation.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone size={20} className="mr-3 text-apex-orange shrink-0" />
                      <a href={`tel:${activeLocation.phone}`} className="hover:text-apex-orange">
                        {activeLocation.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl text-center font-bold mb-6">Send Us a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 animate-fade-in">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-apex-purple focus:border-apex-purple peer"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="name"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-apex-purple focus:border-apex-purple peer"
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="email"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-apex-purple focus:border-apex-purple peer"
                        placeholder=" "
                      />
                      <label 
                        htmlFor="phone"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-apex-purple focus:border-apex-purple peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label 
                      htmlFor="message"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
                      <p>{submitError}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg flex items-center justify-center shadow-soft bg-apex-purple text-white hover:bg-opacity-90 transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Hours</h2>
              <p className="text-lg text-gray-600">
                We're available to assist you during the following hours
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-apex-gray rounded-xl p-6 text-center">
                <h3 className="font-bold mb-4">Delhi Office</h3>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              
              <div className="bg-apex-gray rounded-xl p-6 text-center">
                <h3 className="font-bold mb-4">Kathmandu Office</h3>
                <p className="mb-2">Monday - Friday: 9:00 AM - 5:30 PM</p>
                <p className="mb-2">Saturday: 10:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              
              <div className="bg-apex-gray rounded-xl p-6 text-center">
                <h3 className="font-bold mb-4">Singapore Office</h3>
                <p className="mb-2">Monday - Friday: 8:30 AM - 6:00 PM</p>
                <p className="mb-2">Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-600">
              <p>All times are listed in local time zones</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
