import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                  </>
    return (
        <div className='flex justify-between bg-amber-200'>
            <h2>ArtLane</h2>
            <ul className='flex gap-5'>
                {links}
            </ul>
        </div>
    );
};

export default Navbar;