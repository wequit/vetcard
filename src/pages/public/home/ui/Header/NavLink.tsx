import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavLink = ({ to, children, isActive = false }: NavLinkProps) => (
  <Link
    to={to}
    className={`font-semibold text-md ${
      isActive ? "text-black" : "text-teal-700 hover:underline"
    }`}
  >
    {children}
  </Link>
);