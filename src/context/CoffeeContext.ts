import { createContext, useState } from 'react';
import { Coffee } from '../schema';
import { CoffeeContextType } from '.';




// Creamos el contexto
export const CoffeeContext = createContext<CoffeeContextType>({
    coffeeList: [],
    fetchApi: function (): void {
        throw new Error('Function not implemented.');
    }
});

// Hook personalizado para acceder al contexto
export const useCoffeeContext = () => {
    const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

    const fetchApi = async ()=>{
        const res = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const json = await res.json();
        setCoffeeList(json)
    }

    return {
        coffeeList,
        fetchApi
    }
};
