import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MyContext } from '../Context/AuthContext';

const Header = () => {
    const {user,logOut} = useContext(MyContext)
    const handelLogOut = ()=>{
        logOut()
        .then((res)=>{
            toast.success('Sign Out Successfully', {autoClose:700})
            const user =res.user
            console.log(user);
        })

    }
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
            <Link rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                <p className='border border-orange-400 px-4 font-bold p-3 text-red-500'>Lawyer</p>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                    <Link to='/home' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                </li>
                <li className="flex">
                    <Link to='/services' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
                </li>
                <li className="flex">
                    <Link to='/addservices' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Add Service</Link>
                </li>
                <li className="flex">
                    <Link to='/review' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Review</Link>
                </li>
                <li className="flex">
                    <Link to='/blog' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                </li>
                <li className="flex">
                    <Link to='/about' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</Link>
                </li>
            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">

                {
                    user?.uid? 
                    <Link>
                     <button onClick={handelLogOut} className="self-center px-8 py-3 font-semibold rounded text-gray-100">Sign Out</button>
                    </Link>
                    :
                <Link to='/login'>

                <button className="self-center px-8 py-3 rounded">Sign in</button>
                </Link>
                }
                <Link to='/register'>
                <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Sign up</button>
                </Link>

               
    
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
);
};

export default Header;