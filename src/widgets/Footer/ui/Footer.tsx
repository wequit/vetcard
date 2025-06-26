// FILE: src/widgets/Footer/ui/Footer.tsx

import { Logo } from '@/shared/ui/Logo';
import { Link } from 'react-router-dom';
import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa';

const FooterLinkColumn = ({ title, links }: { title: string, links: { href: string, text: string }[] }) => (
    <div>
        <h3 className="text-xs font-semibold text-slate-900 tracking-wider uppercase">{title}</h3>
        <ul className="mt-3 space-y-2">
            {links.map(link => (
                <li key={link.text}>
                    <Link to={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export const Footer = () => {
    const navigationLinks = [
        { href: '/articles', text: 'Статьи' },
        { href: '/products', text: 'Товары' },
        { href: '/assistant', text: 'AI Ассистент' },
    ];
    const supportLinks = [
        { href: '/about', text: 'О проекте' },
        { href: '/support#faq', text: 'Частые вопросы' },
        { href: '/support#contacts', text: 'Контакты' },
    ];

    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <Logo />
                        <p className="mt-4 text-slate-500 text-sm">
                            Ваш цифровой паспорт для здоровья питомца.
                        </p>
                    </div>

                    <FooterLinkColumn title="Навигация" links={navigationLinks} />
                    <FooterLinkColumn title="Поддержка" links={supportLinks} />
                    
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-sm text-slate-500 flex flex-col sm:flex-row gap-y-2 gap-x-6">
                        <span>© {new Date().getFullYear()} VetCard. Все права защищены.</span>
                        <div className='flex gap-x-6'>
                            <Link to="/support#terms" className="hover:text-slate-900">Условия использования</Link>
                            <Link to="/support#privacy" className="hover:text-slate-900">Политика конфиденциальности</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mt-4 sm:mt-0">
                        <a href="#" aria-label="Telegram" className="text-slate-400 hover:text-slate-500 transition-colors"><FaTelegram size={20} /></a>
                        <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-slate-500 transition-colors"><FaGithub size={20} /></a>
                        <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-slate-500 transition-colors"><FaYoutube size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};