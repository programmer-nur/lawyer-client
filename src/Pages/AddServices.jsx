import React from 'react';
import { toast } from 'react-toastify';
import useTitle from './useTitle';

const AddServices = () => {

    useTitle('add service')
    const handelAddService =e=>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const des = form.des.value;
        const photo=form.photourl.value;
        const price = form.price.value;
        const rating =form.rating.value;

        const service ={
            name,
            des,
           img: photo,
            price,
            rating
        }
        console.log(name,des,photo,price,rating);

        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success('Add Service Successfully', {autoClose:700})
                form.reset()
            }
        })
    }
    return (
        <section className="p-6 text-gray-100">
	<form onSubmit={handelAddService} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">Add Service</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Service Name</label>
			<input id="name" type="text" name='name' placeholder="Service  name"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200 text-black" required/>
		</div>
        <div>
			<label htmlFor="message" className="block mb-1 ml-1">Description</label>
			<textarea id="message" name='des' type="text" placeholder="Description..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200 text-black"></textarea>
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-400">Service Photo</label>
			<input type="text" name="photourl" id="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 text-black focus:dark:border-violet-400" required/>
		</div>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Price</label>
			<input id="price" name='price' type="number" placeholder="Price"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200 text-black" required/>
		</div>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Service Rating</label>
			<input id="rating" name='rating' type="text" placeholder="Rating"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200 text-black" required/>
		</div>
		
	
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400  text-black">Add</button>
		</div>
	</form>
</section>
    );
};

export default AddServices;