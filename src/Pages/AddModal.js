import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddModal = () => {
	const review = useLoaderData()
	const [reviews, setReviews] = useState(review)
	console.log(review);
	const handelUpdateUser = (e) => {
        e.preventDefault()
        fetch(`https://lawyer-server.vercel.app/review/${review._id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(reviews)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('update Successfully', {autoClose:500})
                console.log(data)
                e.target.reset()
            }
        })

    }

	const handelInputUpdate = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newReview = { ...review }
        newReview[field] = value
        setReviews(newReview)
    }
    return (
		<div className="flex flex-col max-w-md gap-2 mx-auto p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
		<div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100">
			<h2>Update Review</h2>
	<form onSubmit={handelUpdateUser} className="space-y-4 ng-untouched ng-pristine ng-valid">
		<div className="flex flex-col">
			<label htmlFor="email" className="sr-only">Service Name</label>
			<input onChange={handelInputUpdate} id="text" type="text" placeholder="Service" name='name' className="rounded-t-md p-2 border-gray-600 bg-gray-100 text-gray-900 focus:ring-violet-400 mb-4 focus:border-violet-400 focus:ring-2" />
			
			<textarea onChange={handelInputUpdate} name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-900 dark:bg-gray-900"></textarea>
		</div>
        <button type='submit' className="px-6 py-2 rounded-sm shadow-sm bg-violet-400 text-gray-900">Update</button>
	</form>
</div>
	</div>
    );
};

export default AddModal;