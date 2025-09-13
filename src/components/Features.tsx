const Features = () => {
  const features = [
    {
      icon: "fas fa-smile-beam",
      text: "Daily emotional check-ins with mood tracking"
    },
    {
      icon: "fas fa-brain",
      text: "AI-driven sentiment analysis"
    },
    {
      icon: "fas fa-heart",
      text: "Personalized wellness suggestions"
    },
    {
      icon: "fas fa-chart-line",
      text: "Visual dashboards for mental trends"
    }
  ];

  return (
    <section className="bg-muted py-16 px-5">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-inter">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card flex items-center gap-4 transition-all duration-300 hover:shadow-elevated hover:scale-105"
            >
              <i className={`${feature.icon} text-2xl text-primary flex-shrink-0`}></i>
              <span className="text-foreground font-inter text-lg">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;