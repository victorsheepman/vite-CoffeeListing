import React from "react"

interface CardCoffeeProps{
    title:     String,
    img:       String,
    rating:    Number,
    votes:     Number,
    popular:   Boolean,
    available: Boolean,
    price:     String
}


export const CardCoffee:React.FC<CardCoffeeProps> = () => {
  return (
    <div>CardCoffee</div>
  )
}
