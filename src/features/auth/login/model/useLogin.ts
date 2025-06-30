import { useState } from "react";
import { useAuth } from "@/entities/user/model/useAuth";
import { useNavigate } from "react-router-dom";
import { api } from "@/shared/api";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const tokenData = await api.post<{ username: string; password: string }, { access: string; refresh: string }>(
        '/v1/auth/token/',
        { username, password }
      );
      localStorage.setItem('authToken', tokenData.access);

      const userProfile = await api.get<any>('/v1/auth/get_profile/', {
        Authorization: `Bearer ${tokenData.access}`
      });
      localStorage.setItem('user', JSON.stringify(userProfile));

      const loginUser = {
        name: `${userProfile.first_name} ${userProfile.last_name}`.trim(),
        avatarUrl: userProfile.logo || null,
        role: (userProfile.role === 2 ? 'professional' : 'owner') as 'professional' | 'owner',
        userType: userProfile.role === 1 ? 'petOwner' : userProfile.role === 2 ? 'veterinarian' : 'partner',
      };
      if (authLogin) authLogin(loginUser);

      let route = '/dashboard';
      if (userProfile.role === 2) route = '/mydata';
      if (userProfile.role === 3) route = '/partner';
      navigate(route);
    } catch (e) {
      setError("Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
