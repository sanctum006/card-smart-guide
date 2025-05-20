
import { 
  CreditCard,
  WalletCards,
  DollarSign,
  ShieldCheck
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CreditCard className="h-10 w-10 text-blue-600" />,
      title: "Find Your Perfect Card",
      description: "Our sophisticated matching algorithm helps you find the ideal credit card based on your spending habits and financial goals."
    },
    {
      icon: <WalletCards className="h-10 w-10 text-blue-600" />,
      title: "Compare Side by Side",
      description: "Compare features, fees, and rewards of multiple credit cards at once to make an informed decision."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-blue-600" />,
      title: "Maximize Rewards",
      description: "Learn strategies to maximize your rewards points, cash back, and other perks from your credit cards."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Security Insights",
      description: "Stay informed about the latest security features and fraud protection benefits offered by different credit cards."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CardWise</h2>
          <p className="text-xl text-gray-600">
            We make understanding credit card benefits simple and help you make the right choice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
