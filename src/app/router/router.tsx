import { Routes, Route } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { OwnerLayout } from '../entrypoints/owner';
import { ProtectedRoute } from './ProtectedRoute';
import { PartnerLayout } from '../entrypoints/partner';
import { CommonLayout } from '../entrypoints/common';

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
import { AssistantPage } from '@/widgets/Assistant/AssistantPage';
import { RemindersPage } from '@/pages/private/owner/reminders/RemindersPage';
import { ArticlesPage } from '@/widgets/Articles/ArticlesPage';
import { Products } from '@/widgets/Products/Products';
import { MyDataPage } from '@/pages/private/vet/mydata/MyDataPage';
import PartnerMyDataPage from '@/pages/private/partner/mydata/MyDataPage';

import { NotFoundPage } from '@/pages/note-found/ui/NotFoundPage';

import { PetProvider } from '@/entities/pet/model/PetContext';
import { SupportPage } from '@/pages/public/support/SupportPage';

export const Router = () => {
  return (
    <PetProvider> 
      <Routes>
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route element={<PublicLayout />}>
          <Route path="/" element={<RootPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

        <Route 
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/mypets" element={<MyPetsPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/mypets/edit/:id" element={<EditPetPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/mydata" element={<MyDataPage />} />
          <Route path="/mydata/edit" element={<MyDataPage />} />
        </Route>
        
        <Route 
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <PartnerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/partner/mydata" element={<PartnerMyDataPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute allowedRoles={[1,2,3]}>
              <CommonLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/products" element={<Products />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </PetProvider>
  );
};