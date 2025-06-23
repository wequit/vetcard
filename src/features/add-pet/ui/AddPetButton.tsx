
import { Button } from "@/shared/ui/Button";
import { FaPlus } from 'react-icons/fa';

export const AddPetButton = () => {
    const handleAddPet = () => {
        alert('Открывается форма добавления питомца...');
    }

    return (
        <Button onClick={handleAddPet}>
            <FaPlus className="mr-2" />
            Добавить питомца
        </Button>
    )
}