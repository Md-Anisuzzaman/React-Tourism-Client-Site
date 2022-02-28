import React from 'react';
import './Footer.css';
import footerLogo from './../images/travel-logo.png'

const Footer = () => {
    return (
        <div>
            {/* <footer className="text-white bg-dark position-footer">
                <div className='d-flex row'>
                    <div className="m-auto col-md-4">
                        <h6 className="mt-2">Contact Us</h6>
                        <p className="mt-3">
                            Dhaka,Banani <br />
                            Email: HelloDoctor@gmail.com <br />
                            mobile: 00548925 , 006579211
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <p className="mt-5">No matter where in Bangladesh you want to go,
                            <br /> we can help get you there,
                            <br />Book A Ticket And Just Leave,
                            <br />Happiness Is Travelling. </p>
                    </div>
                    <div className="m-auto mt-3 col-md-4">
                        <h5 className="mt-2">Find us at..</h5>
                        <br />
                        <h1><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h1>
                        <p className="mb-5">Copyright 2021</p>
                    </div>

                </div>
            </footer> */}

            <footer className="footer">
                <div className="l-footer">
                    <h1>
                        <img className='footer-logo' src={footerLogo} alt="" />
                    </h1>
                    <p>
                        Discover funny anecdotes that will make you laugh, inspiring love stories from the road that will warm your heart, wild travel tales that will have you glued to your screen, travel horror stories that will take you out of your comfort zone, scary travel stories that will creep you out, and more.</p>
                </div>
                <ul className="r-footer">
                    <li>
                        <h2>Social</h2>
                        <ul className="box">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Pinterest</a></li>
                            <li><a href="#">Dribbble</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>Information</h2>
                        <ul className="box h-box">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Tickets</a></li>
                            <li><a href="#">Certifications</a></li>
                            <li><a href="#">Customer Service</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Legal</h2>
                        <ul className="box">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Contract</a></li>
                        </ul>
                    </li>
                </ul>
                <h1><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h1>
                <div className="b-footer">
                    <p>
                        All rights reserved by ©TourismBD 2022 </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
