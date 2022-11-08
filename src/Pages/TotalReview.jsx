import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import TotalReviewDetails from './TotalReviewDetails';

const TotalReview = () => {
    const review = useLoaderData([])
    const [reviews , setReview]=useState(review)
    
    const handelDelete = id =>{
        fetch(`http://localhost:5000/review/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = reviews.filter(r=>r._id !== id)
                setReview(remaining)
                toast.success('Delete Successfully', {autoClose:700})
            }

        })
    }
    return (
        <>
        <h2 className='text-3xl text-orange-500 my-8'>Total Reviews : <span className='font-semibold'>{reviews.length === 0 ? 'No reviews were added' : reviews.length}</span></h2>
        <div className=''>
            {
                reviews.map(rev=> <TotalReviewDetails
                key={rev._id}
                rev={rev}
                handelDelete={handelDelete}
                />)
            }
        </div>
        </>
    );
};

export default TotalReview;