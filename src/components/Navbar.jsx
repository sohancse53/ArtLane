import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const handleOpen = ()=>{
        
        setOpen(!open);
        console.log(open);
        
    }
    const links = <>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink>Explore Artworks</NavLink></li>
                        <li><NavLink>Add Artwork</NavLink></li>
                        <li><NavLink>My Gallery</NavLink></li>
                        <li><NavLink>My Favorites</NavLink></li>
                  </>
    return (
        <>
        <div className='relative flex justify-between items-center  py-2 px-4 shadow'>
            <h2 className='text-2xl font-bold'>Art<span className='text-red-500'>Lane</span></h2>
            <ul className=' hidden  md:flex gap-5'>
                {links}
            </ul>
            <div className='block md:hidden z-50'>
                {
                    open?<IoCloseSharp className='text-2xl' onClick={handleOpen}/>:<RxHamburgerMenu className='text-2xl' onClick={handleOpen}/>
                }
            </div>
           <div className='flex gap-5'>
            <button className='btn btn-info text-white'>Login</button>
            <button className='btn btn-info text-white'>Register</button>
           </div>
        </div>
         
            <ul className={`absolute  w-full h-[100vh]  block bg-gray-100  lg:hidden text-center  transition-all duration-500 *:p-2 *:text-xl ${open?'left-0':'-left-1000'}`}>
                {links}
            </ul>
         
        </>

    );
};

export default Navbar;