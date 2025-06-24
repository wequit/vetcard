
import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import { OwnerLayout } from '../entrypoints/owner';

import { RootPage } from '@/pages/public/root/RootPage'; 
import { HomePage } from '@/pages/public/home/ui/HomePage';
import { AboutPage } from '@/pages/public/about/AboutPage'; 
import { RegisterPage } from '@/pages/public/auth/register/ui/RegisterPage'; 
import { LoginPage } from '@/pages/public/auth/login/ui/LoginPage';
import { ForgotPasswordPage } from '@/pages/public/auth/forgot-password/ui/ForgotPasswordPage';

import { DashboardPage } from '@/pages/private/owner/dashboard/DashboardPage';
import { MyPetsPage } from '@/pages/private/owner/mypets/MyPetsPage';
import { AddPetPage } from '@/pages/private/owner/add-pet/AddPetPage';

import { UserProfilePage } from '@/pages/private/owner/userprofile/UserProfilePage';
import { AssistantPage } from '@/pages/private/owner/assistant/AssistantPage';
import { RemindersPage } from '@/pages/private/owner/reminders/RemindersPage';
import { ArticlesPage } from '@/pages/private/owner/articles/ArticlesPage';
import { ProductsPage } from '@/pages/private/owner/products/ProductsPage';

import { NotFoundPage } from '@/pages/note-found/ui/NotFoundPage';

export const Router = () => {
  return (
    <Routes>
      {/* --- Группа публичных роутов --- */}
      
      <Route path="/" element={<RootPage />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* --- Группа приватных роутов для владельца питомца --- */}
      <Route 
        element={
          <ProtectedRoute>
            <OwnerLayout />
          </ProtectedRoute>
        }
      >
        {/* Все эти роуты защищены и используют общий лэйаут с сайдбаром */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/mypets" element={<MyPetsPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />

        <Route path="/assistant" element={<AssistantPage />} />
        <Route path="/reminders" element={<RemindersPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
      
      {/* Роут для страницы "не найдено" */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};