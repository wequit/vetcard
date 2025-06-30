import { useAuth } from "@/entities/user/model/useAuth";
import PublicNav from "./parts/PublicNav";
import {AuthNav} from "./parts/AuthNav";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuth(); 

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-10">
       <div className="absolute top-4 left-10 flex items-center gap-4">
      </div>
      <div className="container mx-auto px-6 py-3 flex justify-end items-center border-b border-slate-200">
        {isAuthenticated && user ? <AuthNav user={user} onLogout={logout} /> : <PublicNav />}
      </div>
    </header>
  );
};