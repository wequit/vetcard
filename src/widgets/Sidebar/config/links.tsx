
import { FaHome, FaPaw, FaRobot, FaBell, FaNewspaper, FaShoppingBag, FaUserMd } from 'react-icons/fa';
import type { ReactElement } from "react";

export interface NavLinkItem {
    to: string;
    icon: ReactElement;
    text: string;
}

export interface NavSection {
    title: string;
    links: NavLinkItem[];
}

export const ownerNavConfig: NavSection[] = [
    {
        title: 'Управление',
        links: [
            { to: "/dashboard", icon: <FaHome />, text: "Главная" },
            { to: "/mypets", icon: <FaPaw />, text: "Мои питомцы" },
            { to: "/reminders", icon: <FaBell />, text: "Напоминания" },
        ]
    },
    {
        title: 'Инструменты',
        links: [
            { to: "/assistant", icon: <FaRobot />, text: "AI ассистент" },
            { to: "/articles", icon: <FaNewspaper />, text: "Статьи" },
            { to: "/products", icon: <FaShoppingBag />, text: "Товары" },
        ]
    }
];

export const professionalNavConfig: NavSection[] = [
    {
        title: 'Рабочая область',
        links: [
            { to: "/mydata", icon: <FaUserMd />, text: "Мои данные" },
        ]
    },
    {
        title: 'Инструменты',
        links: [
            { to: "/assistant", icon: <FaRobot />, text: "AI ассистент" },
            { to: "/articles", icon: <FaNewspaper />, text: "Статьи" },
            { to: "/products", icon: <FaShoppingBag />, text: "Товары" },
        ]
    }
];