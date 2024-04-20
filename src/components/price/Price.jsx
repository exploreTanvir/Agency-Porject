import React from 'react'
import Anime from '../animatedShape/Anime'
import PriceCart from '../priceCart/PriceCart'
import "./price.css"

const Price = () => {
  return (
    <div className='price'>
        <PriceCart price="10" type="BASIC" />
        <PriceCart price="20" type="PREMIUM" />
        <PriceCart price="30" type="ADVANCED" />
      <div className="introShape"></div>
      <Anime/>
    </div>
  )
}

export default Price