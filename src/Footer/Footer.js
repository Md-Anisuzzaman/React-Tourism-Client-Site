import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="text-white bg-dark position-footer">
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
            </footer>

        </div>
    );
};

export default Footer;
