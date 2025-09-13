import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-5">
      <div className="container mx-auto max-w-4xl text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">
          Ready to Elevate Student Wellness?
        </h2>
        <p className="text-lg md:text-xl mb-8 font-inter opacity-90 max-w-3xl mx-auto">
          Join educators and institutions who trust Stumento to empower their students' mental well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-elevated"
            >
              Get Started Free
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 border-white text-white hover:bg-white hover:text-primary"
            >
              View Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;