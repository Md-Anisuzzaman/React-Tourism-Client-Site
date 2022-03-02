import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
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
    return (
        <div className='booking-confirmation'>
             <h1 className="mt-5 mb-3 text-success">Add Service <span><i className="far fa-thumbs-up text-dark"></i></span></h1>
            <div className="container">

                <div className="form-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="Tour place Name" />
                        <textarea {...register("description")} placeholder="Description" />
                        <input {...register("tour")} placeholder="Packages" />
                        <input {...register("img")} placeholder="Image Url" />
                        <input {...register("price")} placeholder="price" />
                        <input className=" btn btn-info fs-5" value="Add Service" type="Submit" />
                    </form>
                </div>
                </div>
            
        </div>
    );
};

export default AddService;