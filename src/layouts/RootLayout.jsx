import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className=''>
            <Navbar/>
                <div className='w-11/12 mx-auto'>

                <Outlet/>
                </div>
           

        </div>
    );
};

export default RootLayout;