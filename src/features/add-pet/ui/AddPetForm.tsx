
import { useState } from 'react';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
import { ImageUpload } from '@/shared/ui/ImageUpload'; 
import type { Pet } from '@/entities/pet/model/types';

type AddPetFormProps = {
    onAddPet: (pet: Pet) => void;
    onCancel: () => void;
};

export const AddPetForm: React.FC<AddPetFormProps> = ({ onAddPet, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        breed: '',
        dateOfBirth: '',
        weight: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPet: Pet = {
            ...formData,
            id: Date.now().toString(),
            avatarUrl: 'https://placehold.co/400x400',
            weight: Number(formData.weight),
        };
        onAddPet(newPet);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2 mb-4">Основная информация</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Имя питомца" name="name" placeholder="Рекс" required value={formData.name} onChange={handleChange} />
                    <Input label="Вид" name="species" placeholder="Собака" required value={formData.species} onChange={handleChange} />
                    <Input label="Порода" name="breed" placeholder="Немецкая овчарка" value={formData.breed} onChange={handleChange} />
                    <Input label="Дата рождения" name="dateOfBirth" type="date" required value={formData.dateOfBirth} onChange={handleChange} />
                    <Input label="Вес (кг)" name="weight" type="number" step="0.1" placeholder="32.5" value={formData.weight} onChange={handleChange} />
                </div>
            </div>

            <div>
                 <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2 mb-4">Дополнительно</h3>
                 <div className="space-y-6">
                    <ImageUpload />
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Особые пометки</label>
                        <textarea id="notes" name="notes" rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Аллергия на курицу, боится громких звуков..." value={formData.notes} onChange={handleChange}></textarea>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Отмена
                </Button>
                <Button type="submit" variant="primary">
                    Сохранить питомца
                </Button>
            </div>
        </form>
    );
};