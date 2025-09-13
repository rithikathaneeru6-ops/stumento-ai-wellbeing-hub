const About = () => {
  return (
    <section className="bg-card py-20 px-5 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative container mx-auto max-w-5xl text-center px-5">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-8">
            <i className="fas fa-sparkles text-primary"></i>
            <span className="text-primary font-semibold">Next-Generation Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-inter">
            What is <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Stumento</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed max-w-4xl mx-auto mb-12">
            Stumento is a revolutionary platform designed to transform student mental wellness through cutting-edge technology.
            We combine <span className="text-primary font-semibold">empathy</span> with <span className="text-primary font-semibold">innovation</span> to create 
            tools that help students thrive both academically and emotionally.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-elevated transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                <i className="fas fa-shield-heart text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground text-sm">Your privacy and data security are our top priorities</p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-elevated transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                <i className="fas fa-robot text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">AI-Powered</h3>
              <p className="text-muted-foreground text-sm">Advanced algorithms provide personalized insights</p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-elevated transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Community Focused</h3>
              <p className="text-muted-foreground text-sm">Connect with peers and mental health professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;