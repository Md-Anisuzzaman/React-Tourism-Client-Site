import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {

    //Declaration of state

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('https://morning-brushlands-58353.herokuapp.com/services')
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
                            <div className=" cart mt-5 mb-5">
                                <div>
                                    <img className="img-wrap" src={service.simg} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-style">{service.PlaceName}</h4>
                                    <p className="text-style">Package: {service.tour}</p>
                                    <p className="text-style">Price: ${service.price}</p>

                                    <Link to={`/bookingdetails/${service._id}`}><button className="btn btn-primary w-50">Details</button></Link>

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