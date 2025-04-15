
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PastorMessage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/lovable-uploads/932f2507-9f23-4e91-b7db-f1931c8c4c24.png"
              alt="Pastor Joseph Omotayo Ologbonsaiye" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome Message from Pastor Joseph</h2>
            <div className="w-24 h-1 bg-church mb-6"></div>
            <p className="text-gray-700 mb-6">
              Welcome to LOGOS PENTECOSTAL CHURCH – Fire Arena. We are a Bible believing 
              Church that preaches and teaches the doctrines of the Bible.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700 italic">
                "Preparing the Bride for the Bridegroom"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Watch Scripture</h3>
              <p className="text-gray-700 italic">
                "Cast me not away from thy presence and take not thy Holy Spirit from me. 
                Restore unto me the joy of thy salvation and uphold me with thy free spirit."
              </p>
              <p className="text-gray-600 mt-2">- Psalm 51:11-12</p>
            </div>
            <Link to="/about" className="button-church inline-flex items-center">
              Read More About Our Pastor <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastorMessage;
