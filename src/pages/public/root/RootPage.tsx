
import { Navigate } from 'react-router-dom';
import { HomePage } from '@/pages/public/home/ui/HomePage';
import { useAuth } from '@/entities/user/model/useAuth';

export const RootPage = () => {
    const { isAuthenticated } = useAuth();
    const userHomePath = '/dashboard'; 

    if (isAuthenticated) {
        return <Navigate to={userHomePath} replace />;
    }

    return <HomePage />;
};