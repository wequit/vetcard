import { useState, useEffect } from 'react';
import { Reminder } from '@/entities/reminder/model/types';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/input';
import { useTranslation } from 'react-i18next';


interface ReminderFormProps {
    onSave: (data: Omit<Reminder, 'id' | 'status'>, id?: string) => void;
    onCancel: () => void;
    initialData?: Reminder | null;
}
  
export const ReminderForm = ({ onSave, onCancel, initialData }: ReminderFormProps) => {
    const { t } = useTranslation();
    const [date, setDate] = useState('');
    const [animalName, setAnimalName] = useState('Рекс');
    const [event, setEvent] = useState('');

    useEffect(() => {
        if (initialData) {
            setDate(initialData.date);
            setAnimalName(initialData.animalName);
            setEvent(initialData.event);
        } else {
            setDate('');
            setAnimalName('Рекс');
            setEvent('');
        }
    }, [initialData]);
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!date || !event) {
            alert(t("reminderForm.alertMissingFields"));
            return;
        }
        
        onSave({ date, animalName, event }, initialData?.id);
    };
  
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Input
                label={t("reminderForm.eventLabel")}
                type="text"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                placeholder={t("reminderForm.eventPlaceholder")}
                required
            />
            <Input
                label={t("reminderForm.dateLabel")}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Питомец</label>
                <select value={animalName} onChange={(e) => setAnimalName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="Рекс">Рекс</option>
                    <option value="Мурка">Мурка</option>
                    <option value="Кеша">Кеша</option>
                    <option value="Все питомцы">Все питомцы</option>
                </select>
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <Button type="button" variant="outline" onClick={onCancel}>{t("reminderForm.cancel")}</Button>
                <Button type="submit">{initialData ? t("reminderForm.save") : t("reminderForm.add")}</Button>
            </div>
        </form>
    );
};