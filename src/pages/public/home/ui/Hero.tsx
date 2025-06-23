import { Header } from "@/widgets/Header/ui/Header";
import { HeroText } from "./Hero/HeroText";
import { HeroImage } from "./Hero/HeroImage";

export const Hero = () => (
  <div className="min-h-screen bg-white text-gray-900">
    <Header />
    <main className="container mx-auto px-6 py-16 flex justify-around items-center rounded-md">
      <HeroText />
      <HeroImage />
    </main>
  </div>
);