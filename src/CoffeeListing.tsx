import { useContext, useEffect } from 'react'
import { CoffeeContext } from './context'
import { Home } from './pages';

export const CoffeeListing = () => {
    const {fetchApi} = useContext(CoffeeContext);
    useEffect(() => {
        fetchApi()
    }, [])
    
  return (
    <Home/>
  )
}
