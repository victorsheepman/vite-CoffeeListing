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
    <div className="card">
        <figure className="card_image">
            <img src="" alt="" />
            <span className="card_caption">
                <p className="fontLabel">Popular</p>
            </span>
        </figure>
        <div className="card_body">
            <p className="fontLabel">House </p>
            <span className="card_price">
                <p className="fontPriceText">
                    $ 3.50
                </p>
            </span>
        </div>
        <div className="card_footer">
            <div>
                
            </div>
        </div>
    </div>
  )
}
