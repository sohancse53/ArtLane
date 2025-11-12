import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='space-y-2'>
            <Navbar/>
                <div className='w-11/12 mx-auto min-h-[88vh]'>

                <Outlet/>
                </div>
           
            <Footer/>
        </div>
    );
};

export default RootLayout;