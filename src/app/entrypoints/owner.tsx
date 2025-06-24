
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar'; 
import { Header } from '@/widgets/Header/ui/Header';  

export const OwnerLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="p-6 md:p-8 flex-grow">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};