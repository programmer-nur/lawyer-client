import React from 'react';
import { Link } from 'react-router-dom';
const Baner = () => {
    return (
        <div>
            <section className="bg-gray-500 text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		   <p>Hello,</p>
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
				I'm Nur Mohammad
			</h1>
			<h4 className="text-xl mb-8">A Corporate Lawyer</h4>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<Link to='services' rel="noopener noreferrer" href="#" className="px-8 focus:outline-none focus:ring hover:ring bg-orange-500 hover:bg-orange-600 py-3 text-lg font-semibold  rounded">My Services</Link>
			</div>
		</div>
		<div className="flex h-full items-center pr-40 justify-center p-6 lg:mt-0 ">
			<img src="https://i.ibb.co/SK4fFsR/depositphotos-118543600-stock-photo-handsome-caucasian-lawyer-removebg-preview.png" alt="" className="object-contain w-full md:w-[800px] " />
		</div>
	</div>
</section>
        </div>
    );
};

export default Baner;