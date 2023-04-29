import React from 'react'

const Slider = () => {
    return (
        <div className='slider'>
            <div id="carouselExample" class="carousel slide ">
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{ height: '450px' }}>
                        <img src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg&ga=GA1.2.2095687527.1675591812&semt=robertav1_2_sidr" class="d-block w-100" alt="..." style={{
                            position: 'absolute',
                            objectFit: 'cover',
                            top: 0,
                            left: 0,
                            height: '100%',
                            minHeight: '500px'
                        }} />
                    </div>
                    <div class="carousel-item" style={{ height: '450px' }}>
                        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." style={{
                            position: 'absolute',
                            objectFit: 'cover',
                            top: 0,
                            left: 0,
                            height: '100%',
                            minHeight: '500px'
                        }} />
                    </div>
                    <div class="carousel-item" style={{ height: '450px' }}>
                        <img src="https://images.pexels.com/photos/3730950/pexels-photo-3730950.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." style={{
                            position: 'absolute',
                            objectFit: 'cover',
                            top: 0,
                            left: 0,
                            height: '100%',
                            minHeight: '500px'
                        }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider