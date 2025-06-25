import { createContext, useContext, useState, ReactNode } from 'react';
import type { Pet } from './types';
import { mockPets } from './mock';

interface PetContextType {
  pets: Pet[];
  addPet: (pet: Pet) => void;
  removePet: (id: string) => void;
  updatePet: (pet: Pet) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider = ({ children }: { children: ReactNode }) => {
  const [pets, setPets] = useState<Pet[]>(mockPets);

  const addPet = (pet: Pet) => {
    setPets(prev => [...prev, pet]);
  };

  const removePet = (id: string) => {
    setPets(prev => prev.filter(pet => pet.id !== id));
  };

  const updatePet = (updatedPet: Pet) => {
    setPets(prev => prev.map(pet => pet.id === updatedPet.id ? updatedPet : pet));
  };

  return (
    <PetContext.Provider value={{ pets, addPet, removePet, updatePet }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePets = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePets должен использоваться внутри PetProvider');
  }
  return context;
}; 