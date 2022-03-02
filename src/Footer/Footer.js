import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="test-body">
            <div className='row'>
                <div className='container-1 col-lg-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        dignissimos veniam eius qui? Ipsa!</p>
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
                    <img src="https://kundutirthoovraman.com/wp-content/uploads/2018/11/bangladesh-tourist-banner.jpg" alt="" />
                    <img src="https://kundutirthoovraman.com/wp-content/uploads/2018/11/bangladesh-tourist-banner.jpg" alt="" />
                </div>
                <hr/>
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