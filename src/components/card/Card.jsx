import React from 'react'
import "./card.css"

import search from "../../img/search.png"

const Card = () => {
  return (
    <div className='cardContainer'>
        <img src={search} alt="" />
        <p>Lorem ipsum dolor sit ame consectetur.</p>

    </div>
  )
}

export default Card
