import React from 'react';
import About from '../About';
import AllServices from '../AllServices';
import Faq from '../Faq';
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
            <Faq/>
            <About/>
            </div>
           
        </section>
        </>
    );
};

export default Home;