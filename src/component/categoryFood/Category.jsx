import React from 'react'
import SurpriseFood from '../surpriseFood/SurpriseFood'
import SANDWICHES from '../SANDWICHES/Sandwiches'
import Burgers from '../Burgers/Burgers'

const Category = (heading) => {
    return (
        <div>
            <SurpriseFood />
            <SANDWICHES />
            <Burgers />
        </div>
    )
}

export default Category