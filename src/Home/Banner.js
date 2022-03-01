import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

    return (
        <div className="banner-body">

            <Carousel>
                <Carousel.Item>

                    <img
                        className="d-block w-100 h-50"
                        src="https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <div className="text-container">
                            <h1 className=" text-dark"><span style={{ 'color': '#fff' }}>Welcome</span> to TourismBD <br /> Awaken To A Different World</h1>
                            <h5 className='text-dark' /*style={{ 'color': '#40E0D0' }}*/>Exclusive holidays for the single traveler.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2544254/pexels-photo-2544254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="text-container">
                            <h1 className="text-light"><span style={{ 'color': '#FFC300' }}>Welcome</span> to TourismBD <br /> Awaken To A Different World</h1>
                            <h5 style={{ 'color': '#40E0D0 ' }}>Exclusive holidays for the single traveler.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 third-img"
                        src="https://cdn.theculturetrip.com/wp-content/uploads/2017/03/shutterstock_385388497.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="text-container text-3rd">
                            <h1 className="text-light "><span style={{ 'color': '#FFC300' }}>Welcome</span> to TourismBD <br /> Awaken To A Different World</h1>
                            <h5  className='text-dark third'  style={{ 'color': '#40E0D0 ' }}>Exclusive holidays for the single traveler.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};

export default Banner;