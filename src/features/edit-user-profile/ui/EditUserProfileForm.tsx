import React, { useState } from 'react';
import type { User } from '@/entities/user/model/types';
import { api } from '@/shared/api';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaSave, FaTimes } from 'react-icons/fa';

export const EditUserProfileForm: React.FC<{ user: User; onSave: (user: User) => void; onCancel: () => void }> = ({ user, onSave, onCancel }) => {
  const [form, setForm] = useState({ ...user });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const accessToken = localStorage.getItem('authToken');
      const updated = await api.put<typeof form, User>(`/v1/auth/profile/${user.id}/`, form, accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined);
      onSave(updated);
    } catch (e) {
      setError('Ошибка при сохранении');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaUser className="text-blue-400" /> Редактирование профиля</h2>
      <div className="space-y-4">
        <EditField icon={<FaUser />} label="Имя" name="first_name" value={form.first_name} onChange={handleChange} />
        <EditField icon={<FaUser />} label="Фамилия" name="last_name" value={form.last_name} onChange={handleChange} />
        <EditField icon={<FaUser />} label="Отчество" name="third_name" value={form.third_name} onChange={handleChange} />
        <EditField icon={<FaPhone />} label="Телефон" name="phone" value={form.phone} onChange={handleChange} />
        <EditField icon={<FaEnvelope />} label="Email" name="email" value={form.email} onChange={handleChange} />
        <EditField icon={<FaMapMarkerAlt />} label="Город" name="city" value={form.city} onChange={handleChange} />
        <EditField icon={<FaHome />} label="Адрес" name="address" value={form.address} onChange={handleChange} />
      </div>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <div className="flex justify-end gap-4 pt-4 border-t border-slate-200 mt-6">
        <button type="button" onClick={onCancel} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition"><FaTimes /> Отмена</button>
        <button type="submit" className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition" disabled={loading}>
          <FaSave /> {loading ? 'Сохраняем...' : 'Сохранить'}
        </button>
      </div>
    </form>
  );
};

const EditField: React.FC<{ label: string; name: string; value?: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; icon: React.ReactNode }> = ({ label, name, value, onChange, icon }) => (
  <div className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3">
    {icon}
    <label htmlFor={name} className="w-32 font-medium text-slate-700">{label}:</label>
    <input
      id={name}
      name={name}
      value={value || ''}
      onChange={onChange}
      className="flex-1 border-none bg-transparent focus:ring-0 text-slate-900 font-semibold placeholder:text-slate-400 outline-none"
      placeholder={label}
      autoComplete="off"
    />
  </div>
); 