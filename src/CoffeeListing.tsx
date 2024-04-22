import { useContext, useEffect } from 'react'
import { CoffeeContext } from './context'

export const CoffeeListing = () => {
    const {fetchApi} = useContext(CoffeeContext);
    useEffect(() => {
        fetchApi()
    }, [])
    
  return (
    <div>CoffeeListing</div>
  )
}
