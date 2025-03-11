
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-apex-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/7048cf04-521d-4440-af2a-5332c1c13fdf.png" 
              alt="Apex Worldwide Express" 
              className="h-12 mb-4 brightness-0 invert" 
            />
            <p className="text-sm text-gray-300 max-w-xs">
              Fast, secure, and reliable parcel services delivering across the USA and beyond with speed & efficiency.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
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
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-apex-orange" />
                <span className="text-sm">
                  Khasra no 819 k-2, Block Apex House, Mahipalpur, New Delhi - 110037
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-apex-orange" />
                <span className="text-sm">+91 93114141207</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-apex-orange" />
                <span className="text-sm">Awexpress.delhi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Apex Worldwide Express. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 text-sm text-gray-400 space-x-6">
              <Link to="/privacy-policy" className="hover:text-apex-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-apex-orange transition-colors">
                Terms of Service
              </Link>
            </div>
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
