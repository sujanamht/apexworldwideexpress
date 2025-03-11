
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-apex-gray px-4">
      <div className="text-center max-w-lg animate-fade-in">
        <h1 className="text-9xl font-bold text-apex-purple">404</h1>
        <div className="w-16 h-1 bg-apex-orange mx-auto my-6 rounded-full"></div>
        <h2 className="text-3xl font-bold mb-4 text-apex-purple">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/" 
            className="button-gradient px-6 py-3 rounded-lg flex items-center justify-center"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="px-6 py-3 rounded-lg flex items-center justify-center border border-apex-purple text-apex-purple hover:bg-apex-purple/5 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
