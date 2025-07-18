import BaristaTrainingSection from "@/components/landing/BaristaTrainingSection";
import BuyOnlineSection from "@/components/landing/BuyOnlineSection";
import CoffeeEquipmentSection from "@/components/landing/CoffeeEquipmentSection";
import CoffeeFarmingSection from "@/components/landing/CoffeeFarmingSection";
import CompanyStorySection from "@/components/landing/CompanyStorySection";
import ExpressSection from "@/components/landing/ExpressSection";
import HeroSection from "@/components/landing/HeroSection";
import ProductsSection from "@/components/landing/ProductsSection";


export default function HimalayanJavaLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductsSection />
      <BuyOnlineSection />
      <ExpressSection />
      <CompanyStorySection />
      <CoffeeFarmingSection />
      <CoffeeEquipmentSection />
      <BaristaTrainingSection />
    </div>
  );
}
