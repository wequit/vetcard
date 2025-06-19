export type UserType = 'petOwner' | 'veterinarian' | 'partner' | '';

export type UserRegistrationData = {
  fullName: string;
  email: string;
  verificationCode: string;
  username: string;
  password: string;
  userType: UserType;
  clinicName?: string;
  position?: string;
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