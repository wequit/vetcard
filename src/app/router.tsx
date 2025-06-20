import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/public/home/ui/HomePage'; 
import { AboutPage } from '@/pages/public/about/AboutPage'; 
import RegisterForm  from '@/pages/public/auth/register/ui/RegisterPage'; 
import { Soon } from '@/pages/private/page';
import { NotFoundPage } from '@/pages/note-found/ui/NotFoundPage';
import { LoginPage } from '@/pages/public/auth/login/ui/LoginPage';
import { ForgotPasswordPage } from '@/pages/public/auth/forgot-password/ui/ForgotPasswordPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      
      <Route path="/dashboard" element={<Soon />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};