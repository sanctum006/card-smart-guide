
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CardComparison from "../components/CardComparison";
import Benefits from "../components/Benefits";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <CardComparison />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
