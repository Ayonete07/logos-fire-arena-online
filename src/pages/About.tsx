
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Book, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="About Our Church" 
          subtitle="Learn more about LOGOS PENTECOSTAL CHURCH and our mission"
          backgroundImage="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1594895972744-33ba0d1d4c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Pastor Joseph Omotayo Ologbonsaiye" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">About Pastor Joseph Omotayo Ologbonsaiye</h2>
                <div className="w-24 h-1 bg-church mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Pastor Joseph Omotayo Ologbonsaiye was born into the Owoleke Family of Adesuwa-Kabba in Kogi State, Nigeria. 
                  He is the grandson of Obajemu Owoleke, who was the Obajemu of Owe Land.
                </p>
                <p className="text-gray-700 mb-4">
                  Born to Elder John Ologbonsaiye Owoleke and Madam Abigail Omofemi Ologbonsaiye Owoleke, Pastor Joseph's father 
                  was a devout Christian and ordained Elder in Christ Apostolic Church (CAC) in Egunbe-Kabba. His father vowed that 
                  if God gave him a first born son, he would dedicate him to God's service, much like the story of Samuel and Hannah.
                </p>
                <p className="text-gray-700 mb-4">
                  Before answering God's call to ministry, Pastor Joseph had a successful career in the secular world, rising to 
                  the position of Director at ViTech Technologies Limited. He holds a B.Sc. (Hons) in Computer Science (Software) 
                  from the University Of Ibadan in Western Nigeria.
                </p>
                <p className="text-gray-700 mb-4">
                  Now, as the Shepherd of LOGOS PENTECOSTAL CHURCH – Fire Arena, Pastor Joseph is a seasoned conference speaker, 
                  teacher, and expositor of the Scriptures who shares God's word from his wealth of life experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pastor's Publications</h2>
              <div className="w-24 h-1 bg-church mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Pastor Joseph Omotayo Ologbonsaiye has authored numerous books to help believers grow in their faith
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "The Treasure Chest",
                "The Grafted Man",
                "The King and His Kingdom",
                "The Four Faces of God",
                "Adoption",
                "The Usefulness Of Money",
                "Church Workers – A Perfect Example",
                "Set Your Eyes On Jesus",
                "Pastoring A Little Flock",
                "Breasting the Tape"
              ].map((book, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-4">
                    <Book className="text-church h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-lg text-center">{book}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Personal Life</h2>
                <div className="w-24 h-1 bg-church mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Pastor Joseph Omotayo Ologbonsaiye is married to Comfort Morayo Ologbonsaiye Nee Ayodele Omodogbe 
                  from Okiti-Pupa in Ondo State, Nigeria. Comfort Morayo Ologbonsaiye is a co-labourer with her husband 
                  in the Vineyard of the Lord. Glory is to God, the family is blessed.
                </p>
                <p className="text-gray-700 mb-4">
                  Pastor Joseph is also a lover of Music. His love for music led him to establish an annual Jazz Night 
                  similar to UNESCO's Jazz night, celebrating the art form while glorifying God through music.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1591458907779-280c33cf7957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Family Image" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-church text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="inline-block p-4 bg-white rounded-full text-church mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p>
                  To build a community of believers who are firmly rooted in the word of God, 
                  walking in the fullness of their divine purpose, and impacting their world for Christ.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="inline-block p-4 bg-white rounded-full text-church mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p>
                  To deliver people from the captivity of the devil and empower them to succeed in God's way, 
                  through the preaching and teaching of the unadulterated word of God.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Us This Sunday</h2>
            <div className="w-24 h-1 bg-church mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We invite you to join us for our worship services and experience the presence of God. 
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

export default About;
