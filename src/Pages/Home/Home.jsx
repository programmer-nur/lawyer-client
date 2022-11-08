import React from 'react';
import About from '../About';
import AllServices from '../AllServices';
import Baner from './Baner';

const Home = () => {
    return (
        <>
        <div>
            <Baner/>
            <AllServices/>
            <About/>
        </div>
        </>
    );
};

export default Home;