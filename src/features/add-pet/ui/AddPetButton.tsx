import { Button } from "@/shared/ui/Button";
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export const AddPetButton = () => {
  const navigate = useNavigate();

  const handleAddPet = () => {
    navigate('/add-pet');
  };

  return (
    <Button onClick={handleAddPet}>
      <FaPlus className="mr-2" />
      Добавить питомца
    </Button>
  );
};
