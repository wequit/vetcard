import { FaAddressCard, FaKey, FaUser, FaPaw, FaBriefcaseMedical, FaBuilding } from 'react-icons/fa';

export const baseSteps = [
  { number: 1, title: 'Личные данные', icon: FaAddressCard  },
  { number: 2, title: 'Подтверждение', icon: FaKey  },
  { number: 3, title: 'Данные аккаунта', icon: FaUser  },
  { number: 4, title: 'Тип профиля', icon: FaPaw  },
];

export const vetStep = { number: 5, title: 'Данные ветеринара', icon: FaBriefcaseMedical  };
export const partnerStep = { number: 5, title: 'Данные партнера', icon: FaBuilding  };