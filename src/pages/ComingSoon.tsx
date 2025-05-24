
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Clock, CreditCard, Award, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for subscribing!",
      description: "We'll notify you when CardWise launches.",
    });
    
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full space-y-12 text-center">
          {/* Logo/Icon Section */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full">
                <Clock className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-medium uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              Coming Soon
              <Sparkles className="h-4 w-4" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              CardWise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The future of credit card comparison is coming. Get ready for intelligent insights and personalized recommendations.
            </p>
          </div>
          
          {/* Glass card with form */}
          <div className="max-w-md mx-auto animate-scale-in">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Be the first to know
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 pr-12 focus:bg-white/15 transition-all duration-200"
                  />
                  <ArrowRight className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl h-12 font-medium transition-all duration-200 hover:scale-105"
                >
                  Notify Me When We Launch
                </Button>
              </form>
              
              <p className="text-xs text-gray-400 mt-4">
                Join 2,000+ early subscribers. No spam, ever.
              </p>
            </div>
          </div>
          
          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="group cursor-pointer">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Smart Comparisons</h3>
                <p className="text-gray-400 text-sm leading-relaxed">AI-powered side-by-side card comparisons tailored to your spending habits</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/30">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Expert Insights</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Unbiased reviews and recommendations from financial experts</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-indigo-400/30">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Rewards Tracker</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Maximize your rewards with personalized optimization tools</p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="pt-12 border-t border-white/10 mt-16">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CardWise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
