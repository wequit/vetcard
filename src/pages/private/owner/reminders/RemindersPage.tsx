import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { Assistant } from '@/entities/assistant/model/types';
import { AssistantTable } from '@/entities/assistant/ui/AssistantTable';
import { ReminderForm } from '@/entities/assistant/ui/ReminderForm';
import { mockReminder } from '@/entities/assistant/model/mock';

export const RemindersPage = () => {
    const [reminders, setReminders] = useState<Assistant[]>(mockReminder);
    const [showForm, setShowForm] = useState(false); // состояние для показа формы

    const handleAddReminder = (reminder: Assistant) => {
        setReminders(prev => [...prev, reminder]);
        setShowForm(false); // скрыть форму после добавления
    };

    const handleUpdateStatus = (id: string, newStatus: 'Запланировано' | 'Сделано') => {
        setReminders(prev =>
            prev.map(reminder =>
                reminder.id === id ? { ...reminder, status: newStatus } : reminder
            )
        );
    };

    const handleDeleteReminder = (id: string) => {
        setReminders(prev => prev.filter(reminder => reminder.id !== id));
    };

    return (
        <div className="space-y-8">
            <header>
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaBell className="text-teal-500" />
                    Напоминания
                </h1>
                <p className="mt-2 text-slate-600">
                    Никогда не забывайте о прививках, приеме лекарств и других важных событиях.
                </p>
            </header>

            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                    Добавить напоминание
                </button>
            )}

            {showForm && (
                <ReminderForm
                    onAdd={handleAddReminder}
                    onCancel={() => setShowForm(false)}
                />
            )}

            {reminders.length > 0 ? (
                <AssistantTable
                    reminders={reminders}
                    onUpdateStatus={handleUpdateStatus}
                    onDelete={handleDeleteReminder}
                />
            ) : (
                <div className="p-8 bg-white rounded-xl shadow-md text-center text-slate-500">
                    <p>У вас пока нет напоминаний.</p>
                </div>
            )}
        </div>
    );
};
