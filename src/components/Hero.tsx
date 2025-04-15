
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1548625361-1adcab316530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  buttonText,
  buttonLink,
  overlay = true,
}: HeroProps) => {
  return (
    <div 
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && <div className="absolute inset-0 bg-black opacity-50"></div>}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">{subtitle}</p>}
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="button-gold inline-flex items-center">
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
