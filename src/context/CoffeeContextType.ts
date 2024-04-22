import { Coffee } from "../schema";

export interface CoffeeContextType {
    coffeeList: Coffee[];
    fetchApi: () => void;
   // toggleTask: (id: number) => void;
  }
  