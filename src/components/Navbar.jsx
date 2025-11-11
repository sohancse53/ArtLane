import React, { use, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import Authcontext from "../context/Authcontext";
import toast from "react-hot-toast";
import DarkmodeToggler from "./DarkmodeToggler";

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
        <li>
            <NavLink to="/add-artwork">Add Artwork</NavLink>
          </li>
          
      {user && (
        <>
        
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
        
      <div className="flex justify-between items-center gap-15">
          <Link to={'/'}  className="text-2xl font-extrabold relative">
          ArT<span className="text-red-400 font-semibold absolute    top-1 left-9">Lane</span>
        </Link >
        <DarkmodeToggler/>
      </div>
        <ul className=" hidden  lg:flex gap-5  *:hover:text-primary">{links}</ul>
        <div className="flex items-center gap-5">
          {
          user 
          ? 
          (
            <div className="dropdown dropdown-hover dropdown-end">
              
             <div className="flex items-center gap-2">
                
               <img referrerPolicy="no-referrer" src={user?.photoURL} tabIndex={0} role="button" className="m-1 rounded-full w-12 h-12 border-2 border-primary object-cover"/>
             </div>
              
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
            <div className="hidden sm:flex gap-5 items-center">
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
              <IoCloseSharp className="text-3xl hover:opacity-75" onClick={handleOpen} />
            ) : (
              <RxHamburgerMenu className="text-3xl hover:opacity-75" onClick={handleOpen} />
            )}
          </div>
        </div>
       
      </div>

      <ul onClick={()=>setOpen(!open)}
        className={`absolute  z-100 w-full h-[60%]  block bg-base-100  lg:hidden text-center  transition-all duration-500 *:m-10 *:text-2xl *:hover:underline ${
          open ? "left-0" : "-left-1000"
        }`}
      >
        {links}
        {
          !user &&
          <>
          <li>
           <Link to="/login" className="btn rounded-full btn-primary">
                Login
              </Link>
        </li>
        <li>
            <Link to="/register" className="btn rounded-full btn-secondary ">
                Register
              </Link>
        </li>
          </>
        }
      </ul>
    </>
  );
};

export default Navbar;
