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
                        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7422603.jpg"
                        alt="First slide"
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
                        className="d-block w-100"
                        src="https://tourrom.com/wp-content/uploads/2019/01/Discover-sajek-valley-1024x701.jpg"
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
                        src="https://whc.unesco.org/uploads/thumbs/news_2177-1200-630-20201005205405.jpg"
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