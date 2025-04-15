
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinistryDropdownOpen, setIsMinistryDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo area */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-church rounded-full flex items-center justify-center animate-flame">
              <span className="text-white text-lg font-bold">L</span>
            </div>
            <div>
              <div className="text-lg font-serif font-bold text-church">LOGOS PENTECOSTAL CHURCH</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-church-gold">Fire Arena</div>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-church transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-church transition-colors duration-300">About</Link>
            
            {/* Dropdown for ministries */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-church transition-colors duration-300"
                onClick={() => setIsMinistryDropdownOpen(!isMinistryDropdownOpen)}
              >
                Ministries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top z-50">
                <Link to="/ministries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-church hover:text-white">All Ministries</Link>
                <Link to="/ministries/liberation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-church hover:text-white">Hour of Liberation</Link>
                <Link to="/ministries/music" className="block px-4 py-2 text-sm text-gray-700 hover:bg-church hover:text-white">Music Department</Link>
              </div>
            </div>
            
            <Link to="/contact" className="text-gray-800 hover:text-church transition-colors duration-300">Contact</Link>
            <a 
              href="https://www.youtube.com/channel/UCKdznCO0SwW6-xkCWXpLdQA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-church"
            >
              YouTube Channel
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-church focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link 
              to="/" 
              className="block px-4 py-2 text-gray-800 hover:bg-church hover:text-white rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-gray-800 hover:bg-church hover:text-white rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Ministries Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-church hover:text-white rounded-md"
                onClick={() => setIsMinistryDropdownOpen(!isMinistryDropdownOpen)}
              >
                <span className="flex-1 text-left">Ministries</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMinistryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMinistryDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    to="/ministries" 
                    className="block px-4 py-2 text-gray-600 hover:bg-church-light hover:text-white rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Ministries
                  </Link>
                  <Link 
                    to="/ministries/liberation" 
                    className="block px-4 py-2 text-gray-600 hover:bg-church-light hover:text-white rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hour of Liberation
                  </Link>
                  <Link 
                    to="/ministries/music" 
                    className="block px-4 py-2 text-gray-600 hover:bg-church-light hover:text-white rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Music Department
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-gray-800 hover:bg-church hover:text-white rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://www.youtube.com/channel/UCKdznCO0SwW6-xkCWXpLdQA"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-church text-white rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              YouTube Channel
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
