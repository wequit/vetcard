import { Header } from "@/widgets/Header/ui/Header";
import dogImage from './dog.jpg';

export const AboutPage = () => (
  <div className="min-h-screen bg-white">
    <Header />

    <main className="container mx-auto px-6 py-8 md:px-12 md:py-16 lg:px-20">
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-12">
        
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#518B86] mb-6">
            О проекте VetCard
          </h1>
          <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>
              <strong>VetCard</strong> — это цифровой помощник для владельцев животных, ветеринаров и клиник.
              Мы создаем платформу, которая помогает заботиться о здоровье питомцев:
              удобно, современно и с применением искусственного интеллекта.
            </p>
            <p>
              Наша система объединяет всех участников: от хозяев до ветеринаров, предоставляя доступ к истории болезней,
              напоминаниям о прививках и персонализированным рекомендациям.
            </p>
            <p>
              Наша цель — сделать ветеринарную помощь понятной, доступной и организованной. С VetCard питомцы всегда под защитой.
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto flex-shrink-0">
            <div className="bg-[#518B86] p-4 rounded-lg">
              <img
                src={dogImage}
                alt="Щенок на осмотре"
                className="w-full max-w-md mx-auto md:w-[450px] rounded-md object-cover"
              />
            </div>
        </div>

      </section>
    </main>

  </div>
);