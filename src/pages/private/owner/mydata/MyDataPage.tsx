import { FaUserMd, FaClinicMedical, FaMapMarkerAlt, FaIdBadge, FaCalendarAlt } from 'react-icons/fa';
const doctor = {
  fullName: 'Иванов Иван Иванович',
  description: 'Ветеринарный врач, специализация: терапия и хирургия мелких домашних животных.',
  clinic: 'ВетКлиника №1',
  experience: 8, // лет
  license: 'VET-2024-123456',
  city: 'Москва',
  address: 'ул. Пушкина, д. 10',
  avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
};

export const MyDataPage = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-teal-500 mb-4">
        <img src={doctor.avatarUrl} alt={doctor.fullName} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
        <FaUserMd className="text-teal-500" /> {doctor.fullName}
      </h1>
      <p className="text-slate-600 text-center mb-4">{doctor.description}</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-center gap-3">
          <FaClinicMedical className="text-teal-400 text-xl" />
          <div>
            <div className="text-xs text-slate-400">Клиника</div>
            <div className="font-semibold text-slate-800">{doctor.clinic}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-teal-400 text-xl" />
          <div>
            <div className="text-xs text-slate-400">Стаж</div>
            <div className="font-semibold text-slate-800">{doctor.experience} лет</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaIdBadge className="text-teal-400 text-xl" />
          <div>
            <div className="text-xs text-slate-400">Лицензия</div>
            <div className="font-semibold text-slate-800">{doctor.license}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-teal-400 text-xl" />
          <div>
            <div className="text-xs text-slate-400">Город, адрес</div>
            <div className="font-semibold text-slate-800">{doctor.city}, {doctor.address}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
); 