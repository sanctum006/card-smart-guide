
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">CardWise</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Compare Cards
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Card Benefits
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Resources
          </a>
          <Button>Sign Up</Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-gray-700 py-2 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 py-2 hover:text-blue-600 font-medium">
              Compare Cards
            </a>
            <a href="#" className="text-gray-700 py-2 hover:text-blue-600 font-medium">
              Card Benefits
            </a>
            <a href="#" className="text-gray-700 py-2 hover:text-blue-600 font-medium">
              Resources
            </a>
            <Button className="w-full">Sign Up</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
