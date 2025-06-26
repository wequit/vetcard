import { useAuth } from '@/entities/user/model/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, ReactNode, JSX } from 'react';
import { 
    FaEnvelope, FaPhone, FaTelegramPlane, FaGithub,
    FaArrowLeft
} from 'react-icons/fa';
import { faqItems } from '@/features/faq-accordion/model/faq-data';
import { FaqAccordion } from '@/features/faq-accordion/ui/FaqAccordion';
import { useScrollSpy } from '@/shared/lib/hooks/useScrollSpy';
import { SupportSidebar } from '@/widgets/support-sidebar/ui/SupportSidebar';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button'; 

const sections = [
    { id: 'faq', label: 'Частые вопросы' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'terms', label: 'Условия использования' },
    { id: 'privacy', label: 'Политика конфиденциальности' },
];
const SectionWrapper = ({ id, title, children }: { id: string, title: string, children: ReactNode }) => (
    <section id={id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{title}</h2>
        <div className="text-slate-600"> 
            {children}
        </div>
    </section>
);
const ContactCard = ({ icon, title, text, href }: { icon: JSX.Element, title: string, text: string, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block p-6 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group">
        <div className="flex items-center gap-4">
            <div className="text-teal-500 text-2xl">{icon}</div>
            <div>
                <h4 className="font-semibold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500 group-hover:text-teal-600 transition-colors">{text}</p>
            </div>
        </div>
    </a>
);


export const SupportPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    const sectionIds = sections.map(s => s.id);
    const activeSectionId = useScrollSpy(sectionIds, { rootMargin: '-20% 0px -80% 0px' });
    
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleGoBack = () => {
        if (isAuthenticated) {
            navigate('/dashboard'); 
        } else {
            navigate('/'); 
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            
            <div className="mb-8">
                <button 
                    onClick={handleGoBack}
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-semibold transition-colors"
                >
                    <FaArrowLeft />
                    {/* Текст кнопки можно сделать более конкретным */}
                    {isAuthenticated ? 'Вернуться в кабинет' : 'Вернуться на главную'}
                </button>
            </div>

            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900">Центр Помощи</h1>
                <p className="mt-3 text-lg text-slate-500">Все, что вам нужно знать, в одном месте.</p>
            </header>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <SupportSidebar sections={sections} activeId={activeSectionId} />
                <div className="w-full lg:flex-1 space-y-8">
                    <SectionWrapper id="faq" title="Частые вопросы (FAQ)">
                        <FaqAccordion items={faqItems} />
                    </SectionWrapper>
                    
                    <SectionWrapper id="contacts" title="Свяжитесь с нами">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <ContactCard icon={<FaPhone />} title="Позвоните нам" text="+996 704 020 784" href="tel:+996704020784" />
                                <ContactCard icon={<FaTelegramPlane />} title="Напишите в Telegram" text="@wequit1" href="https://t.me/wequit1" />
                                <ContactCard icon={<FaEnvelope />} title="Отправьте email" text="adilhanimasev6@gmail.com" href="mailto:adilhanimasev6@gmail.com" />
                                <ContactCard icon={<FaGithub />} title="Посмотрите код" text="github.com/wequit" href="https://github.com/wequit" />
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-slate-800 mb-4">Форма обратной связи</h4>
                                <form className="space-y-4">
                                    <Input type="email" placeholder="Ваш Email" required />
                                    <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" rows={5} placeholder="Ваше сообщение..." required></textarea>
                                    <Button type="submit" className="w-full">Отправить</Button>
                                </form>
                            </div>
                        </div>
                    </SectionWrapper>

                    <SectionWrapper id="terms" title="Условия использования">
                        <p>Нужно уточнить текст...</p>
                    </SectionWrapper>
                    <SectionWrapper id="privacy" title="Политика конфиденциальности">
                        <p>Нужно уточнить текст...</p>
                    </SectionWrapper>
                </div>
            </div>
        </div>
    );
};