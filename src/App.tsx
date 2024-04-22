import { CoffeeListing } from "./CoffeeListing";
import { CoffeeContext, useCoffeeContext } from "./context";

function App() {
  return (
    <CoffeeContext.Provider value={useCoffeeContext()}>
      <CoffeeListing />
    </CoffeeContext.Provider>
  )
}

export default App
