import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {img,name,des}= useLoaderData({})
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
			<div className="space-y-2">
				<p className="inline-block text-white text-2xl font-semibold sm:text-3xl">{name}</p>
				<p className=" text-gray-400">By
					{des}
				</p>
			</div>
		</div>
	</div>
</div>
    );
};

export default ServiceDetails;