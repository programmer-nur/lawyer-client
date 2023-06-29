import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "./AddReview";
import Review from "./Review";
import useTitle from "./useTitle";
import reviewImg from '../assets/carcover.png'
const ServiceDetails = () => {
  const { img, name, des, price, _id } = useLoaderData({});
  useTitle("service-details");
  return (
    <section className="">
      <div className="p-5 px-6 md:px-16 mx-auto sm:p-10 md:p-16 bg-white text-black">
        <div className="flex  flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src={img} alt="" className="w-full h-60 sm:h-96 rounded-lg" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
            <div className="space-y-2">
              <p className="inline-block text-black text-2xl font-semibold sm:text-3xl">
                {name}
              </p>
              <p className=" text-gray-700">{des}</p>
              <p className="text-[#b1976b]"> Price : $ {price}</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <section style={{background:`url(${reviewImg})`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',}} className="py-6 md:py-16">
        <div className=" px-6 md:px-16">
          <Review service={{ img, name, _id }} />
        </div>
        <div className=" px-6 md:px-16">
          <AddReview service={{ img, name, _id }} />
        </div>
      </section>
    </section>
  );
};

export default ServiceDetails;
