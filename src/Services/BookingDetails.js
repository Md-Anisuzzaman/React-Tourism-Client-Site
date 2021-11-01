import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './BookingDetails.css';
import axios from 'axios';

const BookingDetails = () => {


    const [bookingDetails, setBookingDetails] = useState({});

    let { bookingdetailsid } = useParams();

    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('added successfully');
               reset();
           }
        })

    }

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                const showData = data.filter(showData => showData.id === parseInt(bookingdetailsid));
                setBookingDetails(showData);
                console.log(bookingdetailsid);

            })

    }, [bookingdetailsid])
    return (


        <div className="booking-confirmation">
            <h1 className="mt-5 mb-5 text-success">Interested to booking, please click on submit button <span><i className="far fa-thumbs-up text-dark"></i></span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="mt-5 w-100" src={bookingDetails?.img} alt="" />
                    </div>
                    <div className="col-md-7">

                        <h2 className="mt-5">{bookingDetails?.name}</h2>
                        <p>Tour: {bookingDetails?.tour} </p>
                        <p>Tour Expense: {bookingDetails?.price}</p>
                        <p>{bookingDetails?.description}</p>
                        {/* <button className="btn btn-warning rounded fs-4 mt-3 mb-3">Confirm Booking</button> */}
                    </div>
                </div>

               <div claassName="form-body mt-5">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" />
                    <input {...register("email")} placeholder="Email" />
                    <input {...register("tour")} placeholder="Tour" />
                    <input {...register("price")} placeholder="price" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input {...register("img")} placeholder="Image Url" />
                    <input className=" btn btn-warning fs-3" type="Submit" />
                </form>
               </div>
            </div>

        </div>
    );
};

export default BookingDetails;