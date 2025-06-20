import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/public/home/ui/HomePage'; 
import { AboutPage } from '@/pages/public/about/AboutPage'; 
import RegisterForm  from '@/pages/public/auth/register/ui/RegisterPage'; 
import { Soon } from '@/pages/private/page';
import { NotFoundPage } from '@/pages/note-found/ui/NotFoundPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Soon />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};