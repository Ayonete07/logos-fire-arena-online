
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Music, Lightbulb, BookOpen, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Ministries = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Our Ministries" 
          subtitle="Discover the various ministries at LOGOS PENTECOSTAL CHURCH"
          backgroundImage="https://images.unsplash.com/photo-1607915407834-cac515c3d04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Church Ministries</h2>
              <div className="w-24 h-1 bg-church mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                At LOGOS PENTECOSTAL CHURCH, we offer various ministries designed to help you 
                grow spiritually and serve according to your gifts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Hour of Liberation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="text-church mr-3 h-6 w-6" />
                    <h3 className="text-2xl font-bold">Hour of Liberation</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    "The Hour of Liberation" is an arm of the Church where men are delivered from their afflictions. 
                    Pastor Joseph Omotayo Ologbonsaiye delivers people from the captivity of the devil and empowers 
                    men to succeed in God's way through this monthly three-day program.
                  </p>
                  <Link to="/ministries/liberation" className="button-church inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511025998370-7d5aafd85094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Music Ministry" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Music className="text-church mr-3 h-6 w-6" />
                    <h3 className="text-2xl font-bold">Music Department</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Our Music Department is dedicated to glorifying God through song and music. 
                    Pastor Joseph's love for music led to the establishment of an annual Jazz Night 
                    similar to UNESCO's Jazz night, celebrating music while bringing honor to God.
                  </p>
                  <Link to="/ministries/music" className="button-church inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 justify-center">
                    <BookOpen className="text-church h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Bible Study</h3>
                  <p className="text-gray-700 text-center">
                    Delving deep into God's word every Tuesday to understand scriptural truths and apply them to our daily lives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 justify-center">
                    <Heart className="text-church h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Prayer Ministry</h3>
                  <p className="text-gray-700 text-center">
                    Our intercessory prayer team dedicates time to lift up needs of the church, community, and world to God.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 justify-center">
                    <Users className="text-church h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Community Outreach</h3>
                  <p className="text-gray-700 text-center">
                    Serving our community and sharing the gospel with those in need through various outreach initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <div className="w-24 h-1 bg-church mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We invite you to get involved in our ministries. There's a place for everyone to serve and grow at LOGOS PENTECOSTAL CHURCH.
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

export default Ministries;
