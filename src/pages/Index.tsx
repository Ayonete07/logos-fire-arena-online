import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceTimes from '@/components/ServiceTimes';
import PastorMessage from '@/components/PastorMessage';
import HourOfLiberation from '@/components/HourOfLiberation';
import { ArrowRight, Book, Heart, Users, Cross } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="LOGOS PENTECOSTAL CHURCH" 
          subtitle="Fire Arena - Where Faith Comes Alive"
          buttonText="Join Us This Sunday"
          buttonLink="/contact"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mandate</h2>
              <div className="w-24 h-1 bg-church mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Cross className="h-10 w-10 text-church mx-auto mb-4" />
                  <p className="text-gray-700">
                    Fulfilling mandate to reach the world for the kingdom
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Matt. 18:18-20</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="h-10 w-10 text-church mx-auto mb-4" />
                  <p className="text-gray-700">
                    Being anointed to break Satanic soul-tie
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Luke 4:8-9</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Book className="h-10 w-10 text-church mx-auto mb-4" />
                  <p className="text-gray-700">
                    With the word of God - a detergent that washes the soul from the dreg of sin
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Ephess. 5:26</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-10 w-10 text-church mx-auto mb-4" />
                  <p className="text-gray-700">
                    Empowered by the Holy Spirit
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Acts 1:8</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Welcome to Our Church</h2>
              <div className="w-24 h-1 bg-church mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                A Bible believing Church that preaches and teaches the doctrines of the Bible.
                Our bounds and limits are entrenched in the teaching of Christ.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block p-4 bg-church rounded-full text-white mb-4">
                  <Book size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Bible Teaching</h3>
                <p className="text-gray-600">
                  We believe in both the Old and New Testament as the inerrant word of God that must be taught to the flock of God.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block p-4 bg-church rounded-full text-white mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Deliverance</h3>
                <p className="text-gray-600">
                  We are committed to delivering people from the captivity of the devil and empowering them to succeed in God's way.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block p-4 bg-church rounded-full text-white mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">
                  We foster a loving community where Christians can grow together in faith and support one another.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PastorMessage />
        <ServiceTimes />
        <HourOfLiberation />
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us This Sunday</h2>
            <div className="w-24 h-1 bg-church mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We'd love to have you join our worship service. Come and experience the power of God's word!
            </p>
            <Link to="/contact" className="button-church inline-flex items-center">
              Get Directions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
