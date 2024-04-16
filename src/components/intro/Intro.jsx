import React from 'react'
import "./intro.css"

import women from "../../img/man.png"

const Intro = () => {
  return (
    <div className='container'>
      <div className="left">
        <h1>Adventures in creative age</h1>
        <p className='desc'>We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.</p>
          <div className="info">
          <button>START A PROJECT</button>
          <div className="contact">
            <span className="phone">Call Us (012) 345 - 6789</span>
            <span className="contactText">For any question or concern</span>
          </div>
          </div>
          
      </div>
      <div className="right">
        <img src={women} alt="" />
      </div>
      <div className="introShape">
      </div>
      <div className="square"><i class="fa-solid fa-comments-dollar"></i></div>
      <div className="circle"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
      <div className="rectangle"></div>

    </div>
  )
}

export default Intro