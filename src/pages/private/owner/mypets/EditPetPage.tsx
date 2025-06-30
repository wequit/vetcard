import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { usePets } from '@/entities/pet/model/PetContext';
import type { Pet } from '@/entities/pet/model/types';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';

export const EditPetPage = () => {
  const { id } = useParams<{ id: string }>();
  const { pets, updatePet } = usePets();
  const navigate = useNavigate();

  const pet = pets.find(p => p.id === id);
  const [formData, setFormData] = useState<Pet | null>(pet ? { ...pet } : null);

  if (!formData) {
    return <div className="p-8">Питомец не найден</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => prev ? { ...prev, [name]: value } : prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      updatePet(formData);
      navigate('/mypets');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <h1 className="text-2xl font-bold mb-6">Редактировать питомца</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input label="Имя питомца" name="name" required value={formData.name} onChange={handleChange} />
        <Input label="Вид" name="species" required value={formData.species} onChange={handleChange} />
        <Input label="Порода" name="breed" value={formData.breed} onChange={handleChange} />
        <Input label="Дата рождения" name="birth_date" type="date" required value={formData.birth_date} onChange={handleChange} />
        <Input label="Вес (кфг)" name="weight" type="number" step="0.1" value={formData.weight} onChange={handleChange} />
        <Input label="URL фотографии" name="image_url" value={formData.image_url} onChange={handleChange} />
        <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
          <Button type="button" variant="outline" onClick={() => navigate('/mypets')}>Отмена</Button>
          <Button type="submit" variant="primary">Сохранить изменения</Button>
        </div>
      </form>
    </div>
  );
}; 