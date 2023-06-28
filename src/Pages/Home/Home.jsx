import React from 'react';
import About from '../About';
import AllServices from '../AllServices';
import Faq from '../Faq';
import useTitle from '../useTitle';
import Baner from './Baner';

const Home = () => {
    useTitle('home')
    return (
        <>
        <div className='bg-white'>
            <Baner/>
            <AllServices/>
            <Faq/>
            <About/>
        </div>
        </>
    );
};

export default Home;