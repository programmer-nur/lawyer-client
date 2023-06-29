import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../Context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(MyContext);
  const handelLogOut = () => {
    logOut().then((res) => {
      toast.success("Sign Out Successfully", { autoClose: 700 });
      const user = res?.user;
      console.log(user);
    });
  };
  return (

    <header className="bg-white border-b relative  border">
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-[#b1976b] font-bold" href="/">
              <span className="text-xl">Lawyer</span>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link to='/'
                    className="text-gray-500 text-sm lg:text-base  transition hover:text-gray-600/75"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to='/services'
                    className="text-gray-500 text-sm lg:text-base  transition hover:text-gray-600/75"
                    
                  >
                    Services
                  </Link>
                </li>

                {
                    user?.uid && 
              <>
                    <li>
                  <Link to='/addservices'
                    className="text-gray-500 text-sm lg:text-base  transition hover:text-gray-600/75"
                    
                  >
                    Add Service
                  </Link>
                </li>
             
                <li>
                  <Link to='/review'
                    className="text-gray-500 text-sm lg:text-base  transition hover:text-gray-600/75"
                   
                  >
                    Review
                  </Link>
                </li></>
                }

                <li>
                  <Link to='/blog'
                    className="text-gray-500 text-sm lg:text-base  transition hover:text-gray-600/75"
                    href="/"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to='/about'
                    className="text-gray-500 text-sm lg:text-base  transition hover:text-gray-600/75"
                    href="/"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user?.uid ? (
                  <a
                    onClick={handelLogOut}
                    className="rounded-md bg-[#b1976b] px-5 py-2.5 text-sm  text-white shadow"
                    href="/"
                  >
                    Logout
                  </a>
                ) : (
                  <Link to='/login'
                    className="rounded-md bg-[#b1976b] px-5 py-2.5 text-sm  text-white shadow"
                   
                  >
                    Login
                  </Link>
                )}

                <div className="hidden sm:flex">
                  <Link to='/register'
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm  text-[#b1976b]"
                    href="/"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`content md:hidden bg-gray-100 z-20 fixed w-full h-[20rem] py-8 top-16 duration-500 ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex items-center flex-col gap-6 text-sm">
                <li>
                  <Link to='/'
                    className="text-gray-500 text-sm font-semibold lg:text-base  transition hover:text-gray-600/75"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to='/services'
                    className="text-gray-500 text-sm font-semibold lg:text-base  transition hover:text-gray-600/75"
                    
                  >
                    Services
                  </Link>
                </li>

                {
                    user?.uid && 
              <>
                    <li>
                  <Link to='/addservices'
                    className="text-gray-500 text-sm font-semibold lg:text-base  transition hover:text-gray-600/75"
                    
                  >
                    Add Service
                  </Link>
                </li>
             
                <li>
                  <Link to='/review'
                    className="text-gray-500 text-sm font-semibold lg:text-base  transition hover:text-gray-600/75"
                   
                  >
                    Review
                  </Link>
                </li></>
                }

                <li>
                  <Link to='/blog'
                    className="text-gray-500 text-sm font-semibold lg:text-base  transition hover:text-gray-600/75"
                    href="/"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to='/about'
                    className="text-gray-500 text-sm font-semibold lg:text-base  transition hover:text-gray-600/75"
                    href="/"
                  >
                    About
                  </Link>
                </li>
              </ul>
      </div>
    </header>
  );
};

export default Header;
