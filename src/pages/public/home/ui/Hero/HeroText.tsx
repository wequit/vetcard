import { Button } from "@/pages/public/home/ui/Button";
import { Link } from "react-router-dom";

export const HeroText = () => (
  <div className="max-w-lg">
    <h1 className="text-2xl font-bold mb-4">
      <span className="font-extrabold">VetCard</span> — умный помощник<br />по здоровью питомцев
    </h1>
    <p className="text-md text-gray-800 mb-6 leading-relaxed">
      Цифровая медицинская карта для вашего питомца. Напоминания, AI-советы, история здоровья — всё в одном месте.
    </p>
    <Link to="/register">
      <Button variant="primary">
        Зарегистрироваться
      </Button>
    </Link> 
  </div>
);