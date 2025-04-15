
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Music, Youtube, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MusicMinistry = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Music Department" 
          subtitle="Glorifying God through the gift of music"
          backgroundImage="https://images.unsplash.com/photo-1511025998370-7d5aafd85094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Our Music Ministry</h2>
                <div className="w-24 h-1 bg-church mb-6"></div>
                <p className="text-gray-700 mb-4">
                  At LOGOS PENTECOSTAL CHURCH, we believe that music is a powerful form of worship that connects 
                  our hearts to God. Our Music Department is dedicated to leading the congregation in praise and 
                  worship, creating an atmosphere where God's presence can be experienced.
                </p>
                <p className="text-gray-700 mb-4">
                  Pastor Joseph Omotayo Ologbonsaiye is a lover of music, and his passion has influenced our church's 
                  approach to worship. His love for music led him to establish an annual Jazz Night similar to UNESCO's 
                  Jazz night, celebrating the art form while bringing glory to God.
                </p>
                <p className="text-gray-700 mb-4">
                  Our music team consists of talented vocalists and instrumentalists who are committed to excellence 
                  in their craft and, more importantly, to serving God through their gifts.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Church Choir" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Annual Jazz Night</h2>
              <div className="w-24 h-1 bg-church mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                A special event that celebrates the beauty of jazz music while worshipping God
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Jazz Night" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">A Night of Jazz and Worship</h3>
                <p className="text-gray-700 mb-4">
                  Inspired by UNESCO's International Jazz Day, Pastor Joseph established our annual Jazz Night as a 
                  unique way to praise God through the sophisticated harmonies and improvisational nature of jazz music.
                </p>
                <p className="text-gray-700 mb-4">
                  This special event brings together talented musicians from within our church and beyond to create 
                  a memorable night of music that lifts the soul and honors our Creator. It's also an opportunity to 
                  reach out to music lovers in our community who might not otherwise attend a church service.
                </p>
                <div className="flex items-center text-gray-700 mb-6">
                  <Calendar className="mr-3 h-5 w-5 text-church" />
                  <span>Held annually - details announced in church and on our social media</span>
                </div>
                <Link to="/contact" className="button-church inline-flex items-center">
                  Inquire About Our Next Event <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Choir</h2>
              <div className="w-24 h-1 bg-church mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We welcome those with musical talents to join our music ministry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Music className="text-church h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Vocalists</h3>
                <p className="text-gray-700 text-center">
                  If you have a gift for singing, we'd love to have you join our praise team or choir.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Music className="text-church h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Instrumentalists</h3>
                <p className="text-gray-700 text-center">
                  We welcome those who play instruments like piano, guitar, drums, saxophone, etc.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Music className="text-church h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Sound & Media</h3>
                <p className="text-gray-700 text-center">
                  Help with sound mixing, projection, and other technical aspects of our worship services.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/contact" className="button-church inline-flex items-center">
                Contact Us To Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-church text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Watch Our Worship Sessions</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto mb-8">
              Visit our YouTube channel to watch recordings of our worship services and special musical performances.
            </p>
            <a 
              href="https://www.youtube.com/channel/UCKdznCO0SwW6-xkCWXpLdQA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-gold inline-flex items-center"
            >
              <Youtube className="mr-2 h-5 w-5" /> Logos Pentecostal Church TV
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MusicMinistry;
