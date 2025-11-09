import React, { use, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import Authcontext from "../context/Authcontext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user,logOut } = use(Authcontext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleLogout = ()=>{
    console.log('cle');
    logOut()
    .then(()=>{
      toast.success("Log Out Successful");
    })
  }
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore-artworks">Explore Artworks</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-artwork">Add Artwork</NavLink>
          </li>
          <li>
            <NavLink to="/my-gallery">My Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/my-favorites">My Favorites</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="relative  flex justify-between items-center  py-2 px-4 shadow">
        <Link to={'/'}  className="text-2xl font-extrabold relative">
          ArT<span className="text-red-400 font-semibold absolute    top-1 left-9">Lane</span>
        </Link >
        <ul className=" hidden  lg:flex gap-5  *:hover:text-primary">{links}</ul>
        <div className="flex items-center gap-5">
          {
          user 
          ? 
          (
            <div className="dropdown dropdown-hover dropdown-end">
              <img src={user?.photoURL} tabIndex={0} role="button" className="m-1 rounded-full w-12 h-12 border-2 border-primary object-cover"/>
              <div
                tabIndex={0}
                className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
              >
                <div className="card-body">
                  <p className="font-semibold text-center">{user.displayName}</p>
                  <button onClick={handleLogout} className="btn btn-primary rounded-full">LogOut</button>
                </div>
              </div>
            </div>
          ) 
          : 
          (
            <div className="flex gap-5">
              <Link to="/login" className="btn rounded-full btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn rounded-full btn-secondary ">
                Register
              </Link>
            </div>
          )
          }
          <div className="block lg:hidden z-50 cursor-pointer ">
            {open ? (
              <IoCloseSharp className="text-2xl hover:opacity-75" onClick={handleOpen} />
            ) : (
              <RxHamburgerMenu className="text-2xl hover:opacity-75" onClick={handleOpen} />
            )}
          </div>
        </div>
      </div>

      <ul onClick={()=>setOpen(!open)}
        className={`absolute  z-100 w-full h-[90vh]  block bg-gray-100  lg:hidden text-center  transition-all duration-500 *:m-10 *:text-2xl *:hover:underline ${
          open ? "left-0" : "-left-1000"
        }`}
      >
        {links}
      </ul>
    </>
  );
};

export default Navbar;
