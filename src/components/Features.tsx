const Features = () => {
  const features = [
    {
      icon: "fas fa-smile-beam",
      text: "Daily emotional check-ins with mood tracking",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "fas fa-brain",
      text: "AI-driven sentiment analysis",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "fas fa-heart",
      text: "Personalized wellness suggestions",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: "fas fa-chart-line",
      text: "Visual dashboards for mental trends",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="bg-muted py-20 px-5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      <div className="relative container mx-auto max-w-6xl px-5">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Our Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful tools designed to support student mental wellness through innovative technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-glow group-hover:animate-pulse-glow transition-all duration-500`}>
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-inter text-xl font-semibold leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Features;