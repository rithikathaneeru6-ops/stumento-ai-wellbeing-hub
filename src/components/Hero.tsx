import strumentoLogo from '@/assets/stumento-logo.png';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="relative bg-gradient-hero text-white text-center py-24 px-5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative container mx-auto max-w-6xl px-5">
        <div className="animate-fade-in">
          <img 
            src={strumentoLogo} 
            alt="Stumento Logo" 
            className="w-24 h-24 mx-auto mb-8 object-contain animate-float shadow-glow rounded-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent leading-tight">
            Welcome to Stumento
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up">
            Your partner in enhancing student mental wellness through AI-driven insights and support. 
            Transform your campus mental health with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{animationDelay: '0.3s'}}>
            <Link to="/signup">
              <Button 
                size="lg"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-110"
              >
                <i className="fas fa-rocket mr-3"></i>
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full transition-all duration-500 hover:scale-110"
              >
                <i className="fas fa-play mr-3"></i>
                View Demo
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-20">
          <i className="fas fa-brain text-6xl animate-float" style={{animationDelay: '2s'}}></i>
        </div>
        <div className="absolute top-1/3 right-0 transform -translate-y-1/2 opacity-20">
          <i className="fas fa-heart text-5xl animate-float" style={{animationDelay: '1.5s'}}></i>
        </div>
      </div>
    </header>
  );
};

export default Hero;