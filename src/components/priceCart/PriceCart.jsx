import React from 'react'
import "./priceCart.css"

const PriceCart = ({price,type}) => {
  return (
   <div className="priceC">
     <div className='priceCart'>
      <p>$ <span>{price}</span>/month</p>
    </div>

      <button className="plan">{type} PLAN</button>
      <ul>
        <li>200 Hand Crafted Templates</li>
        <li>Exclusive Support</li>
        <li>50+ Prebuilt Website</li>
        <li>Premium Plugins</li>
      </ul>
      <button className="join">JOIN NOW</button>
   </div>
  )
}

export default PriceCart