import { Link } from "react-router-dom";
import strumentoLogo from '@/assets/stumento-logo.png';

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", path: "/features" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Pricing", path: "/pricing" },
        { name: "Demo", path: "/demo" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "HIPAA Compliance", path: "/hipaa" }
      ]
    }
  ];

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      <div className="relative container mx-auto max-w-6xl px-5 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <img 
                src={strumentoLogo} 
                alt="Stumento Logo" 
                className="w-12 h-12 object-contain animate-float"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-inter">
                Stumento
              </span>
            </Link>
            <p className="text-muted-foreground font-inter leading-relaxed mb-6 max-w-md">
              Transforming student mental wellness through AI-driven insights and compassionate support. 
              Join thousands of institutions already making a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-lg font-bold text-foreground mb-4 font-inter">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border/50 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-inter">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6 font-inter">
              Get the latest updates on mental health resources and platform improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-card hover:shadow-elevated">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-inter">
            © 2024 Stumento. All rights reserved. Made with 💜 for student wellness.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-green-500"></i>
              HIPAA Compliant
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-lock text-blue-500"></i>
              SOC 2 Certified
            </span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-5">
        <i className="fas fa-heart text-6xl animate-float" style={{animationDelay: '1s'}}></i>
      </div>
      <div className="absolute bottom-20 left-20 opacity-5">
        <i className="fas fa-brain text-5xl animate-float" style={{animationDelay: '2s'}}></i>
      </div>
    </footer>
  );
};

export default Footer;