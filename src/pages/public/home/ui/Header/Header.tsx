import { Logo } from "@/shared/ui/Logo";
import { NavLink } from "./NavLink";

export const Header = () => (
  <header className="container mx-auto px-6 py-3 flex justify-between items-center border-b border-gray-200">
    <Logo />
    <nav className="flex gap-8">
      <NavLink to="/" isActive>Главная</NavLink>
      <NavLink to="/about">О проекте</NavLink>
      <NavLink to="/login">Войти</NavLink>
    </nav>
  </header>
);