import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceItem = ({service}) => {
    const {img,name,price,rating,des}=service
    return (
        <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<PhotoProvider>
		<PhotoView src={img}>
		<img src={img} alt="" className="object-cover cursor-pointer object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
		</PhotoView>
	</PhotoProvider>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-100">{des}.</p>
		</div>
		<div className='flex justify-between'>
                <p className='text-lg font-semibold'>Price: {price}</p>
                <p>Rating: {rating}</p>
            </div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Details</button>
	</div>
    
</div>
    );
};

export default ServiceItem;