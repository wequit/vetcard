
import { NavLink } from "@/shared/ui/NavLink";
import { Button } from "@/shared/ui/Button"; 
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "@/entities/user/model/useAuth";
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

const AuthNav = ({ user, onLogout }: { user: any; onLogout: () => void }) => (
  <nav className="flex items-center gap-6">
    <button className="text-slate-500 hover:text-slate-900 transition-colors">
      <FaBell className="w-5 h-5" />
    </button>
    <Link to="/userprofile" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
      <FaUserCircle className="w-8 h-8 text-slate-300" />
      <span className="text-sm font-medium">{user.name}</span>
    </Link>
    <Link to="/">
    <Button onClick={onLogout} variant="outline" className="text-sm py-2 px-4">
      Выйти
    </Button>
    </Link>
  </nav>
);

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-10">
      <div className="container mx-auto px-6 py-3 flex justify-end items-center border-b border-slate-200">
        {/* В зависимости от состояния авторизации, показываем разную навигацию */}
        {isAuthenticated ? <AuthNav user={user} onLogout={logout} /> : <PublicNav />}
      </div>
    </header>
  );
};