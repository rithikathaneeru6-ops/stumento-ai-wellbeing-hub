import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import strumentoLogo from '@/assets/stumento-logo.png';

const Login = () => {
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
              Welcome Back
            </h1>
            <p className="text-muted-foreground font-inter">
              Sign in to continue your wellness journey
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Link to="/dashboard">
              <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Sign In
              </Button>
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Sign up
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

export default Login;