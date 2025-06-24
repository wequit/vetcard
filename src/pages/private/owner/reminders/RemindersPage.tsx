
import { FaBell } from 'react-icons/fa';

export const RemindersPage = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaBell className="text-teal-500" />
                    Напоминания
                </h1>
                <p className="mt-2 text-slate-600">Никогда не забывайте о прививках, приеме лекарств и других важных событиях.</p>
            </header>

            <div className="p-8 bg-white rounded-xl shadow-md text-center text-slate-500">
                <p>Содержимое страницы напоминаний в разработке...</p>
                {/* TODO: Здесь будут сущности <RemindersList /> и фича <CreateReminderButton /> */}
            </div>
        </div>
    );
};