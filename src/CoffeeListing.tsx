import { useContext, useEffect } from 'react'
import { CoffeeContext } from './context'
import { Home } from './pages';
import { CardCoffee } from './components';

export const CoffeeListing = () => {
    const {fetchApi} = useContext(CoffeeContext);
    useEffect(() => {
        fetchApi()
    }, [])
    
  return (
    <CardCoffee  />
  )
}
