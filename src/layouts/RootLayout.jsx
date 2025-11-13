import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='space-y-2 overflow-x-hidden'>
            <Navbar/>
                <div className='container mx-auto min-h-[88vh] px-5 sm:px-0 my-24'>

                <Outlet/>
                </div>
           
            <Footer/>
        </div>
    );
};

export default RootLayout;