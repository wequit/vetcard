import { Link } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useSidebarContext } from '@/widgets/Sidebar/model/SidebarContext';
import { Button } from "@/shared/ui/Button";

export interface AuthNavProps {
    user: {
        name: string;
        role: string;
    };
    onLogout: () => void;
}
export const AuthNav = ({ user, onLogout }: AuthNavProps) => {
    const { toggle: toggleSidebar } = useSidebarContext();

    return (
        <>
            {/* Навигация для ДЕСКТОПА (скрывается на мобильных) */}
            <nav className="hidden lg:flex items-center gap-6">

                <Link
                    to={user.role === "professional" ? "/mydata" : "/userprofile"}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                    <FaUserCircle className="w-8 h-8 text-slate-300" />
                    <span className="text-sm font-medium">{user.name}</span>
                </Link>
                <Link to="/">
                    <Button onClick={onLogout} variant="outline" className="text-sm py-2 px-4">
                        Выйти
                    </Button>
                </Link>
            </nav>

            {/* Кнопка-бургер для МОБИЛЬНЫХ (скрывается на десктопе) */}
            <div className="lg:hidden flex justify-between items-center w-full">
                <Link
                    to={user.role === "professional" ? "/mydata" : "/userprofile"}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                    <FaUserCircle className="w-8 h-8 text-slate-300" />
                    <span className="text-sm font-medium">{user.name}</span>
                </Link>
                <button onClick={toggleSidebar} className="p-2 text-slate-800">
                    <FaBars size={20} />
                </button>
            </div>
        </>
    );
};