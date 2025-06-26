export type UserType = 'petOwner' | 'veterinarian' | 'partner' | '';

export type UserRegistrationData = {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  verificationCode: string;
  username: string;
  password: string;
  userType: UserType; //petOwner' | 'veterinarian' | 'partner
  clinicName?: string;  //Если выбрал вет, то название клиники
  position?: string;  //Ну вы поняли надеюсь дальше
  experience?: string;
  specialization?: string;
  licenseNumber?: string;
  vetCity?: string;
  vetAddress?: string;
  partnerName?: string;
  partnerType?: string;
  partnerCity?: string;
  partnerAddress?: string;
  partnerPhone?: string;
  partnerWebsite?: string;
  partnerDescription?: string;
  partnerLogo?: File | null;
};