import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink>Explore Artworks</NavLink>
      </li>
      <li>
        <NavLink>Add Artwork</NavLink>
      </li>
      <li>
        <NavLink>My Gallery</NavLink>
      </li>
      <li>
        <NavLink>My Favorites</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="relative flex justify-between items-center  py-2 px-4 shadow">
        <h2 className="text-2xl font-bold">
          Art<span className="text-red-500">Lane</span>
        </h2>
        <ul className=" hidden  lg:flex gap-5 *:hover:text-primary">{links}</ul>
        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            <Link to='/login' className="btn rounded-full btn-primary">Login</Link>
            <Link to='/register' className="btn rounded-full btn-secondary ">
              Register
            </Link>
          </div>
          <div className="block lg:hidden z-50">
            {open ? (
              <IoCloseSharp className="text-2xl" onClick={handleOpen} />
            ) : (
              <RxHamburgerMenu className="text-2xl" onClick={handleOpen} />
            )}
          </div>
        </div>
      </div>

      <ul
        className={`absolute  w-full h-[100vh]  block bg-gray-100  lg:hidden text-center  transition-all duration-500 *:m-10 *:text-2xl *:hover:underline ${
          open ? "left-0" : "-left-1000"
        }`}
      >
        {links}
      </ul>
    </>
  );
};

export default Navbar;
