import { TaskContext, useTaskContext } from "./context";

function App() {

  return (
    <TaskContext.Provider value={useTaskContext()}>
      <h1 className="fontHeading">hola</h1>
    </TaskContext.Provider>
  )
}

export default App
