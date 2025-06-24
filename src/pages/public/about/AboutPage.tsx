import { Header } from "@/pages/public/home/ui/Header/Header";
import dogImage from "./dog.jpg"; // Импорт локального изображения

export const AboutPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
  
    <main className="container mx-auto px-6 md:px-20 py-12">
  <section className="flex flex-col md:flex-row justify-between items-start">
    {/* Текстовый блок */}
    <div className="flex-1 mb-8 md:mb-0 md:mr-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#518B86] mb-6">
        О проекте VetCard
      </h1>
      <p className="text-gray-800 text-lg leading-relaxed mb-4">
            <strong>VetCard</strong> — это цифровой помощник для владельцев животных, ветеринаров и клиник.
            Мы создаем платформу, которая помогает заботиться о здоровье питомцев:
            удобно, современно и с применением искусственного интеллекта.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Наша система объединяет всех участников: от хозяев до ветеринаров, предоставляя доступ к истории болезней,
            напоминаниям о прививках и персонализированным рекомендациям.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Наша цель — сделать ветеринарную помощь понятной, доступной и организованной. С VetCard питомцы всегда под защитой.
          </p>
    </div>

    {/* Изображение */}
    <div className="bg-[#518B86] p-5 rounded-lg mt-4 md:mt-0">
      <img
        src={dogImage}
        alt="Щенок на осмотре"
        className="w-[400px] md:w-[500px] rounded-md object-cover"
      />
    </div>
  </section>
</main>

  </div>
);
