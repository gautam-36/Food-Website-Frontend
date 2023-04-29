import React from 'react'
import "./surpriseFood.scss"
import MenuCard from '../menuCard/MenuCard'
const SurpriseFood = () => {
    return (
        <div className='sFood'>
            <h1>Today's Surprise Food</h1>
            <div className="foodItem">
                <MenuCard />
                <MenuCard />

            </div>
        </div>
    )
}

export default SurpriseFood