import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {

    //Declaration of state
    
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="sevices-border">

            <div className="row">
                {
                    // Using-map-function-to-show-data-in-cart

                    services.map(service =>
                        <div className="col-md-3" key={service.id}>
                            <div className="cart mt-3 mb-5">
                                <div>
                                    <img className="img-wrap" src={service.img} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-style">{service.name}</h4>
                                    <p className="text-style">Package: {service.tour}</p>
                                    <p className="text-style">Price: {service.price}$</p>

                                    <Link to={`/bookingdetails/${service._id}`}><button className="btn btn-primary w-50">Book Now</button></Link>

                                    {/* <Link to={`/details/${service.id}`}> <button className="btn btn-warning">Details</button></Link> */}
                                    {/* <p className="p-4 text-justify"><span className="fw-bold">Details:</span> {service.details}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>


        </div>

    );
};

export default Services;