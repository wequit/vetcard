import { NavLink } from "@/shared/ui/NavLink";
import { Button } from "@/shared/ui/Button"; 
import { Logo } from "@/shared/ui/Logo";

const PublicNav = () => (
  <div className="flex items-center justify-between w-full">
    <div className="flex-shrink-0">
      <Logo />
    </div>
    <nav className="flex items-center gap-6">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/about">О проекте</NavLink>
      <Button to="/login" variant="outline" className="text-sm py-2 px-4">
        Войти
      </Button>
      <Button to="/register" variant="primary" className="text-sm py-2 px-4">
        Регистрация
      </Button>
    </nav>
  </div>
);

export default PublicNav;
