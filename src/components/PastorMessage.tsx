
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PastorMessage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1594895972744-33ba0d1d4c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Pastor Joseph Omotayo Ologbonsaiye" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome Message from Pastor Joseph</h2>
            <div className="w-24 h-1 bg-church mb-6"></div>
            <p className="text-gray-700 mb-6">
              Welcome to LOGOS PENTECOSTAL CHURCH – Fire Arena. We are a Bible believing 
              Church that preaches and teaches the doctrines of the Bible. Our bounds and 
              limits are entrenched in the teaching of Christ. We believe in both the Old and 
              New Testament as the inerrant word of God that must be taught to the flock of God.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to deliver people from the captivity of the devil and empower them 
              to succeed in God's way. We invite you to join us in worship and experience the 
              transformative power of God's word in your life.
            </p>
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
