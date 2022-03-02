import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-body mt-5">
            <h1 className="p-3">About US</h1>
            <p className="">Bangladesh is a land of amazing natural beauty and there
                are no bounds of her prettiness which has glorified by the blessing of nature.
                therefore, in a small country like Bangladesh, there are lots of Tourist Places
                that can be said as a tourist destination Bangladesh, the 8th largest country in
                the world with its population of 166,208,175, is located to the south of Asia.
                It is the capital and largest city of Dhaka, Bangladesh, which is adjacent to countries
                like India, Nepal,and Myanmar. The tourist attractions of Bangladesh include
                history and monuments, holiday villages, beaches, picnic spots, forests and tribal
                people, wildlife of various species.
            </p>
            <div class="row">
                <div className='col-md-6'>
                    <div className='image-box'>
                        <img src="https://www.flightexpert.com/blog/wp-content/uploads/2019/02/Top-places-to-visit-in-Bangladesh-e1549252751384.jpg" alt="" />
                        <img src="https://www.top10about.com/wp-content/uploads/2020/01/Chittagong-Hill-Tracts.jpg" alt="" />
                        <img src="https://static2.tripoto.com/media/filter/tst/img/267346/SpotDocument/1498570282_1498570278_8572196250_566750e6cb_z.jpg" alt="" />
                        <img src="https://i.pinimg.com/originals/4b/45/e1/4b45e1a05f2d3f1921fe055acacf5ddc.jpg" alt="" />
                        {/* {/* <img src="https://s20426.pcdn.co/wp-content/uploads/2018/11/iStock-870378096-e1544710804582-1600x800.jpg" alt="" /> */}
                        {/* <img src="https://images.foody.vn/res/g14/136922/prof/s576x330/foody-mobile-t-2-jpg-991-635677327971124950.jpg" alt="" /> */}
                        {/* <img src="https://i.ytimg.com/vi/3vDqwgp6dC4/maxresdefault.jpg" alt="" />
                    <img src="https://i.ytimg.com/vi/cRkFYSlTPnE/maxresdefault.jpg" alt="" /> */}
                    </div>
                </div>

                <div className='col-md-6 video-div mt-5'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QNUSIOMb6vI"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                             clipboard-write; encrypted-media; gyroscope; 
                             picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            {/* <div className='image-box'>
                <img src="https://www.flightexpert.com/blog/wp-content/uploads/2019/02/Top-places-to-visit-in-Bangladesh-e1549252751384.jpg" alt="" />
                <img src="https://www.top10about.com/wp-content/uploads/2020/01/Chittagong-Hill-Tracts.jpg" alt="" />
                <img src="https://static2.tripoto.com/media/filter/tst/img/267346/SpotDocument/1498570282_1498570278_8572196250_566750e6cb_z.jpg" alt="" />
                <img src="https://i.pinimg.com/originals/4b/45/e1/4b45e1a05f2d3f1921fe055acacf5ddc.jpg" alt="" />
                <img src="https://s20426.pcdn.co/wp-content/uploads/2018/11/iStock-870378096-e1544710804582-1600x800.jpg" alt="" />
                <img src="https://images.foody.vn/res/g14/136922/prof/s576x330/foody-mobile-t-2-jpg-991-635677327971124950.jpg" alt="" />
                {/* <img src="https://i.ytimg.com/vi/3vDqwgp6dC4/maxresdefault.jpg" alt="" />
                    <img src="https://i.ytimg.com/vi/cRkFYSlTPnE/maxresdefault.jpg" alt="" />
            </div> */}

            {/* <div class="progress-box">
                <div className='progress-container'>
                    <h3>Branding</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p>
                </div>

                <div className='progress-container'>
                    <h3>Vission</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p>
                </div>

                <div className='progress-container'>
                    <h3>Quality</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p>
                </div>

                <div className='progress-container'>
                    <h3>Demand</h3>
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Laudantium explicabo
                        alias eosvoluptates aut possimus odit
                        culpa doloribus a aliquam!
                    </p>
                </div>

            </div> */}
        </div>
    );
};

export default About;