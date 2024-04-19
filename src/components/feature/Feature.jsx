import React from 'react'
import app from "../../img/app.jpg"
import "./feature.css"
import Anime from '../animatedShape/Anime'

const Feature = () => {
  return (
    <div className='feature'>
        <div className="left">
            <img src={app} alt="" />
        </div>
        <div className="right">
            <span className="title"><b>Good</b> design
          <br />
          <b>good</b> business</span>
            <span className="subTitle">We know that good design means good business.</span>
            <p className="desc"> We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.</p>
          <p className="desc"> We care your business and guarantee you to achieve marketing goals.</p>
            <button>Learn More</button>
        </div>

        <div className="introShape"></div>
        <Anime/>
    </div>
  )
}

export default Feature
