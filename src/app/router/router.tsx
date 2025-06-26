import { Routes, Route } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { OwnerLayout } from '../entrypoints/owner';
import { ProtectedRoute } from './ProtectedRoute';

import { RootPage } from '@/pages/public/root/RootPage'; 
import { AboutPage } from '@/pages/public/about/AboutPage'; 
import { RegisterPage } from '@/pages/public/auth/register/ui/RegisterPage'; 
import { LoginPage } from '@/pages/public/auth/login/ui/LoginPage';
import { ForgotPasswordPage } from '@/pages/public/auth/forgot-password/ui/ForgotPasswordPage';

import { DashboardPage } from '@/pages/private/owner/dashboard/DashboardPage';
import { MyPetsPage } from '@/pages/private/owner/mypets/MyPetsPage';
import { AddPetPage } from '@/pages/private/owner/add-pet/AddPetPage';
import { EditPetPage } from '@/pages/private/owner/mypets/EditPetPage';
import { UserProfilePage } from '@/pages/private/owner/userprofile/UserProfilePage';
import { AssistantPage } from '@/pages/private/owner/assistant/AssistantPage';
import { RemindersPage } from '@/pages/private/owner/reminders/RemindersPage';
import { ArticlesPage } from '@/pages/private/owner/articles/ArticlesPage';
import { ProductsPage } from '@/pages/private/owner/products/ProductsPage';
import { MyDataPage } from '@/pages/private/vet/mydata/MyDataPage';

import { NotFoundPage } from '@/pages/note-found/ui/NotFoundPage';

import { PetProvider } from '@/entities/pet/model/PetContext';
import { SupportPage } from '@/pages/public/support/SupportPage';

export const Router = () => {
  return (
    <PetProvider> 
      <Routes>
        
        {/* Группа 1: Страницы для входа/регистрации (без хедера и футера) */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Группа 2: Публичные страницы с общим лэйаутом (Header + Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<RootPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

        {/* Группа 3: Приватные страницы с лэйаутом личного кабинета (Sidebar + Header + Footer) */}
        <Route 
          element={
            <ProtectedRoute>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/mypets" element={<MyPetsPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/mypets/edit/:id" element={<EditPetPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/mydata" element={<MyDataPage />} />
          <Route path="/mydata/edit" element={<MyDataPage />} />
        </Route>
        
        {/* Роут для страницы "не найдено", должен быть последним */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </PetProvider>
  );
};