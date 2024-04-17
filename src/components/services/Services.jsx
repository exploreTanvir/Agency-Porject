import React, { useState } from 'react'
import how from "../../img/how.png"
import play from "../../img/play.png"
import Card from '../card/Card'
import "./services.css"


const Services = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className='services'>
      <div className="left">
        <img src={how} open={open} alt="" />
        <div className="introShape"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1 className="title">Simple process to start </h1>
          <p className="desc">We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources</p>
        </div>
        <div className="card">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <button><img src={play} alt="" /> HOW IT WORKS</button>
      </div>
    </div>
  )
}

export default Services