import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-body">
            {/* <h2 className="text-stye">Contact Us</h2>
            <p className="mt-3">
                Dhaka,Banani <br />
                Email: TourismBD@gmail.com <br />
                mobile: 00548925 , 006579211
            </p> */}

            <div className='contact-address mt-5' >
                <h4>Main Office</h4>
                <i class="fa-solid fa-chair-office"></i>
                <p>Dhaka,Banani</p>
            </div>
            <div className='contact-address'>
                <h4>Phone</h4>
                <p>0054892598</p>
            </div>
            <div className='contact-address'>
                <h4>Email</h4>
                <p>TourismBD@gmail.com</p>
            </div>


            <div className="contact-form mt-3 p-5 d-flex justify-content-center">
                <form className=' form-login' action="">
                    <h1 className='text-style'>Send Your Message</h1>
                    <input className=' form-control mb-3' type="text" placeholder='Enter your name' />
                    <input className=' form-control mb-3' type="email" name="" id="" placeholder='Enter your email' />
                    <textarea className='form-control' name="" id="" cols="30" rows="3" placeholder='Write your message'></textarea>
                    <button className='btn btn-primary w-100' type='submit'>Send</button>
                </form>
            </div>


        </div>
    );
};

export default Contact;