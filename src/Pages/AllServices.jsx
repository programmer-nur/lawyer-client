import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [services, serServices]= useState([])
    console.log(services);

    useEffect(()=>{
        fetch('http://localhost:5000/servicesall')
        .then(res=>res.json())
        .then(data=>serServices(data))
    },[])

    return (
        <div>
            <h3>all services here</h3>
        </div>
    );
};

export default AllServices;