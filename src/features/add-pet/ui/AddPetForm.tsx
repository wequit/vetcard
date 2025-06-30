import { useState } from 'react';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
import { ImageUpload } from '@/shared/ui/ImageUpload'; 
import type { Pet } from '@/entities/pet/model/types';
import { useUserStore } from '@/entities/user/model/user-store';
import { api } from '@/shared/api';

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
        notes: '',
        imageUrl: ''
    });
    const { user } = useUserStore();
    const userFromStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null;
    const userId = user?.id || userFromStorage?.id;
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const accessToken = localStorage.getItem('authToken');
            if (!userId || !accessToken) {
                setError('Ошибка авторизации. Попробуйте войти заново.');
                setLoading(false);
                return;
            }
            await api.post(
                '/v1/pet/',
                {
                    name: formData.name,
                    birth_date: formData.dateOfBirth,
                    image_url: formData.imageUrl,
                    special_notes: formData.notes,
                    species: Number(formData.species),
                    user: userId
                },
                { Authorization: `Bearer ${accessToken}` }
            );
            setLoading(false);
            onAddPet({
                ...formData,
                id: Date.now().toString(),
                avatarUrl: formData.imageUrl,
                weight: Number(formData.weight),
            });
        } catch (e) {
            setError('Ошибка при добавлении питомца');
            setLoading(false);
        }
    };

    const speciesOptions = [
        { id: 1, label: 'Собака' },
        { id: 2, label: 'Кошка' },
        { id: 3, label: 'Попугай' },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2 mb-4">Основная информация</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Имя питомца" name="name" placeholder="Рекс" required value={formData.name} onChange={handleChange} />
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Вид</label>
                        <select
                            name="species"
                            required
                            value={formData.species}
                            onChange={handleSelectChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <option value="">Выберите вид</option>
                            {speciesOptions.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
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
            
            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
                <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
                    Отмена
                </Button>
                <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? 'Сохраняем...' : 'Сохранить питомца'}
                </Button>
            </div>
        </form>
    );
};