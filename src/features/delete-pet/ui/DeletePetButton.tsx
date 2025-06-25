import { FaTrash } from 'react-icons/fa';
import { usePets } from '@/entities/pet/model/PetContext';

export const DeletePetButton = ({ petId, petName }: { petId: string, petName: string }) => {
    const { removePet } = usePets();
    const handleDelete = () => {
        if (window.confirm(`Вы уверены, что хотите удалить профиль питомца по имени ${petName}?`)) {
            removePet(petId);
        }
    }

    return (
        <button onClick={handleDelete} className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
            <FaTrash className="mr-3" /> Удалить
        </button>
    );
}