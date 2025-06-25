import { PetList } from '@/entities/pet/ui/PetList';
import { AddPetButton } from '@/features/add-pet/ui/AddPetButton';
import { usePets } from '@/entities/pet/model/PetContext';

export const MyPetsPage = () => {
    const { pets } = usePets();

    return (
        <div>
            <header className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Мои питомцы</h1>
                    <p className="mt-1 text-slate-500">Управляйте профилями ваших любимцев.</p>
                </div>
                <a href="/add-pet">
                  <AddPetButton />
                </a>
            </header>
            <PetList pets={pets} />
        </div>
    );
};