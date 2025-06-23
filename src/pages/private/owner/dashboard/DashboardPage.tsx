
import { FaPaw, FaBell, FaPlus } from 'react-icons/fa';
import { Button } from '@/shared/ui/Button';
import { JSX } from 'react';

const useUser = () => ({ name: 'Адиль' });


const StatCard = ({ icon, title, value, color }: { icon: JSX.Element, title: string, value: string | number, color: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
        <div className={`p-3 rounded-full ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-slate-500">{title}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

const QuickActionsWidget = () => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-bold text-slate-800 mb-4">Быстрые действия</h3>
        <div className="space-y-3">
            <Button to="/mypets/new" variant="outline" className="w-full justify-start text-left"><FaPlus className="mr-3"/> Добавить питомца</Button>
            <Button to="/reminders/new" variant="outline" className="w-full justify-start text-left"><FaBell className="mr-3"/> Создать напоминание</Button>
        </div>
    </div>
);

const UpcomingRemindersWidget = () => {
    const reminders = [
        { id: 1, text: 'Ежегодная прививка для Рекса', date: '28.06.2025' },
        { id: 2, text: 'Прием таблетки от клещей', date: '01.07.2025' },
    ];
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-slate-800 mb-4">Ближайшие напоминания</h3>
            <ul className="space-y-3">
                {reminders.map(r => (
                    <li key={r.id} className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">{r.text}</span>
                        <span className="font-medium text-slate-800">{r.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export const DashboardPage = () => {
    const { name } = useUser();

    return (
        <div className="space-y-8">
            {/* Приветствие */}
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Добро пожаловать, {name}!</h1>
                <p className="mt-1 text-slate-600">Вот краткая сводка по вашему аккаунту.</p>
            </header>

            {/* Сетка со статистикой */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={<FaPaw />} title="Активных питомцев" value="3" color="bg-teal-100 text-teal-600" />
                <StatCard icon={<FaBell />} title="Ближайших событий" value="2" color="bg-amber-100 text-amber-600" />
                {/* ... другие карточки */}
            </div>

            {/* Сетка с виджетами */}
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