import { useState } from 'react';
import { Assistant } from '../model/types';
import { mockReminder } from '../model/mock';
import { AssistantTable } from './AssistantTable';
import { ReminderForm  } from './ReminderForm';


export const AssistantList = () => {
  const [reminders, setReminders] = useState<Assistant[]>(mockReminder);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (reminder: Assistant) => {
    setReminders((prev) => [...prev, reminder]);
    setShowForm(false);
  };

  const handleUpdateStatus = (id: string, newStatus: Assistant['status']) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const handleDelete = (id: string) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          + Добавить напоминание
        </button>
      </div>

      {showForm && (
        <div className="p-4 border rounded bg-slate-50">
          <ReminderForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
        </div>
      )}

      <AssistantTable
        reminders={reminders}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDelete}
      />
    </div>
  );
};

