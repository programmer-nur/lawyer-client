import React from 'react';
import contact from '../assets/statue-con.jpg';
const Contact = () => {
    return (
        <section class="bg-stone-100 py-24 lg:px-[14rem] body-font relative">

  <div class="container block lg:hidden px-8 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            
            <input type="text" placeholder='Name' id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
           
            <input type="email" placeholder='Email' id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
          
            <textarea id="message" placeholder='Message' name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="w-full text-white bg-[#ab7d2e] border-0 py-2 px-8 focus:outline-none hover:bg-[#ab7d2e] rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>


        <div style={{background:`url(${contact})`,backgroundPosition:'right', backgroundSize:'cover'}} class="container hidden lg:block md:px-4 py-12 rounded-lg mx-auto border">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="lg:text-4xl text-2xl md:text-3xl mt-2 text-center text-black font-semibold">Free Consultation</h1>
      <p class="lg:w-2/3 mx-auto text-gray-400 leading-relaxed text-lg pt-5">Law is complicate matter. It can cause you a big problem
if you ignore it. Let us help you!</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <input type="text" id="name" placeholder='Name' name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
           
            <input type="email" id="email" placeholder='Email' name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            
            <textarea id="message" placeholder='Message' name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="w-full text-white bg-[#ab8e5b] border-0 py-2 px-8 focus:outline-none hover:bg-[#ab7d2e] rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Contact;