
import { useState } from "react";
import { CreditCard, Check, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const CardComparison = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Cards" },
    { id: "travel", name: "Travel" },
    { id: "cashback", name: "Cash Back" },
    { id: "business", name: "Business" },
    { id: "students", name: "Students" }
  ];

  const cards = [
    {
      id: 1,
      name: "Premium Traveler",
      category: "travel",
      issuer: "Global Bank",
      annualFee: "$95",
      rewardsRate: "3x on travel, 2x on dining",
      signupBonus: "60,000 points",
      benefits: ["No foreign transaction fees", "Airport lounge access", "Travel insurance"],
      color: "bg-gradient-to-r from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      name: "Cash Rewards Plus",
      category: "cashback",
      issuer: "National Credit",
      annualFee: "$0",
      rewardsRate: "5% rotating categories, 1% on everything else",
      signupBonus: "$200 cash back",
      benefits: ["No annual fee", "0% intro APR", "Cell phone protection"],
      color: "bg-gradient-to-r from-green-500 to-emerald-700"
    },
    {
      id: 3,
      name: "Student Builder",
      category: "students",
      issuer: "University Financial",
      annualFee: "$0",
      rewardsRate: "2% on textbooks and dining",
      signupBonus: "$50 statement credit",
      benefits: ["Build credit history", "Good grades rewards", "No credit history required"],
      color: "bg-gradient-to-r from-orange-400 to-red-600"
    }
  ];

  const filteredCards = selectedCategory === "all" 
    ? cards 
    : cards.filter(card => card.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Credit Cards</h2>
          <p className="text-xl text-gray-600">
            Find the right card for your needs by comparing features side by side.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCards.map(card => (
                  <div key={card.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className={`${card.color} p-6 relative h-48 flex items-center justify-center`}>
                      <CreditCard className="h-16 w-16 text-white opacity-30 absolute right-4 top-4" />
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-1">{card.name}</h3>
                        <p className="text-sm text-white/80">{card.issuer}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-1">Annual Fee</p>
                        <p className="font-semibold">{card.annualFee}</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-1">Rewards Rate</p>
                        <p className="font-semibold">{card.rewardsRate}</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-1">Sign-up Bonus</p>
                        <p className="font-semibold">{card.signupBonus}</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">Key Benefits</p>
                        <ul className="space-y-2">
                          {card.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">Learn More</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredCards.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No cards found in this category. Check back soon for updates!</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View All Cards</Button>
        </div>
      </div>
    </section>
  );
};

export default CardComparison;
