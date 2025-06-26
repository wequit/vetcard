import { Logo } from '@/shared/ui/Logo';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';

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
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-8">
                    
                    <div className="col-span-2 md:col-span-1">
                        <Logo />
                        <p className="mt-3 text-slate-500 text-sm">
                            Ваш цифровой паспорт для здоровья питомца.
                        </p>
                    </div>

                    <div className="hidden md:block md:col-span-2"></div>

                    <FooterLinkColumn title="Навигация" links={navigationLinks} />
                    <FooterLinkColumn title="Поддержка" links={supportLinks} />
                    
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-y-4">
                    <div className="text-xs text-slate-500 text-center sm:text-left">
                        <div>© {new Date().getFullYear()} VetCard. Все права защищены.</div>
                        <div className='mt-2 sm:mt-0 flex flex-col sm:flex-row gap-y-2 gap-x-4'>
                            <Link to="/support#terms" className="hover:text-slate-900">Условия использования</Link>
                            <Link to="/support#privacy" className="hover:text-slate-900">Политика конфиденциальности</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-slate-400 hover:text-slate-500 transition-colors"><FaTelegram size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-slate-500 transition-colors"><FaInstagram size={20} /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-slate-500 transition-colors"><FaFacebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};