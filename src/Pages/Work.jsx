import React from "react";
import bgWork from '../assets/wordbg.jpg'
const Work = () => {
  return (
    <section style={{background:`url(${bgWork})`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',}}  className="py-6 md:py-16">
     <div className="mx-6 md:mx-16 md:border border-gray-400 md:p-16">
     <div>
     <span className="text-gray-400 text-lg  text-center">WHAT WE ARE EXPERT AT</span>
      <h3 className="lg:text-5xl text-2xl my-2 md:text-3xl mt-2 text-center text-white font-semibold">
      Why Clients Choose Us?
{" "}
      </h3>
     </div>
      <span className="text-[#b1976b] text-xl font-thin">|</span>
     <div className="md:flex space-y-5 md:space-y-0 justify-center items-center mt-5 gap-10">
        <div className="text-lg text-gray-100"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookm arksgrove right at the coast of the Semantics, a large language ocean. A small river named</p></div>
        <div className="text-lg text-gray-100"><p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p></div>
     </div>
     <div class="mt-8 sm:mt-12">
      <dl
        class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-[#b1976b]"
      >
        <div class="flex flex-col px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-[#b1976b]">
          Client Consultations
          </dt>

          <dd class="text-4xl font-bold text-white md:text-5xl">
            100+
          </dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-[#b1976b]">
          Successful Cases
          </dt>

          <dd class="text-4xl font-bold text-white md:text-5xl">92%</dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center">
          <dt class="order-last text-lg font-medium text-[#b1976b]">
          Professional Attorneys
          </dt>

          <dd class="text-4xl font-bold text-white md:text-5xl">30+</dd>
        </div>
      </dl>
    </div>
     </div>
    </section>
  );
};

export default Work;
