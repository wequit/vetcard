import { FaAddressCard, FaKey, FaUser, FaPaw, FaBriefcaseMedical, FaBuilding } from 'react-icons/fa';

export const baseSteps = [
  { number: 1, title: 'personal', icon: FaAddressCard },
  { number: 2, title: 'verification', icon: FaKey },
  { number: 3, title: 'credentials', icon: FaUser },
  { number: 4, title: 'user_type', icon: FaPaw },
];

export const vetStep = { number: 5, title: 'vet', icon: FaBriefcaseMedical };
export const partnerStep = { number: 5, title: 'partner', icon: FaBuilding };
