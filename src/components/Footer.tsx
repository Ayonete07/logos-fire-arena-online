
import { Mail, Phone, Youtube, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-gold">LOGOS PENTECOSTAL CHURCH</h3>
            <p className="text-gray-400 mb-4">A Bible believing Church that preaches and teaches the doctrines of the Bible. Our bounds and limits are entrenched in the teaching of Christ.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/channel/UCKdznCO0SwW6-xkCWXpLdQA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-church-gold transition-colors"
              >
                <Youtube />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-church-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-church-gold transition-colors">About</Link></li>
              <li><Link to="/ministries" className="text-gray-400 hover:text-church-gold transition-colors">Ministries</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-church-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Ministries */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-gold">Ministries</h3>
            <ul className="space-y-2">
              <li><Link to="/ministries/liberation" className="text-gray-400 hover:text-church-gold transition-colors">Hour of Liberation</Link></li>
              <li><Link to="/ministries/music" className="text-gray-400 hover:text-church-gold transition-colors">Music Department</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-church-gold" />
                <a href="tel:+2348043936776" className="text-gray-400 hover:text-church-gold transition-colors">+234-80-4393-6776</a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-church-gold" />
                <a href="mailto:Logos4595@gmail.com" className="text-gray-400 hover:text-church-gold transition-colors">Logos4595@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Youtube className="mr-3 h-5 w-5 text-church-gold" />
                <a href="https://www.youtube.com/channel/UCKdznCO0SwW6-xkCWXpLdQA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-church-gold transition-colors">Logos Pentecostal Church TV</a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-church-gold" />
                <span className="text-gray-400">Ibadan and Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LOGOS PENTECOSTAL CHURCH - Fire Arena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
