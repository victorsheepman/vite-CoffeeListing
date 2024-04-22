import { useContext, useEffect, useMemo, useState} from "react";
import { CoffeeContext } from "../context";

export const Home = () => {
  const {coffeeList} = useContext(CoffeeContext);
  const [isNow, setIsNow] = useState<Boolean>(true)


  const list = useMemo(() => {
    if (isNow) {
      return coffeeList.filter(coffe=>coffe.available === true)
    }else{
      return coffeeList
    }
  }, [isNow])

  useEffect(() => {
    console.log(list)
  }, [isNow])
  

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
        <div className="home_container_filter">
          <button className={isNow === false ? "home_container_filter_active": "home_container_filter_desactive"} onClick={()=>setIsNow(false)}>
            All Products
          </button>
          <button className={isNow === true ? "home_container_filter_active": "home_container_filter_desactive"} onClick={()=>setIsNow(true)}>
            Available Now
          </button>
        </div>
      </div>
    </div>
  )
}
