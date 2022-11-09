import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => {
    const services =useLoaderData([])
    console.log(services);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 m-6 w-full mx-auto gap-7'>

            {
                services.map(service=><ServiceItem
                key={service._id}
                service={service}
                />)
            }
        </div>
    );
};

export default Services;