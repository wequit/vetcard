
import type { Pet } from "../model/types";
import { PetCard } from "./PetCard";

interface PetListProps {
    pets: Pet[];
}

export const PetList = ({ pets }: PetListProps) => {
    if (pets.length === 0) {
        return (
            <div className="text-center py-12 bg-slate-100 rounded-lg">
                <h3 className="text-lg font-medium text-slate-700">У вас пока нет питомцев</h3>
                <p className="text-slate-500 mt-2">Нажмите "Добавить питомца", чтобы создать первую карточку.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
};