import React from 'react';
import AllServices from '../AllServices';
import useTitle from '../useTitle';
import Baner from './Baner';
import Work from '../Work';
import Contact from '../Contact';
import Testimonial from '../Testimonial';

const Home = () => {
    useTitle('home')
    return (
        <>
        <section className='bg-white'>
            <Baner/>
            <div>
            <AllServices/>
            <Work/>
            <Contact />
            <Testimonial />
            </div>
           
        </section>
        </>
    );
};

export default Home;