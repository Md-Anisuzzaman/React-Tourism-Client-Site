import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './BookingDetails.css';
import axios from 'axios';

const BookingDetails = () => {

    //Declaration of state

    const [bookingDetails, setBookingDetails] = useState({});

    let { bookingdetailsid } = useParams();

    //using react form to add data

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        //using axios fetch to post data
        axios.post('https://morning-brushlands-58353.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }

    useEffect(() => {
        fetch(`https://morning-brushlands-58353.herokuapp.com/${bookingdetailsid}`)
            .then(res => res.json())
            .then(data => setBookingDetails(data))
        console.log(bookingdetailsid);
    }, [bookingdetailsid])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${bookingdetailsid}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const showData = data.find(showData => showData.id === parseInt(bookingdetailsid));
    //             setBookingDetails(showData);
    //             console.log(bookingdetailsid);

    //         })

    // }, [bookingdetailsid])


    return (

        //fetch to post data in  db

        <div className="booking-confirmation">
            <h1 className="mt-5 mb-5 text-success">Interested to booking, fill the form click on submit button <span><i className="far fa-thumbs-up text-dark"></i></span></h1>
            <div className="container">

                <div className="form-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="Traveler Name" />
                        <input {...register("name")} placeholder="Tour place Name" />
                        <input {...register("email")} placeholder="Email" />
                        <input {...register("price")} placeholder="price" />
                        {/* <textarea {...register("description")} placeholder="Description" /> */}
                        <input {...register("img")} placeholder="Image Url" />
                        <input className=" btn btn-warning fs-3" type="Submit" />
                    </form>
                </div>

                <div className="row">
                    <div className="col-md-5 mt-5 mb-5">
                        <img className="w-100" src={bookingDetails.img} alt="" />
                    </div>

                    <div className="col-md-7 mt-5 mb-3">

                        <h2 className="">{bookingDetails.name}</h2>
                        <p>Tour: {bookingDetails.tour} </p>
                        <p>Tour Expense: {bookingDetails.price}</p>
                        <p>{bookingDetails.description}</p>
                        {/* <button className="btn btn-warning rounded fs-4 mt-3 mb-3">Confirm Booking</button> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingDetails;