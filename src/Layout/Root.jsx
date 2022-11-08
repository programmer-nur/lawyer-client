import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shaerd/Footer';
import Header from '../Shaerd/Header';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;