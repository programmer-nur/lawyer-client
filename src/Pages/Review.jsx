import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';
import useTitle from './useTitle';

const Review = ({service}) => {
    console.log(service._id);
    const [reviews, setReviews] = useState([])
    useTitle('review')

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?serviceId=${service?._id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data)})
    },[service?._id])
    return (
        <>
            <h3 className="text-3xl">There are: {reviews.length} reviews</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
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


