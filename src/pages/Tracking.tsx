import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Search, Package, CheckCircle, ArrowRight, MapPin, Truck } from 'lucide-react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    status: string;
    location: string;
    eta: string;
    updates: Array<{
      date: string;
      time: string;
      location: string;
      status: string;
    }>;
  }>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    
    setIsTracking(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      if (trackingNumber === 'AW123456789') {
        setTrackingResult({
          status: 'In Transit',
          location: 'Delhi, India',
          eta: 'October 10, 2023',
          updates: [
            {
              date: 'October 5, 2023',
              time: '10:30 AM',
              location: 'Delhi, India',
              status: 'Package picked up'
            },
            {
              date: 'October 6, 2023',
              time: '2:45 PM',
              location: 'Delhi, India',
              status: 'Package departed facility'
            },
            {
              date: 'October 7, 2023',
              time: '9:15 AM',
              location: 'Mumbai, India',
              status: 'Package arrived at destination facility'
            }
          ]
        });
      } else if (trackingNumber === 'AW987654321') {
        setTrackingResult({
          status: 'Delivered',
          location: 'New York, USA',
          eta: 'Already delivered',
          updates: [
            {
              date: 'September 28, 2023',
              time: '8:20 AM',
              location: 'New York, USA',
              status: 'Package picked up'
            },
            {
              date: 'September 29, 2023',
              time: '3:10 PM',
              location: 'New York, USA',
              status: 'Package departed facility'
            },
            {
              date: 'October 1, 2023',
              time: '11:45 AM',
              location: 'Los Angeles, USA',
              status: 'Package arrived at destination facility'
            },
            {
              date: 'October 2, 2023',
              time: '2:30 PM',
              location: 'Los Angeles, USA',
              status: 'Out for delivery'
            },
            {
              date: 'October 2, 2023',
              time: '5:15 PM',
              location: 'Los Angeles, USA',
              status: 'Delivered'
            }
          ]
        });
      } else {
        setError('No information found for this tracking number. Please verify and try again.');
        setTrackingResult(null);
      }
      
      setIsTracking(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Track Your Shipment" 
        subtitle="Get real-time updates on your package location" 
        showCta={false}
        fullHeight={false}
        backgroundImage="bg-[url('/slider2.jpeg')]"
      />

      {/* Tracking Form Section */}
      <section className="section-padding bg-apex-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
              <form onSubmit={handleTracking} className="space-y-6">
                <div>
                  <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Tracking Number
                  </label>
                  <div className="relative">
                    <input
                      id="tracking-number"
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="e.g. AW123456789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-apex-purple focus:border-apex-purple"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                      <Package size={20} />
                    </div>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-600">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isTracking}
                  className={`bg-apex-purple text-white w-full px-6 py-3 rounded-lg flex items-center justify-center shadow-soft hover:bg-apex-purple/90 transition-colors ${
                    isTracking ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isTracking ? (
                    <>
                      <span className="mr-2">Tracking...</span>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <Search size={20} className="mr-2" />
                      Track Now
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Try these sample tracking numbers: AW123456789, AW987654321
                </p>
              </div>
            </div>

            {/* Tracking Results */}
            {trackingResult && (
              <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Tracking Number:</span>
                    <h3 className="text-lg font-bold">{trackingNumber}</h3>
                  </div>
                  <div className={`mt-4 md:mt-0 px-4 py-2 rounded-full ${
                    trackingResult.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  } flex items-center`}>
                    {trackingResult.status === 'Delivered' ? (
                      <CheckCircle size={16} className="mr-1" />
                    ) : (
                      <Truck size={16} className="mr-1" />
                    )}
                    <span className="text-sm font-medium">{trackingResult.status}</span>
                  </div>
                </div>

                <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-apex-gray/50 p-4 rounded-xl">
                    <span className="text-sm text-gray-500">Current Location</span>
                    <div className="flex items-center mt-1">
                      <MapPin size={18} className="text-apex-orange mr-1" />
                      <span className="font-medium">{trackingResult.location}</span>
                    </div>
                  </div>
                  <div className="bg-apex-gray/50 p-4 rounded-xl">
                    <span className="text-sm text-gray-500">Estimated Delivery</span>
                    <div className="flex items-center mt-1">
                      <span className="font-medium">{trackingResult.eta}</span>
                    </div>
                  </div>
                  <div className="bg-apex-gray/50 p-4 rounded-xl">
                    <span className="text-sm text-gray-500">Status</span>
                    <div className="flex items-center mt-1">
                      <span className="font-medium">{trackingResult.status}</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-4">Shipment Progress</h4>
                <div className="space-y-4">
                  {trackingResult.updates.map((update, index) => (
                    <div 
                      key={index} 
                      className={`relative pl-8 pb-4 ${
                        index !== trackingResult.updates.length - 1 ? 'border-l-2 border-gray-200' : ''
                      }`}
                    >
                      <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-apex-orange z-10"></div>
                      <div className="mb-1">
                        <span className="font-medium">{update.date}</span>
                        <span className="text-gray-500 ml-2">{update.time}</span>
                      </div>
                      <div className="font-medium">{update.status}</div>
                      <div className="text-sm text-gray-500">{update.location}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about tracking your shipments
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FaqItem 
                question="How do I track my package?" 
                answer="You can track your package by entering your tracking number in the form above. The tracking number is provided to you when you ship with Apex Worldwide Express."
              />
              <FaqItem 
                question="What if I lost my tracking number?" 
                answer="If you've lost your tracking number, please contact our customer service team with your shipping details, and they will assist you in retrieving your tracking information."
              />
              <FaqItem 
                question="How often is tracking information updated?" 
                answer="Tracking information is typically updated at each major step in the delivery process. This includes package pickup, departure from facility, arrival at destination facility, and delivery."
              />
              <FaqItem 
                question="Why is my tracking information not updating?" 
                answer="There may be delays in tracking updates due to various factors, including transit between facilities, customs processing for international shipments, or technical issues. If your tracking hasn't updated in more than 48 hours, please contact our support team."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-apex-gray/20 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <ArrowRight 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 text-gray-700 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Tracking;
