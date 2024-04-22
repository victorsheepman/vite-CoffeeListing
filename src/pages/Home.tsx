import { useContext} from "react";
import { CoffeeContext } from "../context";

export const Home = () => {
  const {coffeeList} = useContext(CoffeeContext);
  return (
    <div className="home">
     
      <div className="home_container">
        <div className="home_container_header">
            <h1 className="fontHeading">
              Our Collection
            </h1>
            <p className="fontBody">
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
        </div>
      </div>
    </div>
  )
}
