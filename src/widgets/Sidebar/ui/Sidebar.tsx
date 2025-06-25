import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/shared/ui/Logo';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useAuth } from "@/entities/user/model/useAuth";

import { ownerNavConfig, professionalNavConfig } from '../config/links';

export const Sidebar = () => {
    const { user } = useAuth();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navConfig = useMemo(() => {
        if (user?.role === 'professional') return professionalNavConfig;
        return ownerNavConfig;
    }, [user?.role]);

    const inactiveLinkClass = "text-slate-800 hover:bg-slate-100";
    const activeLinkClass = "bg-slate-100 text-slate-900 font-semibold";

    return (
        <motion.aside
            animate={{ width: isCollapsed ? '5.5rem' : '13rem' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-white border-r border-slate-200 flex flex-col flex-shrink-0"
        >
            <div className="p-4 h-16 flex items-center">
                <Logo />
            </div>

            <nav className="flex-grow p-3 space-y-4">
                {navConfig.map((section) => (
                    <div key={section.title} >
                        <AnimatePresence>
                            {!isCollapsed && (
                                <motion.h3
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider"
                                >
                                    {section.title}
                                </motion.h3>
                            )}
                        </AnimatePresence>
                        <ul className="space-y-4">
                            {section.links.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive ? activeLinkClass : inactiveLinkClass} ${isCollapsed ? 'justify-center' : 'space-x-4'}`
                                        }
                                    >
                                        <div className="text-xl w-6 flex justify-center">{link.icon}</div>
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}
                                                    className="flex-1"
                                                >
                                                    {link.text}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="p-3 mt-auto">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={`w-full flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors text-slate-800 hover:bg-slate-100 ${isCollapsed ? 'justify-center' : 'space-x-4'}`}
                >
                    <div className="text-xl w-6 flex justify-center">
                        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
                    </div>
                    <AnimatePresence>
                        {!isCollapsed && <motion.span>Свернуть</motion.span>}
                    </AnimatePresence>
                </button>
            </div>
        </motion.aside>
    );
};