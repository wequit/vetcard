import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLogin } from "../model/useLogin";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

export const LoginFields = () => {
  const { login, error, loading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login().then(() => {
      navigate('/mypets');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="login"
        label="Логин"
        type="text"
        placeholder="email@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        icon={<FaEnvelope className="text-gray-400" />}
      />

      {/* Поле пароля с глазком */}
      <div className="relative">
        <Input
          id="password"
          label="Пароль"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          icon={<FaLock className="text-gray-400" />}
        />
        <div
          className="absolute right-3 top-[38px] cursor-pointer text-gray-400"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

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
