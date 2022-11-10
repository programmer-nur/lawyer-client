import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MyContext } from '../Context/AuthContext';
import useTitle from './useTitle';

const AddReview = ({service}) => {
	const {user} = useContext(MyContext)
	useTitle('add review')
	const handelAddReview=(e)=>{
		e.preventDefault() 
		const from = e.target;
		const name = from.name.value;
		const email = user?.email || 'unregistrd';
		const message = from.message.value;

		const review = {
			serviceId:service._id,
			service:service.name,
			UserName:name,
			photo:user?.photoURL || 'https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=600',
			email,
			message

		}

		fetch(`http://localhost:5000/review`, {
			method:'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(review),

		})
		.then(res=>res.json())
		.then(data=>{
			if(data.acknowledged){
				from.reset()
				toast.success('Review Added', {autoClose: 700})
			};
		})
		
	}
    return (
        <div className="flex flex-col mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		
		<form onSubmit={handelAddReview}>

		<div className="flex flex-col w-full">
				<div className="col-span-full my-4 sm:col-span-3">
					<label htmlFor="email" className="text-sm">Name</label>
					<input id="email" name='name' type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400 border-gray-700 text-gray-900" required/>
				</div>
				<div className="col-span-full my-4 sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name='email' type="text" placeholder="Email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400 dark:border-gray-700 text-gray-900" required />
				</div>
			<textarea name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-900 dark:bg-gray-900" required></textarea>
			{
				user?.uid? 
				<button className='py-2 text-center bg-fuchsia-600 border border-red-500 my-4'>Add Review</button>:
				<p className='pt-2'>Please login to add a review ! <Link className='text-red-600' to='/login'>Log In</Link></p>

			}
		</div>
		</form>
	</div>
</div>
    );
};

export default AddReview;