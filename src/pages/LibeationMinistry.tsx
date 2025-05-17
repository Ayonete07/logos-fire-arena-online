
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiberationMinistry = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="The Hour of Liberation" 
          subtitle="A forum where men are delivered from their afflictions"
          backgroundImage="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About The Hour of Liberation</h2>
                <div className="w-24 h-1 bg-church mb-6"></div>
                <p className="text-gray-700 mb-4">
                  "The Hour of Liberation" is an arm of the Church where men are delivered from their afflictions.
                  It is a special monthly program where Pastor Joseph Omotayo Ologbonsaiye ministers to 
                  those bound by spiritual chains and in need of freedom.
                </p>
                <p className="text-gray-700 mb-4">
                  Pastor Joseph Omotayo Ologbonsaiye believes in delivering people from the captivity of the devil 
                  in the name of Jesus and empowered by the Holy Ghost. By this, he empowers men to succeed in God's way. 
                  Men who attend this programme attest to the goodness of God to save and to deliver.
                </p>
                <p className="text-gray-700 mb-6">
                  Through prayers, teaching, and the demonstration of God's power, many have experienced breakthrough, 
                  healing, and deliverance from bondage during these powerful nights of ministry.
                </p>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="mr-3 h-5 w-5 text-church" />
                      <div>
                        <p>Ibadan: 1st Weekend (Friday to Sunday) of the month</p>
                        <p>Lagos: 3rd Weekend (Friday to Sunday) of the month</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-church" />
                      <div>
                        <p>Arrival: Friday before 4:00 PM</p>
                        <p>Departure: After Service on Sunday</p>
                        <p>Vigil Time: 11:00 PM - 2:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-church" />
                      <span>Call our hot line for direction</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1545459428-486c4f9b1a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                  alt="Hour of Liberation Service" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-church text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonies</h2>
              <div className="w-24 h-1 bg-white mx-auto"></div>
              <p className="mt-4 max-w-2xl mx-auto">
                Lives that have been transformed through The Hour of Liberation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 italic">
                  "After attending the Hour of Liberation, I experienced a complete turnaround in my life. The prayers 
                  broke chains of addiction that had bound me for years. Today, I'm free and serving the Lord."
                </p>
                <p className="font-bold">- James O.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 italic">
                  "I had been struggling with recurring nightmares for over a decade. After Pastor Joseph prayed for me 
                  during the Hour of Liberation, I now sleep peacefully. God's deliverance is real!"
                </p>
                <p className="font-bold">- Sarah N.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 italic">
                  "I came to the Hour of Liberation with a failing business and mounting debts. After prayer and counsel, 
                  doors began to open. Six months later, my business is thriving and all debts cleared."
                </p>
                <p className="font-bold">- Michael D.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us For The Next Program</h2>
            <div className="w-24 h-1 bg-church mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We invite you to experience deliverance and empowerment at our next Hour of Liberation program. 
              Come with an expectant heart and witness the power of God.
            </p>
            <Link to="/contact" className="button-church inline-flex items-center">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LiberationMinistry;
