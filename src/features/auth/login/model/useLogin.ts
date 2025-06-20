import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Здесь API
    } catch (e) {
      setError("Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
