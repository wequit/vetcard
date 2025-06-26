
import { useState, useMemo } from 'react';
import { FaBell, FaPlus } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { Reminder, ReminderStatus } from '@/entities/reminder/model/types';
import { mockReminders } from '@/entities/reminder/model/mock';
import { ReminderCard } from '@/entities/reminder/ui/ReminderCard';
import { ReminderForm } from '@/features/reminder-form/ui/ReminderForm';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';

type FilterStatus = 'Все' | 'Запланировано' | 'Сделано';

export const RemindersPage = () => {
    const [reminders, setReminders] = useState<Reminder[]>(mockReminders);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
    const [activeFilter, setActiveFilter] = useState<FilterStatus>('Запланировано');

    const handleSave = (data: Omit<Reminder, 'id' | 'status'>, id?: string) => {
        if (id) {
            setReminders(prev => prev.map(r => r.id === id ? { ...r, ...data } : r));
        } else {
            const newReminder: Reminder = {
                id: Date.now().toString(),
                ...data,
                status: 'Запланировано',
            };
            setReminders(prev => [...prev, newReminder].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
        }
        closeModal();
    };
    
    const handleEdit = (reminder: Reminder) => {
        setEditingReminder(reminder);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setEditingReminder(null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingReminder(null);
    };

    const handleUpdateStatus = (id: string, newStatus: ReminderStatus) => {
        setReminders(prev => prev.map(r => (r.id === id ? { ...r, status: newStatus } : r)));
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Вы уверены, что хотите удалить это напоминание?')) {
            setReminders(prev => prev.filter(r => r.id !== id));
        }
    };

    const filteredReminders = useMemo(() => {
        if (activeFilter === 'Все') return reminders;
        return reminders.filter(r => r.status === activeFilter);
    }, [reminders, activeFilter]);

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                        <FaBell className="text-teal-500" /> Напоминания
                    </h1>
                    <p className="mt-2 text-slate-600">Ваш персональный ассистент по уходу за питомцами.</p>
                </div>
                <Button onClick={handleAddNew}>
                    <FaPlus className="mr-2" /> Добавить напоминание
                </Button>
            </header>

            <div className="flex items-center gap-2 border-b border-slate-200">
                {(['Запланировано', 'Сделано', 'Все'] as FilterStatus[]).map(filter => (
                    <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${activeFilter === filter ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                        {filter}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                <AnimatePresence>
                    {filteredReminders.length > 0 ? (
                        filteredReminders.map(reminder => (
                            <ReminderCard key={reminder.id} reminder={reminder} onUpdateStatus={handleUpdateStatus} onDelete={handleDelete} onEdit={handleEdit} />
                        ))
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl shadow-sm"><p className="text-slate-500">В этой категории пока нет напоминаний.</p></div>
                    )}
                </AnimatePresence>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={closeModal} title={editingReminder ? 'Редактировать напоминание' : 'Новое напоминание'}>
                <ReminderForm onSave={handleSave} onCancel={closeModal} initialData={editingReminder} />
            </Modal>
        </div>
    );
};