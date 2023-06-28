import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceItem from "./ServiceItem";
import useTitle from "./useTitle";

const Services = () => {
  const services = useLoaderData([]);
  useTitle("service");
  return (
    <>
     <h2 className="text-center py-5 text-4xl">All Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 m-6 w-full mx-auto gap-7">
      {services.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
    </div>
    
    </>
  );
};

export default Services;
