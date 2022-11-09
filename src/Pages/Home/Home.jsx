import React from 'react';
import About from '../About';
import AllServices from '../AllServices';
import Faq from '../Faq';
import Baner from './Baner';

const Home = () => {
    return (
        <>
        <div className='bg-slate-700'>
            <Baner/>
            <AllServices/>
            <Faq/>
            <About/>
        </div>
        </>
    );
};

export default Home;