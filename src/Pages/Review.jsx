import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Review = ({service}) => {
    console.log(service);
    const [reviews, setReviews] = useState({})


    useEffect(()=>{
        fetch(`http://localhost:5000/review?serviceId=${service._id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[service._id])
    return (
        <>
            <h3 className="text-3xl">Your have  reviews: {reviews.length}</h3>
        <div className='grid grid-cols-3 gap-2'>
        {
            reviews.map(review=><ReviewDetails
            key={review._id}
            review={review}
            />)
        }
        </div>
        </>
    );
};

export default Review;