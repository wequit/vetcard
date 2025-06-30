import React from 'react';
import type { User } from '@/entities/user/model/types';
import { FaUserEdit, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaPlus } from 'react-icons/fa';

export const UserProfileView: React.FC<{ user: User; onEdit: () => void }> = ({ user, onEdit }) => (
  <section className="w-full max-w-2xl mx-auto mt-8 px-4">
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        {user.logo
          ? <img src={user.logo} alt="avatar" className="w-16 h-16 rounded-full object-cover border-2 border-blue-400" />
          : <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
              {user.first_name?.[0]}{user.last_name?.[0]}
            </div>
        }
        <div>
          <div className="text-2xl font-bold text-slate-900">{user.last_name} {user.first_name}</div>
          <div className="text-gray-500 text-sm">@{user.username}</div>
        </div>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition" onClick={onEdit}>
        <FaUserEdit /> Редактировать
      </button>
    </header>
    <ul className="divide-y divide-slate-200 bg-white rounded-xl shadow overflow-hidden">
      <ProfileField icon={<FaPhone className="text-blue-400" />} label="Телефон" value={user.phone} onEdit={onEdit} />
      <ProfileField icon={<FaEnvelope className="text-blue-400" />} label="Email" value={user.email} />
      <ProfileField icon={<FaMapMarkerAlt className="text-blue-400" />} label="Город" value={user.city} onEdit={onEdit} />
      <ProfileField icon={<FaHome className="text-blue-400" />} label="Адрес" value={user.address} onEdit={onEdit} />
    </ul>
  </section>
);

const ProfileField: React.FC<{ label: string; value?: string; icon: React.ReactNode; onEdit?: () => void }> = ({ label, value, icon, onEdit }) => (
  <li className="flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium text-slate-700">{label}:</span>
    </div>
    {value ? (
      <span className="text-slate-900 font-semibold">{value}</span>
    ) : (
      onEdit ? <span className="flex items-center gap-1 text-blue-500 cursor-pointer hover:underline" onClick={onEdit}><FaPlus />Добавить</span> : <span className="text-slate-400">—</span>
    )}
  </li>
); 