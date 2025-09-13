import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Psychology Officer",
      description: "PhD in Clinical Psychology with 15+ years in student mental health",
      image: "fas fa-user-md"
    },
    {
      name: "Alex Chen",
      role: "Chief Technology Officer", 
      description: "Former Google engineer specializing in AI and machine learning",
      image: "fas fa-code"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Student Experience",
      description: "MSW with expertise in campus counseling and peer support programs",
      image: "fas fa-heart"
    }
  ];

  const values = [
    {
      icon: "fas fa-shield-heart",
      title: "Privacy First",
      description: "Your mental health data is sacred. We use end-to-end encryption and never sell your information."
    },
    {
      icon: "fas fa-users",
      title: "Inclusive Community",
      description: "Mental health affects everyone. We create safe spaces for all students, regardless of background."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Evidence-Based",
      description: "Every feature is grounded in psychological research and validated by mental health professionals."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Human-Centered",
      description: "Technology enhances, never replaces, human connection and professional mental health care."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            About Stumento
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Empowering students with AI-driven mental wellness support
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-inter">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-8">
            The student mental health crisis is real. 1 in 3 college students report experiencing significant mental health challenges, 
            yet many don't seek help due to stigma, accessibility barriers, or simply not knowing where to start.
          </p>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            Stumento bridges this gap by providing an intuitive, private, and supportive platform that meets students where they are, 
            offering personalized insights and connecting them with appropriate resources when needed.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-inter">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elevated transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-inter">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-inter">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-elevated transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${member.image} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-inter">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4 font-inter">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground font-inter">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50K+</h3>
              <p className="opacity-90">Students Supported</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="opacity-90">Partner Universities</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">89%</h3>
              <p className="opacity-90">Report Improved Well-being</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="opacity-90">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter text-foreground">
            Ready to Join Our Mission?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-inter">
            Help us create a world where every student has access to mental wellness support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8">
                Get Started Today
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;