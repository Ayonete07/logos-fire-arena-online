
import { Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ServiceTimes = () => {
  const services = [
    {
      day: 'Sunday',
      name: 'Sunday Service',
      time: '8:00 AM - 11:00 AM'
    },
    {
      day: 'Monday',
      name: 'Bible Study',
      time: '6:00 PM - 8:00 PM'
    },
    {
      day: 'Wednesday',
      name: 'Revival Hour',
      time: '6:00 PM - 8:00 PM'
    },
    {
      day: 'Last Friday',
      name: 'Hour of Liberation',
      time: '11:00 PM - 2:30 AM'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Times</h2>
          <div className="w-24 h-1 bg-church mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Join us for worship and fellowship at these times</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-church p-4 text-white font-semibold">
                <h3 className="text-xl">{service.day}</h3>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2">{service.name}</h4>
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-5 w-5 text-church" />
                  <span>{service.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
