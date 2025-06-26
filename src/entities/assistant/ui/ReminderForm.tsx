import { useState } from 'react';
import { Assistant } from '../model/types';

interface ReminderFormProps {
    onAdd: (reminder: Assistant) => void;
    onCancel: () => void;
  }
  
  export const ReminderForm = ({ onAdd, onCancel }: ReminderFormProps) => {
    const [date, setDate] = useState('');
    const [animalName, setAnimalName] = useState('Рекс');
    const [sms, setSms] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!date || !sms) {
        alert('Пожалуйста, заполните все поля.');
        return;
      }
  
      const newReminder: Assistant = {
        id: Date.now().toString(), // простой способ сгенерировать уникальный id
        date,
        animalName,
        assistant_sms: sms,
        status: 'Запланировано',
      };
  
      onAdd(newReminder);
      setDate('');
      setAnimalName('Рекс');
      setSms('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-slate-700">Дата</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
  
        <div>
          <label className="block mb-1 font-medium text-slate-700">Имя животного</label>
          <select
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Рекс">Рекс</option>
            <option value="Мурка">Мурка</option>
            <option value="Кеша">Кеша</option>
          </select>
        </div>
  
        <div>
          <label className="block mb-1 font-medium text-slate-700">Сообщение</label>
          <textarea
            value={sms}
            onChange={(e) => setSms(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={3}
            required
          />
        </div>
  
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Добавить
          </button>
        </div>
      </form>
    );
  };