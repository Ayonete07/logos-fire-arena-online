
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Youtube, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Contact Us" 
          subtitle="Get in touch with LOGOS PENTECOSTAL CHURCH"
          backgroundImage="https://images.unsplash.com/photo-1621617003084-eee6d77dd741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <div className="w-24 h-1 bg-church mb-6"></div>
                <p className="text-gray-700 mb-8">
                  We'd love to hear from you. Please fill out the form below or use our contact information to get in touch with us.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-church flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-700">+234-80-4393-6776</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-church flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-700">Logos4595@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-church flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <p className="text-gray-700">Ibadan and Lagos, Nigeria</p>
                      <p className="text-gray-500 text-sm">(Exact addresses will be provided soon)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Youtube className="mr-4 h-6 w-6 text-church flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">YouTube</h3>
                      <a 
                        href="https://www.youtube.com/channel/UCKdznCO0SwW6-xkCWXpLdQA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-church hover:underline"
                      >
                        Logos Pentecostal Church TV
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-bold text-lg mb-4">Service Times</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-semibold">Sunday Service:</span> 9:00 AM - 11:30 AM</li>
                    <li><span className="font-semibold">Bible Study (Tuesday):</span> 6:00 PM - 7:30 PM</li>
                    <li><span className="font-semibold">Prayer Meeting (Thursday):</span> 6:00 PM - 7:30 PM</li>
                    <li><span className="font-semibold">Hour of Liberation (Last Friday):</span> 10:00 PM - 1:00 AM</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <select 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Prayer Request">Prayer Request</option>
                        <option value="Hour of Liberation">Hour of Liberation</option>
                        <option value="Music Department">Music Department</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="button-church w-full flex items-center justify-center"
                    >
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-church mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We invite you to join us for our worship services. Our doors are open to all who seek to know 
              God and experience His presence.
            </p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map will be updated soon with our church locations in Ibadan and Lagos.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
