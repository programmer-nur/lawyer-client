import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LimiteServices from './LimiteServices';

const AllServices = () => {
    const [services, serServices]= useState([])
    console.log(services);

    useEffect(()=>{
        fetch('https://lawyer-server.vercel.app/servicesall')
        .then(res=>res.json())
        .then(data=>serServices(data))
    },[])

    return (
        <>
        <h3 className="text-5xl text-center my-8">All Services </h3>
        <div className='grid grid-cols-1 mx-3 md:grid-cols-3 gap-4'>
            {
                services.map(service=><LimiteServices
                service={service}
                />)
            }
        </div>
            <div className='text-center mt-5 py-5'>
            <Link to='/services'><button type="button" className="px-8 py-3 font-semibold rounded bg-gray-700 text-gray-100">See All</button></Link>
            </div>
        </>
    );
};

export default AllServices;