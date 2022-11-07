import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => {
    const services =useLoaderData([])
    console.log(services);
    return (
        <div className='grid grid-cols-3 p-5 m-6 w-full mx-auto gap-7'>

            {
                services.map(service=><ServiceItem
                key={service._id}
                service={service}
                />)
            }
            <div className='w-full mx-auto'><Link to='/blog'><button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">See All</button></Link></div>
        </div>
    );
};

export default Services;