import React from 'react'
import "./header.scss"
import OfferBar from '../offerBar/OfferBar'
import Navbar from '../navbar/Navbar'
const Header = () => {
  return (
    <div className='header'>
          <OfferBar />
          <Navbar />
    </div>
  )
}

export default Header