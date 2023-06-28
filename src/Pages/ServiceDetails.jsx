import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from './AddReview';
import Review from './Review';
import useTitle from './useTitle';

const ServiceDetails = () => {
    const {img,name,des,price,_id}= useLoaderData({})
	useTitle('service-details')
    return (
        <>
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-white text-black">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
			<div className="space-y-2">
				<p className="inline-block text-black text-2xl font-semibold sm:text-3xl">{name}</p>
				<p className=" text-gray-400">
					{des}
				</p>
				<p className='text-orange-400'> Price : $ {price}</p>
			</div>
		</div>
	</div>
</div>
<hr className=''/>
<section className='my-5'>
<Review service={{img,name,_id}}/>
</section>
<section className='my-5'>
<AddReview service={{img,name,_id}}/>
</section>
</>
    );
};

export default ServiceDetails;