import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="test-body">
            <div className='row row-div'>
                <div className='container-1 col-lg-3'>
                    <p> Bangladesh was a whirlwind and full of surprises
                        It was all the more full of surprises because
                        of the lack of information available online
                        about travel in Bangladesh.
                    </p>
                    <h6>Follow Us On</h6>
                    <h3><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h3>
                </div>

                <div className="container-2 col-lg-3">
                    <h5>Quick Link</h5>
                    <li>About Us</li>
                    <li> Tour Package</li>
                    <li>Destination</li>
                    <li>Tour Guide</li>
                    <li>Information</li>
                    <li>Booking Process</li>
                    <li>Blog</li>
                </div>

                <div className="container-3 col-lg-3">
                    <h5>Tour Type</h5>
                    <li>Wild & Adventure Tours</li>
                    <li>Group Tour</li>
                    <li>Camping</li>
                    <li>Seassonal Tour</li>
                    <li>Relaxing Tour</li>
                    <li>Monthly Tour</li>
                    <li>Family Friend Tour</li>
                </div>

                <div className="container-4 col-lg-3">
                    <h5>Gallery</h5>
                    <img src="https://images.indianexpress.com/2018/04/adventure_sport_759x422.jpg" alt="" />
                    <img src="https://porzoton.com/wp-content/uploads/2020/07/Panthumai-Waterfall-Sylhet.jpg" alt="" />
                    <img src="https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <img src="https://images.pexels.com/photos/3848886/pexels-photo-3848886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <img src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <img src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <hr />
                <div className='foo-style'>
                    <h5>Contact Us</h5>
                    <p>+88015485487</p>
                    <p>tourismBD@hotmail.com</p>
                    <p>32,Dhanmondi,Dhaka,Bangladesh.</p>
                </div>

            </div>

        </div>
    );

};

export default Footer;