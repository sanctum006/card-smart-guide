
import { useState } from "react";
import { CreditCard, Gift, DollarSign, Star, Award, Calendar, Shield, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CreditCardInfo = () => {
  const [selectedCard, setSelectedCard] = useState("premium");

  const cardData = {
    premium: {
      name: "Premium Rewards Card",
      joiningFee: "$195",
      annualFee: "$195 (waived first year)",
      welcomeBenefits: [
        "80,000 bonus points after spending $4,000 in first 3 months",
        "Free airport lounge access for primary cardholder",
        "Complimentary travel insurance up to $500,000",
        "Priority customer service hotline"
      ],
      rewardSystem: {
        base: "1 point per $1 spent",
        categories: [
          { category: "Travel", rate: "5x points", description: "Airlines, hotels, car rentals" },
          { category: "Dining", rate: "3x points", description: "Restaurants, food delivery" },
          { category: "Gas", rate: "2x points", description: "Gas stations nationwide" },
          { category: "Everything else", rate: "1x point", description: "All other purchases" }
        ]
      },
      additionalBenefits: [
        "No foreign transaction fees",
        "Purchase protection up to $10,000",
        "Extended warranty coverage",
        "Concierge service 24/7"
      ]
    },
    cashback: {
      name: "Cash Back Essentials",
      joiningFee: "$0",
      annualFee: "$0",
      welcomeBenefits: [
        "$200 cash back after spending $1,000 in first 3 months",
        "0% intro APR for 15 months on purchases",
        "Free FICO credit score monitoring",
        "Mobile app with spending insights"
      ],
      rewardSystem: {
        base: "1% cash back on all purchases",
        categories: [
          { category: "Rotating categories", rate: "5% cash back", description: "Up to $1,500 quarterly (activation required)" },
          { category: "Grocery stores", rate: "2% cash back", description: "Up to $2,500 quarterly" },
          { category: "Gas stations", rate: "2% cash back", description: "Up to $1,000 quarterly" },
          { category: "Everything else", rate: "1% cash back", description: "No limit" }
        ]
      },
      additionalBenefits: [
        "Cell phone protection up to $600",
        "Price protection guarantee",
        "Zero liability fraud protection",
        "Free credit score updates"
      ]
    },
    travel: {
      name: "World Traveler Elite",
      joiningFee: "$450",
      annualFee: "$450",
      welcomeBenefits: [
        "100,000 miles after spending $5,000 in first 3 months",
        "Free checked bags for you and companion",
        "Priority boarding and seat upgrades",
        "Airport lounge access worldwide"
      ],
      rewardSystem: {
        base: "1 mile per $1 spent",
        categories: [
          { category: "Airline purchases", rate: "5x miles", description: "Direct airline purchases" },
          { category: "Hotels", rate: "3x miles", description: "Hotel bookings worldwide" },
          { category: "Travel", rate: "2x miles", description: "All other travel purchases" },
          { category: "Everything else", rate: "1x mile", description: "All other purchases" }
        ]
      },
      additionalBenefits: [
        "Trip cancellation insurance",
        "Lost luggage reimbursement",
        "Global entry fee credit",
        "24/7 travel assistance"
      ]
    }
  };

  const currentCard = cardData[selectedCard as keyof typeof cardData];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Credit Card Information
            </h1>
          </div>
          <p className="text-gray-400 mt-2">Complete details about joining fees, welcome benefits, and reward systems</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Card Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Select a Credit Card</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(cardData).map(([key, card]) => (
              <button
                key={key}
                onClick={() => setSelectedCard(key)}
                className={`group p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedCard === key 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-lg shadow-blue-500/20' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/80'
                }`}
              >
                <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2">Annual Fee: {card.annualFee}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Card Details */}
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">{currentCard.name}</h2>
              <div className="flex gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <p className="text-blue-100 text-sm">Joining Fee</p>
                  <p className="text-xl font-semibold">{currentCard.joiningFee}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <p className="text-blue-100 text-sm">Annual Fee</p>
                  <p className="text-xl font-semibold">{currentCard.annualFee}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="fees" className="w-full">
            <TabsList className="w-full justify-start p-0 h-auto bg-gray-900 border-b border-gray-700 rounded-none">
              <TabsTrigger value="fees" className="px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-gray-800 text-gray-300 data-[state=active]:text-white">
                <DollarSign className="h-4 w-4 mr-2" />
                Fees Structure
              </TabsTrigger>
              <TabsTrigger value="welcome" className="px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-gray-800 text-gray-300 data-[state=active]:text-white">
                <Gift className="h-4 w-4 mr-2" />
                Welcome Benefits
              </TabsTrigger>
              <TabsTrigger value="rewards" className="px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-gray-800 text-gray-300 data-[state=active]:text-white">
                <Star className="h-4 w-4 mr-2" />
                Reward System
              </TabsTrigger>
              <TabsTrigger value="benefits" className="px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-gray-800 text-gray-300 data-[state=active]:text-white">
                <Shield className="h-4 w-4 mr-2" />
                Additional Benefits
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fees" className="p-6 bg-gray-800">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-400" />
                  Fee Structure
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-white mb-3">One-time Fees</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Joining Fee:</span>
                        <span className="font-semibold text-green-400">{currentCard.joiningFee}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-white mb-3">Recurring Fees</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Annual Fee:</span>
                        <span className="font-semibold text-green-400">{currentCard.annualFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold text-blue-300 mb-2">Fee Waiver Information</h4>
                  <p className="text-blue-200">
                    {selectedCard === 'cashback' 
                      ? "This card has no joining fee or annual fee - completely free to own!"
                      : "First year annual fee may be waived with qualifying spending or as a promotional offer."
                    }
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="welcome" className="p-6 bg-gray-800">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Gift className="h-5 w-5 text-blue-400" />
                  Welcome Benefits Package
                </h3>
                <div className="grid gap-4">
                  {currentCard.welcomeBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                      <Award className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-green-200">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <h4 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Important Timeline
                  </h4>
                  <p className="text-yellow-200">Welcome benefits must typically be earned within the first 3-6 months of account opening. Terms and conditions apply.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rewards" className="p-6 bg-gray-800">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Star className="h-5 w-5 text-blue-400" />
                  Reward System Details
                </h3>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold text-blue-300 mb-2">Base Earning Rate</h4>
                  <p className="text-blue-200 text-lg">{currentCard.rewardSystem.base}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Category Multipliers</h4>
                  <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-700 hover:bg-gray-800/50">
                          <TableHead className="text-gray-300">Category</TableHead>
                          <TableHead className="text-gray-300">Earning Rate</TableHead>
                          <TableHead className="text-gray-300">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentCard.rewardSystem.categories.map((category, index) => (
                          <TableRow key={index} className="border-gray-700 hover:bg-gray-800/30">
                            <TableCell className="font-medium text-white">{category.category}</TableCell>
                            <TableCell>
                              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {category.rate}
                              </span>
                            </TableCell>
                            <TableCell className="text-gray-400">{category.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="p-6 bg-gray-800">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  Additional Benefits & Protection
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentCard.additionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                      <Shield className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-purple-200">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-3">Ready to Apply?</h3>
            <p className="text-gray-400 mb-6">Get your {currentCard.name} and start earning rewards today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-8">
                Compare More Cards
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardInfo;
