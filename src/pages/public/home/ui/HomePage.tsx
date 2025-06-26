import { FaShieldAlt, FaCalendarCheck, FaBrain } from 'react-icons/fa';
import { Header } from '@/widgets/Header/ui/Header';
import { Button } from '@/shared/ui/Button';
import PetIllustration from '@/assets/images/Veterinary-bro.png';
import { JSX } from 'react';

const FeatureCard = ({ icon, title, children }: { icon: JSX.Element, title: string, children: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
        <div className="text-teal-500 mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p className="mt-2 text-slate-500 text-sm">{children}</p>
    </div>
);

export const HomePage = () => {
    return (
        <div className="bg-slate-50">
            <Header />

            <main>
                <section className="container mx-auto px-6 py-16 sm:py-20 md:py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        Вся забота о питомце <br /> в одном <span className="text-teal-500">удобном месте</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
                        VetCard помогает вам отслеживать здоровье, управлять записями и никогда не забывать о важных процедурах для вашего любимца.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/register" variant="primary" className="w-full sm:w-auto text-base">
                            Начать работу
                        </Button>
                        <Button to="/about" variant="outline" className="w-full sm:w-auto text-base">
                            Узнать больше
                        </Button>
                    </div>
                </section>

                <section className="bg-white py-16 sm:py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Все, что вам нужно</h2>
                            <p className="mt-3 text-base sm:text-lg text-slate-500">Управляйте здоровьем питомца легко и без стресса.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard icon={<FaShieldAlt size={32} />} title="Единая медкарта">
                                Вся история болезней, прививок и анализов всегда под рукой и доступна вашему ветеринару.
                            </FeatureCard>
                            <FeatureCard icon={<FaCalendarCheck size={32} />} title="Умные напоминания">
                                Мы напомним о предстоящем визите к врачу, приеме лекарств или необходимой вакцинации.
                            </FeatureCard>
                            <FeatureCard icon={<FaBrain size={32} />} title="AI-Ассистент">
                                Получайте быстрые ответы на вопросы об уходе и здоровье, основанные на рекомендациях ветеринаров.
                            </FeatureCard>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 py-16 sm:py-20">
                   <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Создано для заботливых владельцев</h2>
                            <p className="mt-4 text-base sm:text-lg text-slate-600">
                                Наша цель — сделать уход за здоровьем питомцев простым и прозрачным. Больше не нужно держать в голове десятки дат и названий препаратов. Вся информация структурирована и надежно сохранена.
                            </p>
                            <div className="mt-6">
                                <Button to="/register" variant="primary" className="w-full sm:w-auto">Попробовать бесплатно</Button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img src={PetIllustration} alt="Заботливый владелец с питомцем" className="max-w-xs mx-auto md:max-w-full" />
                        </div>
                   </div>
                </section>
            </main>
        </div>
    );
};  