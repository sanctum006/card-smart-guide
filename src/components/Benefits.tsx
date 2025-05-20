
import { 
  Wallet, 
  Shield, 
  Gift, 
  Calendar,
  DollarSign 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-blue-600" />,
      title: "Cash Back Rewards",
      description: "Earn back a percentage of every purchase, often 1-5% depending on the category and card."
    },
    {
      icon: <Wallet className="h-10 w-10 text-blue-600" />,
      title: "Travel Perks",
      description: "From airport lounge access to free checked bags and priority boarding on flights."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Purchase Protection",
      description: "Coverage for eligible items against damage or theft for a limited period after purchase."
    },
    {
      icon: <Gift className="h-10 w-10 text-blue-600" />,
      title: "Welcome Bonuses",
      description: "Substantial sign-up bonuses worth hundreds in cash back or thousands in travel points."
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      title: "0% Intro APR",
      description: "Interest-free periods on purchases or balance transfers, typically lasting 12-18 months."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Credit Card Benefits <span className="text-blue-600">You Should Know About</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Many cardholders aren't taking full advantage of their credit card benefits. 
              Here are some valuable perks you might be missing out on.
            </p>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg">Learn More About Benefits</Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 scale-150 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                  <p className="text-lg opacity-90">
                    According to a recent survey, 67% of credit card holders don't fully understand all of their card benefits.
                  </p>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    The average cardholder misses out on $300 worth of benefits annually
                  </h3>
                  <p className="text-gray-600 mb-6">
                    From extended warranties to cell phone insurance, many cardholders are paying for benefits they never use.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        1
                      </div>
                      <p className="font-medium">Check your card benefits online</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        2
                      </div>
                      <p className="font-medium">Compare your current cards with others</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        3
                      </div>
                      <p className="font-medium">Create a strategy to maximize benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
