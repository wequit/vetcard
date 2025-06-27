
import { memo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEllipsisV,  FaBirthdayCake, FaWeightHanging } from 'react-icons/fa';
import type { Pet } from '../model/types';
import { EditPetButton } from '@/features/edit-pet/ui/EditPetButton';
import { DeletePetButton } from '@/features/delete-pet/ui/DeletePetButton';

const calculateAge = (dateOfBirth: string): string => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age % 10 === 1 && age % 100 !== 11) return `${age} год`;
    if ([2,3,4].includes(age % 10) && ![12,13,14].includes(age % 100)) return `${age} года`;
    return `${age} лет`;
};

export const PetCard = memo(({ pet }: { pet: Pet }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);
  
  const age = calculateAge(pet.dateOfBirth);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden relative"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div ref={menuRef} className="absolute top-4 right-4 z-1">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors">
          <FaEllipsisV />
        </button>

        <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1"
                >
                    <EditPetButton petId={pet.id} />
                    <DeletePetButton petId={pet.id} petName={pet.name} />
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      <img className="h-56 w-full object-cover" src={pet.avatarUrl} alt={pet.name} />
      <div className="p-6">
        <p className="text-sm font-semibold text-teal-500">{pet.species}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{pet.name}</h3>
        <p className="text-slate-600">{pet.breed}</p>
        
        <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col space-y-3 text-sm">
            <div className="flex items-center text-slate-500"><FaBirthdayCake className="mr-3 text-slate-400"/> {age}</div>
            <div className="flex items-center text-slate-500"><FaWeightHanging className="mr-3 text-slate-400"/> {pet.weight} кг</div>
        </div>
      </div>
    </motion.div>
  );
});