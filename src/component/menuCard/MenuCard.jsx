import React from 'react'
import "./menuCard.scss"
const MenuCard = () => {
  return (
    <div className='MenuCard'>
     <div className="imgBox">
        <img src="https://d3gy1em549lxx2.cloudfront.net/fd4919c6-35a6-4377-baab-cbcc19da6590.jpg" alt="" />
     </div>
      <div className="menuDesc">
        <p>Spinach Corn Whole Wheat Sandwich</p>
        <div className="price">
        <p className='priceP'>$245</p>
        <p className='orderP'>ADD</p>
        </div>
      </div>
    </div>

  )
}

export default MenuCard