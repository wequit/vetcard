import { Assistant } from '../model/types';

interface AssistantTableProps {
    reminders: Assistant[];
    onUpdateStatus: (id: string, newStatus: Assistant['status']) => void;
    onDelete: (id: string) => void;
  }
  
  export const AssistantTable = ({ reminders, onUpdateStatus, onDelete }: AssistantTableProps) => {
    const handleStatusClick = (id: string) => {
      const confirm = window.confirm('Вы уверены, что хотите отметить как "Сделано"?');
      if (confirm) {
        onUpdateStatus(id, 'Сделано');
      }
    };
  
    const handleDeleteClick = (id: string) => {
      const confirm = window.confirm('Удалить это напоминание?');
      if (confirm) {
        onDelete(id);
      }
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-slate-700">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 border">Дата</th>
              <th className="px-4 py-2 border">Имя животного</th>
              <th className="px-4 py-2 border">Сообщение</th>
              <th className="px-4 py-2 border">Статус</th>
              <th className="px-4 py-2 border">Действия</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.animalName}</td>
                <td className="border px-4 py-2">{item.assistant_sms}</td>
                <td className="border px-4 py-2 font-semibold">
                  {item.status === 'Запланировано' ? (
                    <button
                      className="text-orange-500 underline"
                      onClick={() => handleStatusClick(item.id)}
                    >
                      {item.status}
                    </button>
                  ) : (
                    <span className="text-green-600">{item.status}</span>
                  )}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };