import { CoffeeContext, useCoffeeContext } from "./context";

function App() {

  return (
    <CoffeeContext.Provider value={useCoffeeContext()}>
      <h1 className="fontHeading">hola</h1>
    </CoffeeContext.Provider>
  )
}

export default App
