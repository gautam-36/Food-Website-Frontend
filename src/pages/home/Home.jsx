import React from 'react'
import "./home.scss"
import Slider from '../../component/slider/Slider'
import Header from '../../component/header/Header'
import Category from '../../component/categoryFood/Category'
const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Slider />
            <Category />




        </div>
    )
}

export default Home 