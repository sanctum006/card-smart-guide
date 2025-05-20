
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Clock, CreditCard, Award, BarChart3 } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Success
    toast({
      title: "Thank you for subscribing!",
      description: "We'll notify you when CardWise launches.",
    });
    
    // Reset form
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col dark">
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
            <div className="bg-blue-900/30 p-3 rounded-full">
              <Clock className="h-10 w-10 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mt-6">
            Coming Soon
          </h1>
          
          <div className="bg-gray-800 shadow-2xl rounded-lg p-6 mt-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              CardWise is under development
            </h2>
            
            <p className="text-gray-300 mb-6">
              We're working hard to bring you the best credit card comparison and information platform. Be the first to know when we launch!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Notify Me
              </Button>
              
              <p className="text-xs text-gray-400 mt-2">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 transition duration-300">
              <CreditCard className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-400">Compare Cards</h3>
              <p className="text-sm text-gray-300">Side-by-side comparisons</p>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 transition duration-300">
              <Award className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-400">Expert Reviews</h3>
              <p className="text-sm text-gray-300">Unbiased recommendations</p>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 transition duration-300">
              <BarChart3 className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-400">Smart Tools</h3>
              <p className="text-sm text-gray-300">Find your perfect card</p>
            </div>
          </div>
          
          <p className="text-gray-400 mt-8">
            &copy; {new Date().getFullYear()} CardWise. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
