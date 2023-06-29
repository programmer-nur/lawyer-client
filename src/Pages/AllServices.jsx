import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LimiteServices from "./LimiteServices";
import useTitle from "./useTitle";

const AllServices = () => {
  const [services, serServices] = useState([]);
  useTitle("all service");
  useEffect(() => {
    fetch("https://lawyer-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => serServices(data));
  }, []);

  return (
    <section className="mx-6 md:mx-16 my-6  md:my-16">
     <div>
     <span className="text-gray-400 text-sm md:text-lg   text-center">WHAT WE ARE EXPERT AT</span>
      <h3 className="lg:text-5xl text-2xl md:text-3xl mt-2 text-center text-black font-semibold">
       
      Legal Practices Area{" "}
      </h3>
     </div>
      <div className="grid py-6 md:py-16 grid-cols-1 mx-3 md:grid-cols-3 gap-4">
        {services?.slice(0,6)?.map((service) => (
          <LimiteServices key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-5 py-5">
        <Link to="/services">
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded bg-[#b1976b] text-white"
          >
            See All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AllServices;
