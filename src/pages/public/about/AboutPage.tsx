import { Header } from "@/pages/public/home/ui/Header/Header";

export const AboutPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">О проекте VetCard</h1>
      <p className="text-lg text-gray-700">
        VetCard — это цифровая платформа для заботы о здоровье питомцев...
      </p>
    </main>
  </div>
);