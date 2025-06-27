import { Header } from "@/widgets/Header/ui/Header";
import AboutPhoto from "@/assets/images/about.svg";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-lime-50 to-green-100 text-slate-900">
      <Header />

      <main className="container mx-auto px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Левая часть — фоновое изображение */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutPhoto}
            alt="About VetCard"
            className="w-full max-w-lg mx-auto md:mx-0"
          />
        </div>

        {/* Правая часть — текст */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            VetCard — помощник для хвостиков
          </h1>

          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Каждый питомец заслуживает заботы и внимания. Приложение VetCard помогает владельцам животных и ветеринарам быть на связи и отслеживать здоровье хвостатых друзей.
          </p>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Вы всегда будете в курсе прививок, приёмов у врача и истории болезни. Всё под рукой — в один клик.
          </p>


        
        </div>
      </main>




    </div>
  );
};