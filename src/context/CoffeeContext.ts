import { createContext, useState } from 'react';
import { Coffee } from '../schema';
import { CoffeeContextType } from '.';




// Creamos el contexto
export const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useCoffeeContext = () => {
    const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

    return {
        coffeeList,
    }
};
