import { PetList } from '@/entities/pet/ui/PetList';
import { AddPetButton } from '@/features/add-pet/ui/AddPetButton';
import { usePets } from '@/entities/pet/model/PetContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export const MyPetsPage = () => {
    const { pets } = usePets();
    const { t } = useTranslation();

    return (
        <div>
            <header className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">{t ("myPetsPage.myPets")}</h1>
                    <p className="mt-1 text-slate-500">{t ("myPetsPage.controlText")}</p>
                </div>
                <Link to="/add-pet">
                  <AddPetButton />
                </Link>
            </header>
            <PetList pets={pets} />
        </div>
    );
};