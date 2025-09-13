import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: "fas fa-smile-beam",
      title: "Mood Tracking",
      description: "Daily emotional check-ins with comprehensive mood tracking and analysis",
      benefits: ["Real-time mood logging", "Pattern recognition", "Personalized insights"]
    },
    {
      icon: "fas fa-brain",
      title: "AI Analysis",
      description: "Advanced AI-driven sentiment analysis to understand emotional patterns",
      benefits: ["Natural language processing", "Predictive analytics", "Early intervention alerts"]
    },
    {
      icon: "fas fa-heart",
      title: "Wellness Plans",
      description: "Personalized wellness suggestions based on individual needs and patterns",
      benefits: ["Custom recommendations", "Goal setting", "Progress tracking"]
    },
    {
      icon: "fas fa-chart-line",
      title: "Analytics Dashboard",
      description: "Visual dashboards showing mental health trends and improvements over time",
      benefits: ["Interactive charts", "Progress reports", "Data export options"]
    },
    {
      icon: "fas fa-users",
      title: "Community Support",
      description: "Connect with peers and counselors in a safe, moderated environment",
      benefits: ["Peer support groups", "Professional guidance", "Anonymous discussions"]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Privacy First",
      description: "End-to-end encryption and HIPAA compliance ensure your data stays private",
      benefits: ["Secure data storage", "Anonymous analytics", "User consent controls"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            Powerful Features for Mental Wellness
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Discover how Stumento's comprehensive suite of tools supports student mental health
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className={`${feature.icon} text-2xl text-primary`}></i>
                  </div>
                  <h3 className="text-xl font-bold font-inter text-foreground">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 font-inter">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <i className="fas fa-check text-primary text-xs"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter text-foreground">
            Ready to Transform Student Wellness?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-inter">
            Join thousands of students and educators already using Stumento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8">
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="px-8">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;