
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
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
      title: "Successfully subscribed!",
      description: "You'll receive our latest credit card offers and tips.",
    });
    
    // Reset form
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on the Latest Card Offers
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and never miss out on exclusive credit card deals, 
            promotions, and expert financial advice.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
