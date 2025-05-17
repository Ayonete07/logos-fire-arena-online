
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HourOfLiberation = () => {
  return (
    <section className="py-16 flame-bg text-white relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Hour of Liberation</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto">A forum where men are delivered from their afflictions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Monthly Deliverance Program</h3>
            <p className="mb-6">
              "The Hour of Liberation" is an arm of the Church where Pastor Joseph Omotayo Ologbonsaiye 
              delivers people from the captivity of the devil in the name of Jesus and empowered by the Holy Ghost. 
              By this, he empowers men to succeed in God's way. Men who attend this programme attest to the goodness 
              of God to save and to deliver.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-3 h-5 w-5 text-church-gold" />
                <div>
                  <p>Ibadan: 1st Weekend (Friday to Sunday) of the month</p>
                  <p>Lagos: 3rd Weekend (Friday to Sunday) of the month</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-church-gold" />
                <div>
                  <p>Arrival: Friday before 4:00 PM</p>
                  <p>Departure: After Service on Sunday</p>
                  <p>Vigil Time: 11:00 PM - 2:30 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-church-gold" />
                <span>Church Auditorium</span>
              </div>
            </div>
            
            <Link to="/ministries/liberation" className="button-gold inline-block">
              Learn More
            </Link>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="People worshipping" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HourOfLiberation;
