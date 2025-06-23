
import { memo } from 'react';
import { motion } from 'framer-motion';
import type { Pet } from '../model/types';
import { Button } from '@/shared/ui/Button';

interface PetCardProps {
  pet: Pet;
}

export const PetCard = memo(({ pet }: PetCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <img className="h-48 w-full object-cover" src={pet.avatarUrl} alt={pet.name} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800">{pet.name}</h3>
        <p className="text-slate-500 mt-1">{pet.breed}</p>
        <p className="text-sm text-slate-400 mt-2">{pet.age} {pet.age > 1 && pet.age < 5 ? 'года' : 'лет'}</p>
        <div className="mt-4">
          <Button variant="outline" to={`/mypets/${pet.id}`} className="w-full">
            Подробнее
          </Button>
        </div>
      </div>
    </motion.div>
  );
});