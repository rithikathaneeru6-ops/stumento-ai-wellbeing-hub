import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import strumentoLogo from '@/assets/stumento-logo.png';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-card">
      <div className="container mx-auto max-w-6xl px-5 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 hover:scale-105">
            <div className="relative">
              <img 
                src={strumentoLogo} 
                alt="Stumento Logo" 
                className="w-10 h-10 object-contain animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-inter">
              Stumento
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex hover:bg-primary/10 transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-primary hover:opacity-90 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 rounded-full px-6">
                <i className="fas fa-sparkles mr-2"></i>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;