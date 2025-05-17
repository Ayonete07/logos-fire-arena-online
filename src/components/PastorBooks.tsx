
import { Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

type BookType = {
  title: string;
  coverImage: string;
  synopsis: string;
};

const PastorBooks = () => {
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

  const books: BookType[] = [
    {
      title: "The Treasure Chest",
      coverImage: "/lovable-uploads/7fe401d8-30f7-4265-a473-9d891951a237.png",
      synopsis: "The Treasure Chest is a box used to store precious gems to be preserved for a long time. Spiritually, The Treasure Chest in the hand of God is the HEART. God wants to keep his precious heavenly gems in the heart of man. Those price-worthy and priceless gems are the Holy Spirit and His Word. How to prepare The Treasure Chest (Heart) for God and the blessings that follows coupled with taking home The Treasure Chests are written in this book."
    },
    {
      title: "The Grafted Man",
      coverImage: "/lovable-uploads/2acac245-5ea6-4d76-ae49-9a3e6fd7fff8.png",
      synopsis: "A graft is the process of cutting a branch of a tree (the scion) and implanting it on another (the root stock). Jesus is the Holy Root in God's Vineyard. Every believer in him is a Branch. This means every man in Christ is a Grafted Branch. As a branch in Christ, your life is expected to suck from the fatness of the Root: Forgiveness of sin; Justification from the guilt of sin; Baptism of the Holy Spirit; and the Inheritance of the saints in the Kingdom of God."
    },
    {
      title: "The King and His Kingdom",
      coverImage: "/lovable-uploads/b8d78a5f-149a-4cbf-9815-c1129e8ae5a4.png",
      synopsis: "Christ is a King. However, His kingdom is not of this world. Rather than be a King over His subjects, Christ is a King of kings because of all the citizens of His kingdom are made kings. Christ's kingdom makes war with the Kingdom of Satan and that takes place in the heart of man. Therefore, make Christ the king of your life. What makes Christ a King? How is He ruling in His Kingdom? And what is the reward of obeying Him? All these are the focus of this book."
    },
    {
      title: "Set Your Eyes On Jesus",
      coverImage: "/lovable-uploads/1bef158b-38bc-4b79-9bea-7efc5116c43d.png",
      synopsis: "The eye is one of the conduits to the soul. It plays a powerful role in feeding the minds. 'Set Your Eyes On Jesus' is a book that takes his readers away from the optical eyes to the inward man which is the power of imagination. What you think about is what you become. Here in this book, you are encouraged to set the eyes on your inward man on Jesus as you meditate on Him in order to be like Him."
    },
    {
      title: "The Church Workers",
      coverImage: "/lovable-uploads/076b2777-316c-40ce-9139-cd4e0a6646f8.png",
      synopsis: "What makes a good Church Worker is not the works he does but his ability to represent Christ and also accommodate the excesses of others. Such excesses includes negative criticisms, insults, distresses, persecutions, and all forms of reveling especially from the unbelievers and believers alike and yet be unruffled. This book encourages you to be a worker with integrity before men and God; and to be a salt in the world."
    },
    {
      title: "Adoption",
      coverImage: "/lovable-uploads/ac9efe42-2c19-487b-8ab3-9aa1c0fdccf3.png",
      synopsis: "This book is a compendium of scriptural records on the subject adoption. I encourage you to read the scriptures quoted in this book. It will enlighten and educate you about Adoption and how God wants man to seriously consider the subject as the only way to qualify you to be a member of His household."
    },
    {
      title: "The Cross",
      coverImage: "/lovable-uploads/e204500e-e2ce-4d43-aa30-12cb7342807d.png",
      synopsis: "To Christ, 'The Cross' is an altar of sacrifice where He offered Himself to shed His blood as a sacrifice to remit man's sins and to appease God's wrath for a punishment for sin. To the plebeians and the unbelievers, 'The Cross' is a derision or mockery but to the Christians, it is the power of God unto salvation. 'The Cross' bridged the gap between man and God and it is the pathway to the Kingdom of God."
    },
    {
      title: "Breasting The Tape",
      coverImage: "/lovable-uploads/b504a015-350e-4237-861d-91ad56312165.png",
      synopsis: "Life is a race. Every person is striving to win the mastery. The idea of Breasting The Tape is steamed out of the Christian journey. The Christians are running in a race which they must win. Their race is not run with any man but alone. They are contending with the devil, cohorts of darkness (principalities and powers), and sin. Those that endured to the end shall be saved and they shall be given of the tree of life freely."
    },
    {
      title: "Pastoring A Little Flock",
      coverImage: "/lovable-uploads/3cdc28ce-b7a8-4c56-8c4a-dbd4e9194382.png",
      synopsis: "To the society, Pastoral work is a lazy man's job especially when pasturing a little flock. Little did men know that God will reward the faithfulness of His servants and not the number in their flock. The Pastor's work is the jack of all trade, master of all! Those who are genuinely called by God are able to endure and to whether the storm without relying on any other power except the Holy Spirit."
    },
    {
      title: "The Usefulness Of Money",
      coverImage: "/lovable-uploads/c6bae618-d900-40af-b0a7-eb643657692c.png",
      synopsis: "Money is a spirit. If you bow to it, it will enslave and kill you prematurely but if it bows to and worship you it will be like an errand boy to serve you. There are four seasons of man's life, morning, afternoon, evening and night. A man who wastes his time in his black hair will suffer, cry and morn with his white hair. This book will guide you to know how to manage your money and also maximally spend wisely to protect you at old age."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pastor's Publications</h2>
          <div className="w-24 h-1 bg-church mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pastor Joseph Omotayo Ologbonsaiye has authored numerous books to help believers grow in their faith
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {books.map((book, index) => (
            <div 
              key={index} 
              className="cursor-pointer transform transition-all hover:scale-105"
              onClick={() => setSelectedBook(book)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-center mt-3">{book.title}</h3>
            </div>
          ))}
        </div>
        
        {selectedBook && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex justify-center">
                    <img 
                      src={selectedBook.coverImage} 
                      alt={selectedBook.title} 
                      className="rounded shadow-lg max-h-72 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
                    <p className="text-gray-700">{selectedBook.synopsis}</p>
                    <p className="mt-4 text-gray-600 font-medium">Author: Pastor Joseph Ologbonsaiye</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="button-church"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="button-church inline-flex items-center">
            Contact Us to Order Books <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastorBooks;
