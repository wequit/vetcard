import { useState } from 'react';
import { useUserStore } from '@/entities/user/model/user-store';
import { UserRegistrationData, User } from '@/entities/user/model/types';
import { api } from '@/shared/api';
import { useAuth } from '@/entities/user/model/useAuth';

interface RegisterRequestData {
    username: string;
    email: string;
    password: string;
    password2: string;
}

const getRoleId = (userType: string): number => {
    switch (userType) {
        case 'petOwner': return 1;
        case 'veterinarian': return 2;
        case 'partner': return 3;
        default: return 1;
    }
};

export const useRegister = () => {
    const { setUser, setLoading, isLoading } = useUserStore();
    const [serverError, setServerError] = useState<string | null>(null);
    const { login } = useAuth();

    /**
     * ЭТАП 1: Создает базовый аккаунт (логин, email, пароль).
     * После регистрации сразу получает access/refresh токены.
     */
    const registerInitialUser = async (
        data: Pick<UserRegistrationData, 'username' | 'email' | 'password'>,
        confirmPassword: string
    ): Promise<{ user: User; access: string; refresh: string }> => {
        setLoading(true);
        setServerError(null);

        const requestBody: RegisterRequestData = {
            username: data.username,
            email: data.email,
            password: data.password,
            password2: confirmPassword,
        };

        try {
            const registeredUser = await api.post<RegisterRequestData, User>('/v1/auth/register/', requestBody);
            console.log('Этап 1 успешно завершен. Базовый аккаунт создан:', registeredUser);

            const tokenData = await api.post<{ username: string; password: string }, { access: string; refresh: string }>(
                '/v1/auth/token/',
                { username: data.username, password: data.password }
            );
            return { user: registeredUser, access: tokenData.access, refresh: tokenData.refresh };
        } catch (error: any) {
            const errorMessage = error.message || 'Ошибка на этапе создания аккаунта';
            setServerError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

  
    const updateProfile = async (user: User, fullData: UserRegistrationData, accessToken: string) => {
        setLoading(true);
        setServerError(null);

        const profilePayload: Record<string, any> = {
            first_name: fullData.firstName,
            last_name: fullData.lastName,
            third_name: fullData.middleName,
            role: getRoleId(fullData.userType),
        };

        if (fullData.userType === 'veterinarian') {
            Object.assign(profilePayload, {
                clinic: fullData.clinicName,
                position: fullData.position,
                specialization: fullData.specialization,
                experience: fullData.experience,
                license_number: fullData.licenseNumber,
                city: fullData.vetCity,
                address: fullData.vetAddress,
            });
        } else if (fullData.userType === 'partner') {
             Object.assign(profilePayload, {
                name_of_organization: fullData.partnerName,
                type: fullData.partnerType,
                city: fullData.partnerCity,
                address: fullData.partnerAddress,
                phone: fullData.partnerPhone,
                website: fullData.partnerWebsite,
                description: fullData.partnerDescription,
            });
        }
        
        try {
            const finalUser = await api.put<Record<string, any>, User>(
                `/v1/auth/profile/${user.profile_id}/`,
                profilePayload,
                { Authorization: `Bearer ${accessToken}` }
            );

            localStorage.setItem('authToken', accessToken);
            localStorage.setItem('user', JSON.stringify(finalUser));

            setUser(finalUser);
            const loginUser = {
                name: `${finalUser.first_name} ${finalUser.last_name}`.trim(),
                avatarUrl: null,
                role: (fullData.userType === 'veterinarian' ? 'professional' : 'owner') as 'professional' | 'owner',
                userType: fullData.userType,
            };
            if (login) login(loginUser);
            console.log('Профиль успешно обновлен! Регистрация полностью завершена.');

        } catch (error: any) {
            setServerError(error.message || 'Ошибка при сохранении данных профиля');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { registerInitialUser, updateProfile, isLoading, serverError, setServerError };
};