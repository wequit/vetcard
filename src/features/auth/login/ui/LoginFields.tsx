import { useState } from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/entities/user/model/useAuth";

export const LoginFields = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (username === "vet" && password === "vetpass") {
      login({ name: "Ветеринар", avatarUrl: null, role: "professional" });
      navigate("/mydata");
    } else if (username === "owner" && password === "ownerpass") {
      login({ name: "Владелец", avatarUrl: null, role: "owner" });
      navigate("/dashboard");
    } else {
      setError("Неверный логин или пароль");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="login"
        label="Логин"
        type="text"
        placeholder="Введите логин"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        icon={<FaEnvelope className="text-gray-400" />}
      />
      <Input
        id="password"
        label="Пароль"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        icon={<FaLock className="text-gray-400" />}
      />

      {error && (
        <div className="text-red-700 bg-red-100 border border-red-200 p-3 rounded-md text-sm text-center animate-pulse">
            {error}
        </div>
      )}

      <div className="flex justify-center">
        <Button type="submit" variant="primary" className="w-32" disabled={loading}>
            {loading ? 'Входим...' : 'Войти'}
        </Button>
      </div>
    </form>
  );
};