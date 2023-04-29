import React from 'react'
import "./burgers.scss"
import MenuCard from '../menuCard/MenuCard'
const Burgers = () => {
    return (
        <div className='sFood'>
            <h1>SANDWICHES AND WRAPS</h1>
            <div className="foodItem">
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
        </div>
    )
}

export default Burgers