import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MyContext } from '../Context/AuthContext';
import TotalReviewDetails from './TotalReviewDetails';

const TotalReview = () => {
    const {user} = useContext(MyContext)
    const [reviews , setReview]=useState([])
    useEffect(()=>{
        fetch(`https://lawyer-server.vercel.app/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[user?.email])
    console.log(reviews);
    
    const handelDelete = id =>{
        fetch(`https://lawyer-server.vercel.app/review/${id}`,{
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