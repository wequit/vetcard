import { FaPaw, FaUserMd, FaBuilding } from 'react-icons/fa';
import type { UserRegistrationData } from './types';

export const USER_TYPES = {
    PET_OWNER: { id: 'petOwner', icon: FaPaw , label: 'Владелец питомца' },
    VETERINARIAN: { id: 'veterinarian', icon: FaUserMd , label: 'Ветеринар' },
    PARTNER: { id: 'partner', icon: FaBuilding , label: 'Партнер' },
} as const;

export const INITIAL_REGISTRATION_DATA: UserRegistrationData = {
  lastName: '',
  firstName: '',
  middleName: '',
  email: '',
  verificationCode: '',
  username: '',
  password: '',
  userType: '',
};