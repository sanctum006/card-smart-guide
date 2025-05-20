
import { Button } from "@/components/ui/button";
import { WalletCards } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-20 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-2xl md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Find the <span className="text-blue-600">perfect card</span> for your lifestyle
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compare benefits, rewards, and fees of hundreds of credit cards. 
              Make smarter financial decisions with our comprehensive guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Compare Cards
              </Button>
              <Button size="lg" variant="outline">
                View Card Benefits
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 scale-150 blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg transform -rotate-6">
                  <WalletCards className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Travel Rewards</h3>
                  <p className="text-blue-100">Earn points for flights, hotels, and more</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-xl shadow-lg transform rotate-6 mt-8">
                  <WalletCards className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Cash Back</h3>
                  <p className="text-indigo-100">Get cash back on everyday purchases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-16 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
    </section>
  );
};

export default Hero;
