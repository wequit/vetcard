import { useState } from "react";
import { useAuth } from "@/entities/user/model/useAuth";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useAuth();

  const login = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      authLogin({
        name: 'Адиль',
        avatarUrl: null,
        role: "professional"
      });
      
    } catch (e) {
      setError("Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
