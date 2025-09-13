import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import strumentoLogo from '@/assets/stumento-logo.png';

const Signup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-5 py-12">
        <Card className="w-full max-w-md p-8 shadow-elevated">
          <div className="text-center mb-8">
            <img 
              src={strumentoLogo} 
              alt="Stumento Logo" 
              className="w-16 h-16 mx-auto mb-4 object-contain"
            />
            <h1 className="text-2xl font-bold text-foreground font-inter mb-2">
              Join Stumento
            </h1>
            <p className="text-muted-foreground font-inter">
              Start your mental wellness journey today
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="John"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Doe"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@university.edu"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a strong password"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                I am a...
              </Label>
              <select 
                id="role" 
                className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="student">Student</option>
                <option value="educator">Educator</option>
                <option value="counselor">Counselor</option>
                <option value="administrator">Administrator</option>
              </select>
            </div>

            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 rounded border-border" 
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Link to="/dashboard">
              <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Create Account
              </Button>
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <Button variant="outline" className="w-full" size="lg">
              <i className="fab fa-google mr-2"></i>
              Continue with Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;