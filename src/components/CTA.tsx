import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative bg-gradient-primary text-primary-foreground py-24 px-5 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/80 via-purple-600/80 to-primary/80 animate-gradient-shift bg-[length:200%_100%]"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      
      <div className="relative container mx-auto max-w-5xl text-center px-5">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <i className="fas fa-rocket text-white"></i>
            <span className="text-white font-semibold">Join 50,000+ Students</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-inter leading-tight">
            Ready to <span className="relative">
              <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
                Transform
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full"></div>
            </span> Student Wellness?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 font-inter opacity-90 max-w-4xl mx-auto leading-relaxed">
            Join thousands of educators and institutions who trust Stumento to empower their students' mental well-being. 
            Start your journey today with our <span className="font-bold text-white">free trial</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/signup">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-4 font-bold rounded-full shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-110 border-2 border-white"
              >
                <i className="fas fa-star mr-3"></i>
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm text-xl px-12 py-4 font-bold rounded-full transition-all duration-500 hover:scale-110"
              >
                <i className="fas fa-play mr-3"></i>
                Watch Demo
              </Button>
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-blue-400"></i>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-purple-400"></i>
              <span>Setup in 5 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;