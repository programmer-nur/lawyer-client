import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../Context/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(MyContext);
  const handelLogOut = () => {
    logOut().then((res) => {
      toast.success("Sign Out Successfully", { autoClose: 700 });
      const user = res?.user;
      console.log(user);
    });
  };
  return (

    <header className="bg-white border-b border">
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
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to='/services'
                    className="text-gray-500 transition hover:text-gray-500/75"
                    
                  >
                    Services
                  </Link>
                </li>

                {
                    user?.uid && 
              <>
                    <li>
                  <Link to='/addservices'
                    className="text-gray-500 transition hover:text-gray-500/75"
                    
                  >
                    Add Service
                  </Link>
                </li>
             
                <li>
                  <Link to='/review'
                    className="text-gray-500 transition hover:text-gray-500/75"
                   
                  >
                    Review
                  </Link>
                </li></>
                }

                <li>
                  <Link to='/blog'
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to='/about'
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    About Me
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user?.uid ? (
                  <a
                    onClick={handelLogOut}
                    className="rounded-md bg-[#b1976b] px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    Logout
                  </a>
                ) : (
                  <Link to='/login'
                    className="rounded-md bg-[#b1976b] px-5 py-2.5 text-sm font-medium text-white shadow"
                   
                  >
                    Login
                  </Link>
                )}

                <div className="hidden sm:flex">
                  <Link to='/register'
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#b1976b]"
                    href="/"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
