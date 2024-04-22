import React from "react"

interface CardCoffeeProps{
    title:     String,
    img:       String,
    rating:    Number | null,
    votes:     Number,
    popular:   Boolean,
    available: Boolean,
    price:     String
}


export const CardCoffee:React.FC<CardCoffeeProps> = ({
    title,
    img,    
    rating,
    votes,
    popular,
    available,
    price
}) => {
  return (
    <div className="card">
        <figure className="card_image">
            <img src={img} alt="" />
            {
                popular?
                    <span className="card_caption">
                    <p className="fontLabel">Popular</p>
                    </span>
                :null
            }
            
        </figure>
        <div className="card_body">
            <p className="fontLabel">{title}</p>
            <span className="card_price">
                <p className="fontPriceText">
                    {price}
                </p>
            </span>
        </div>
        <div className="card_footer">
            <div className="card_footer_votes">
                {
                    rating === null ?
                    <>
                        <img src="Star.svg" alt="" />
                        <p className="fontSmallText card_footer_votes-another">
                            No ratings
                        </p>
                    </>:
                    <>
                        <img src="Star_fill.svg" alt="" />
                        <p className="fontSmallText">
                            4.65
                        </p>
                        <p className="fontSmallText card_footer_votes-another">
                            {`(${votes} votes)`}
                        </p>
                    </>
                }
            </div>
            {
                !available ? 
                <p>Sold Out</p>
                :null
            }
        </div>
    </div>
  )
}
