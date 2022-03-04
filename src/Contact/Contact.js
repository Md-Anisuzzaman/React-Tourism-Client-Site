import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <h1>Connect With Us</h1>
            <p className='contact-p'>We would love to your respond to queries and help  <br /> you to succede of your project , feel free to get in touch with us.</p>
            <div className="contact-box mb-5">
                <div className="contact-left">
                    <h3>Sent your message</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="Email" name="" id="" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                        <button className="sub-button" type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3> Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>contact@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+88 012 578 2112</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>#213, Gazipur,Sanarpar <br />
                                Narayangang,Chasara,Dhaka<br />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> 
    );
};

export default Contact;
    
        // <div className='mt-3'>
        //   <div className="contact-body">
        //     <div class="address-body">
        //         <div className='contact-address mt-5' >
        //             <h4>Main Office</h4>
        //             <p>Dhaka,Banani</p>
        //         </div>
        //         <div className='contact-address'>
        //             <h4>Phone</h4>
        //             <p>0054892598</p>
        //         </div>
        //         <div className='contact-address'>
        //             <h4>Email</h4>
        //             <p>TourismBD@gmail.com</p>
        //         </div>
        //     </div>

        //     <div className="contact-form mt-3 w-75 p-5 d-flex justify-content-center">
        //         <form className=' form-login w-100' action="">
        //             <h3 className='text-style'>Send Your Message</h3>
        //             <input className=' form-control mb-3' type="text" placeholder='Enter your name' />
        //             <input className=' form-control mb-3' type="email" name="" id="" placeholder='Enter your email' />
        //             <textarea className='form-control' name="" id="" cols="30" rows="3" placeholder='Write your message'></textarea>
        //             <button className='btn btn-primary w-100' type='submit'>Send</button>
        //         </form>
        //     </div>
        // </div>
        // </div>