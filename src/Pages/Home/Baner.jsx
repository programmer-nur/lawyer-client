import React from 'react';
import lawyer from '../../assets/lawyer.mp4'
import { Link } from 'react-router-dom';
const Baner = () => {
    return (
		<div className="relative">
		<video
		  autoPlay
		  loop
		  muted
		  playsInline
		  className="w-full h-full object-cover sm:w-full sm:h-auto blur-[2px]"
		>
		  <source src={lawyer} type="video/mp4" />
		</video>
	  
		<div className="absolute top-0 left-0 w-full h-full flex items-center flex-col justify-center bg-opacity-50 bg-black">
		  <h1 className="text-white text-xl md:text-3xl lg:text-5xl text-center font-bold">
			SOLVE YOUR URGENT LEGAL ISSUES
		  </h1>
		  <h5 className="text-white text-center text-sm md:text-lg px-6 py-6 md:px-20 lg:px-40 font-medium">
			We always try to find out what is the desired outcome of the clients from
			the services we are rendering to them by best lawyers in Bangladesh and
			we plan our course of action to meet the desired goal of the client.
		  </h5>
		  <Link
			to="/services"
			className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 md:px-6 md:py-3 text-base md:font-medium text-white shadow-sm hover:bg-indigo-800 duration-300 hover:bg-left-bottom"
		  >
			GET STARTED
		  </Link>
		</div>
	  </div>
	  

    );
};

export default Baner;