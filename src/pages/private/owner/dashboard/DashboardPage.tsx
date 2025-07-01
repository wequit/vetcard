import { JSX } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaw, FaBell, FaPlus, FaCalendarCheck, FaSyringe, FaBone } from 'react-icons/fa';
import { Button } from '@/shared/ui/Button';
import { mockReminder } from '@/entities/assistant/model/mock';
import { useTranslation } from 'react-i18next';
import { usePets } from '@/entities/pet/model/PetContext';

const useUser = () => {
    const { pets } = usePets();
    let name = 'Пользователь';
    if (typeof window !== 'undefined') {
        const userFromStorage = JSON.parse(localStorage.getItem('user') || 'null');
        if (userFromStorage && userFromStorage.name) {
            name = userFromStorage.name;
        } else if (userFromStorage && userFromStorage.first_name) {
            name = userFromStorage.first_name;
        }
    }
    const petsCount = pets.length;
    return { name, petsCount, remindersCount: 3 };
};

const StatCard = ({ icon, title, value, color, to }: { icon: JSX.Element, title: string, value: string | number, color: string, to: string }) => (
    <motion.div whileHover={{ y: -5 }}>
        <Link to={to} className={`block p-6 rounded-2xl shadow-md transition-all duration-300 ${color}`}>
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <p className="text-sm font-medium opacity-80">{title}</p>
                    <p className="text-3xl font-bold mt-1">{value}</p>
                </div>
                <div className="text-3xl opacity-60">
                    {icon}
                </div>
            </div>
        </Link>
    </motion.div>
);

const QuickActionsWidget = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
            <h3 className="font-bold text-slate-800 mb-4">{t("dashboard.quickActions")}</h3>
            <div className="space-y-3">
                <Button to="/add-pet" variant="outline" className="w-full justify-start text-left text-base py-3">
                    <FaPlus className="mr-3 text-teal-500" /> {t("dashboard.addPet")}
                </Button>
                <Button to="/assistant" variant="outline" className="w-full justify-start text-left text-base py-3">
                    <FaPlus className="mr-3 text-indigo-500" /> {t("dashboard.chatWithAI", { defaultValue: 'Чат с ИИ' })}
                </Button>
                <Button to="/products" variant="outline" className="w-full justify-start text-left text-base py-3">
                    <FaPlus className="mr-3 text-amber-500" /> {t("dashboard.products", { defaultValue: 'Товары' })}
                </Button>
            </div>
        </div>
    );
};

const UpcomingRemindersWidget = () => {
    const { t } = useTranslation();
    const upcoming = mockReminder
        .filter((reminder) => reminder.status === 'Запланировано')
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 4); 

    const getIconForReminder = (text: string) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('прививка') || lowerText.includes('вакцинация')) return <FaSyringe />;
        if (lowerText.includes('корм')) return <FaBone />;
        return <FaCalendarCheck />;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">{t("dashboard.upcoming")}</h3>
                <Link to="/reminders" className="text-sm font-medium text-teal-600 hover:text-teal-500">{t("dashboard.all")}</Link>
            </div>
            {upcoming.length > 0 ? (
                <ul className="space-y-2">
                    {upcoming.map((reminder) => (
                        <li key={reminder.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="p-3 bg-slate-100 text-slate-500 rounded-full">
                                {getIconForReminder(reminder.assistant_sms)}
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold text-slate-700">{reminder.assistant_sms}</p>
                                <p className="text-xs text-slate-500">{t("dashboard.pet")}: {reminder.animalName}</p>
                            </div>
                            <div className="text-sm font-medium text-slate-800 text-right">
                                {new Date(reminder.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-8">
                    <FaBell className="mx-auto text-4xl text-slate-300 mb-2" />
                    <p className="text-slate-500 text-sm">{t("dashboard.noReminders")}</p>
                </div>
            )}
        </div>
    );
};


export const DashboardPage = () => {
    const { name, petsCount, remindersCount } = useUser();
    const { t } = useTranslation();
    const today = new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });

    return (
        <div className="space-y-8">
            <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">{t("dashboard.welcome", { name })}</h1>
                    <p className="mt-1 text-slate-500 capitalize">{today}</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard 
                    icon={<FaPaw />} 
                    title={t("dashboard.pets")} 
                    value={petsCount} 
                    color="bg-teal-50 text-teal-600" 
                    to="/mypets"
                />
                <StatCard 
                    icon={<FaBell />} 
                    title={t("dashboard.events")} 
                    value={remindersCount} 
                    color="bg-amber-50 text-amber-600" 
                    to="/reminders"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <UpcomingRemindersWidget />
                </div>
                <div>
                    <QuickActionsWidget />
                </div>
            </div>
        </div>
    );
};
