import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";
import './BookingDetails.css';
import axios from 'axios';

const BookingDetails = () => {

    const { user } = useAuth();

    //Declaration of state

    const [bookingDetails, setBookingDetails] = useState({});

    let { bookingdetailsid } = useParams();

    //using react form to add data

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {
        data.email = user?.email;
        const allData = { ...data, price: bookingDetails.price }
        console.log(data);

        fetch("https://morning-brushlands-58353.herokuapp.com/addorder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(allData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        // console.log(data);
        reset();
        alert("Congratulations, booking placed")
        e.preventDefault();


        // //using axios fetch to post data
        // axios.post('https://morning-brushlands-58353.herokuapp.com/services', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             alert('added successfully');
        //             reset();
        //         }
        //     })

    }

    useEffect(() => {
        fetch(`https://morning-brushlands-58353.herokuapp.com/services/${bookingdetailsid}`)
            .then(res => res.json())
            .then(data => setBookingDetails(data))
        console.log(bookingdetailsid);

    }, [bookingdetailsid])

    return (

        //fetch to post data in  db

        <div className="booking-confirmation">
            <h1 className="mt-5 mb-5 text-success">Interested to booking, fill the form click on book now button <span><i className="far fa-thumbs-up text-dark"></i></span></h1>
            <div className="container">

                <div className="row">

                    <div className="col-md-7 mt-5 mb-3">
                        <h2 className="">{bookingDetails.PlaceName}</h2>
                        <p>Tour: {bookingDetails.tour} </p>
                        <p>Tour Expense: ${bookingDetails.price}</p>
                        <p>{bookingDetails.sdescription}</p>
                        {/* <button className="btn btn-warning rounded fs-4 mt-3 mb-3">Confirm Booking</button> */}
                    </div>

                    <div className="col-md-5 mt-5 mb-5">
                        <img className="w-100" src={bookingDetails.simg} alt="" />
                    </div>
                </div>
            </div>

            <div className="form-body shadow bg-light p-4 mb-5 w-50">
                <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
                    <input className=' form-control mt-3 mb-3' {...register("name")}
                        placeholder="Traveler Name"
                    />
                    {/* 
                        <input {...register("number")}
                            placeholder="Tour place Name"
                            defaultValue={bookingDetails.tour}
                        /> */}
                    <select className=' form-control mb-3' {...register("tour")}>
                        <option value="2days">2days</option>
                        <option value="2days">3days</option>
                        <option value="other">other</option>
                    </select>

                    <input className=' form-control mb-3' {...register("email")}
                        placeholder="Email"
                        defaultValue={user.email} />

                    <input className=' form-control mb-3' {...register("address")}
                        placeholder="address"
                    />

                    <input className=' form-control mb-3' {...register("price")}
                        placeholder="price"
                        defaultValue={bookingDetails.price} />

                    {/* <textarea {...register("description")} placeholder="Description" /> */}

                    <input className="btn btn-primary fs-5"
                        value="Book Now"
                        type="Submit" />
                </form>
            </div>

        </div>
    );
};

export default BookingDetails;