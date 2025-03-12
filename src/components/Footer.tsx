import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-apex-purple text-white px-6 md:px-0 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className=" space-y-4">
            <img 
              src="/logo.png" 
              alt="Apex Worldwide Express" 
              className="h-12 mb-4 brightness-0 invert" 
            />
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-apex-orange" />
                <span className="text-sm">
                 Durbarmarg, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-apex-orange" />
                <span className="text-sm">+977-01-5199458</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-apex-orange" />
                <span className="text-sm">info@apexworldwide.com.np</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="text-lg font-semibold my-6 md:my-2">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Our Services</FooterLink>
              <FooterLink to="/tracking">Track Your Parcel</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold my-6 md:my-2">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/services">Domestic Shipping</FooterLink>
              <FooterLink to="/services">International Shipping</FooterLink>
              <FooterLink to="/services">Same-Day Delivery</FooterLink>
              <FooterLink to="/services">E-Commerce Fulfillment</FooterLink>
              <FooterLink to="/services">Freight Services</FooterLink>
              <FooterLink to="/services">Warehousing & Storage</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            
            <div className="w-full h-[250px] overflow-hidden rounded-lg my-4 md:my-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28257.0750489018!2d85.3200712!3d27.7131369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1901934f8861%3A0xbc3c138e61533293!2sApex%20Worldwide%20Express%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1741755384550!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Apex Worldwide Express Location"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 mt-2">
          <div className="flex flex-col  justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Apex Worldwide Express. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Designed and developed by <a href="https://itnepalsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-apex-orange text-gray-200 font-semibold transition-colors">IT Nepal Solutions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link 
      to={to} 
      className="text-sm text-gray-300 hover:text-apex-orange transition-colors"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-apex-orange transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
