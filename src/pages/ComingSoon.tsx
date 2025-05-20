
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Clock } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mt-6">
            Coming Soon
          </h1>
          
          <div className="bg-white shadow-xl rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              CardWise is under development
            </h2>
            
            <p className="text-gray-600 mb-6">
              We're working hard to bring you the best credit card comparison and information platform. Be the first to know when we launch!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Notify Me
              </Button>
              
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Compare Cards</h3>
              <p className="text-sm text-gray-600">Side-by-side comparisons</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Expert Reviews</h3>
              <p className="text-sm text-gray-600">Unbiased recommendations</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Smart Tools</h3>
              <p className="text-sm text-gray-600">Find your perfect card</p>
            </div>
          </div>
          
          <p className="text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} CardWise. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
