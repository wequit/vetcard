export type UserRegistrationData = {
  // Основные данные
  username: string;
  email: string;
  password: string;
  
  // Персональные данные
  lastName: string;
  firstName: string;
  middleName: string;
  
  // Тип пользователя
  userType: 'petOwner' | 'veterinarian' | 'partner' | '';
  
  // Поля для ветеринара
  clinicName?: string;
  position?: string;
  experience?: string;
  specialization?: string;
  licenseNumber?: string;
  vetCity?: string;
  vetAddress?: string;

  // Поля для партнера
  partnerName?: string;
  partnerType?: string; // e.g., 'Клиника', 'Зоомагазин'
  partnerCity?: string;
  partnerAddress?: string;
  partnerPhone?: string;
  partnerWebsite?: string;
  partnerDescription?: string;
  partnerLogo?: File | null;
  
  // Поля для верификации (если нужны)
  verificationCode?: string;
};

// Этот тип описывает пользователя, который возвращается с бэкенда
export interface User {
  id: number;
  profile_id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  // ... и другие поля из ответа API
}