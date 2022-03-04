import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

    return (
        <div className="banner-body">

            <Carousel className=''>

                <Carousel.Item className=''>
                    <div>
                        <img
                            className="d-block w-100 h-50 car-img"
                            src="https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="text-container">
                            <h1 className=" text-dark"><span style={{ 'color': '#fff' }}>Welcome</span> to TourismBD <br /> Awaken To A Different World</h1>
                            <h5 className='text-dark' /*style={{ 'color': '#40E0D0' }}*/>Exclusive holidays for the single traveler.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100 car-img"
                            src="https://images.pexels.com/photos/2544254/pexels-photo-2544254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="text-container">
                            <h1 className="text-light"><span style={{ 'color': '#FFC300' }}>Welcome</span> to TourismBD <br /> Awaken To A Different World</h1>
                            <h5 style={{ 'color': '#40E0D0 ' }}>Exclusive holidays for the single traveler.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100 car-img"
                            src="https://cdn.theculturetrip.com/wp-content/uploads/2017/03/shutterstock_385388497.jpg"
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="text-container">
                            <h1 className="text-light "><span style={{ 'color': '#FFC300' }}>Welcome</span> to TourismBD <br /> Awaken To A Different World</h1>
                            <h5 className='text-dark third' style={{ 'color': '#40E0D0 ' }}>Exclusive holidays for the single traveler.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>

            {/* <div className='ghartera-image-box'>
                <img src="https://images.pexels.com/photos/1819657/pexels-photo-1819657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <img className='mid-image' src="https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <img src="https://images.pexels.com/photos/2918010/pexels-photo-2918010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div> */}


            {/* <div class="banner-progress-box">
                <div className='banner-progress-container'>
                    {/* <h3>Branding</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p> 
                    <img src="https://images.pexels.com/photos/1819657/pexels-photo-1819657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>

                <div className='banner-progress-container'>
                     <h3>Vission</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p> 
                    <img src="https://images.pexels.com/photos/1819657/pexels-photo-1819657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>

                <div className='banner-progress-container'>
                     <h3>Quality</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p>
                    <img src="https://images.pexels.com/photos/1819657/pexels-photo-1819657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
            </div>*/}


        </div>
    );
};

export default Banner;