import React from 'react'
import "./app.css"
import Contact from './components/contact/Contact'
import Feature from './components/feature/Feature'
import Footer from './components/footer/Footer'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Price from './components/price/Price'
import Services from './components/services/Services'

const App = () => {
  return (
    <div className='components'>
      <Navbar/>
      <Intro/>
      <Feature/>
      <Services/>
      <Price/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App