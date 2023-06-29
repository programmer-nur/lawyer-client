import React from "react";
import useTitle from "./useTitle";
import icon from '../assets/insurance-icon.png'
const ReviewDetails = ({ review }) => {
  console.log(review)
  useTitle("service-details");
  console.log(review._id);
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-200 text-gray-700">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={icon}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{review.UserName}</h4>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{review.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
