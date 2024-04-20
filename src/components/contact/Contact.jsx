import React from 'react'
import map from "../../img/map.png"
import phone from "../../img/phone.png"
import send from "../../img/send.png"
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <div className="formContainer">
            <h1>Question? <br />Let's Get In Touch.</h1>
           
            <form>
                <div className="leftForm">
                    <input type="text" placeholder='Enter Your Name : ' />
                    <input type="text" placeholder='Enter Your Email : ' />
                    <input type="text" placeholder='Subject : ' />
                </div>
                <div className="rightForm">
                    <textarea placeholder='Enter Your Message' id="" cols="30" rows="10"></textarea>
                    <button>SEND</button>
                </div>
            </form>
            </div>
            <div className="AddressContainer">
            <div className="addressItem">
                    <img src={map} className="icon"/>
                    <span className="text">123 Park Avenue St., New York, USA</span>
                </div>
            <div className="addressItem">
                    <img src={phone} className="icon"/>
                    <span className="text">+1 631 1234 5678</span>
                    <span className="text">+1 326 1234 5678</span>
                </div>
            <div className="addressItem">
                    <img src={send} className="icon"/>
                    <span className="text">contact@tanvir.dev</span>
                    <span className="text">sales@raju.dev</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact