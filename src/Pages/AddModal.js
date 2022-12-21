import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddModal = ({rev,visible,onClose,}) => {
	const review = useLoaderData()
	const [editReviews, setEditReviews] = useState({})
	console.log(review);
    if(!visible){
        return null
    }
	const handelEditReview = (e) => {
        e.preventDefault()
        fetch(`https://lawyer-server.vercel.app/review/${rev._id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(editReviews)
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
        const newReview = { ...editReviews }
        newReview[field] = value
        setEditReviews(newReview)
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
		<div className="flex flex-col max-w-md gap-2 mx-auto p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
		<div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100">
			<h2>Update Review</h2>
	<form onSubmit={handelEditReview} className="space-y-4 ng-untouched ng-pristine ng-valid">
		<div className="flex flex-col">
			<label htmlFor="email" className="sr-only">Service Name</label>
			<input onChange={handelInputUpdate} id="text" type="text" placeholder="Service" name='service' className="rounded-t-md p-2 border-gray-600 bg-gray-100 text-gray-900 focus:ring-violet-400 mb-4 focus:border-violet-400 focus:ring-2" defaultValue={rev.service}/>
			
			<textarea onChange={handelInputUpdate} name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-900 dark:bg-gray-900" defaultValue={rev.message}></textarea>
		</div>
        <div className="flex flex-col justify-center gap-3 mt-6  sm:flex-row">
		<button onClick={onClose} className="px-6 bg-slate-500 py-2 rounded-sm">Cancel</button>
		<button type='submit' className="px-6 py-2 rounded-sm shadow-sm bg-violet-400 text-gray-900">Update</button>
	</div>
	</form>
</div>
	</div>
    </div>
    );
};

export default AddModal;