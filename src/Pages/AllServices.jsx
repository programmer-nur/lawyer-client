import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LimiteServices from './LimiteServices';
import useTitle from './useTitle';

const AllServices = () => {
    const [services, serServices]= useState([])
    useTitle('all service')
    useEffect(()=>{
        fetch('https://lawyer-server.vercel.app/servicesall')
        .then(res=>res.json())
        .then(data=>serServices(data))
    },[])

    return (
        <>
        <h3 className="text-5xl text-center text-orange-500 font-semibold my-16">All Services </h3>
        <div className='grid grid-cols-1 mx-3 md:grid-cols-3 gap-4'>
            {
                services?.map(service=><LimiteServices
                key={service._id}
                service={service}
                />)
            }
        </div>
            <div className='text-center mt-5 py-5'>
            <Link to='/services'><button type="button" className="px-8 py-3 font-semibold rounded bg-gray-200 text-gray-900">See All</button></Link>
            </div>
        </>
    );
};

export default AllServices;