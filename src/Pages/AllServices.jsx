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
    <section className="mx-6 md:mx-16">
     <div className="py-6  md:py-16">
     <span className="text-lime-500 text-xl text-center">Services</span>
      <h3 className="text-5xl text-center text-black/70 font-semibold">
       
       Our Services{" "}
      </h3>
     </div>
      <div className="grid grid-cols-1 mx-3 md:grid-cols-3 gap-4">
        {services?.slice(0,6)?.map((service) => (
          <LimiteServices key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-5 py-5">
        <Link to="/services">
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded bg-gray-200 text-gray-900"
          >
            See All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AllServices;
