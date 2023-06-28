import React from 'react';
import { Link } from 'react-router-dom';

const LimiteServices = ({service}) => {
    const {img,name,des,_id}=service
    return (
        <div className='flex border-2 border-gray-500 flex-col w-full  h-full dark:text-white text-black rounded-md  outline-y-[6px] -outline-offset-8 outline-red-600 justify-center items-center'>
		<div className='mt-3  text-center'>
			<img src={img} className="w-[80px] rounded-full h-[80px]" alt="" />
		</div>
		<div className='py-3 text-center text-2xl font-semibold'>
			<span>{name}</span>
		</div>
		<div className='text-center  px-2 mb-4'>
			<p>{des.slice(0,99)}...</p>
		</div>
		<div className='my-5'>
			<Link to={`/service/${_id}`} className='p-2  hover:bg-green-500 bg-green-600 text-white font-semibold rounded-sm' href="/#">
				Read More

			</Link>
		</div>
	</div>
    );
};

export default LimiteServices;