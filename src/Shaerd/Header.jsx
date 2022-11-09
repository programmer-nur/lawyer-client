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
        <div className="container flex justify-between  mx-auto">
            <Link rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                <p className='border border-orange-400 px-4 font-bold p-3 text-red-500'>Lawyer</p>
            </Link>
            <ul className="flex  flex-wrap  items-center space-x-4 sm:space-x-8">
                <li className="flex">
                    <Link to='/' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                </li>
                <li className="flex">
                    <Link to='/services' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
                </li>
                <li className="flex mt-2 lg:mt-0">
                    <Link to='/addservices' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Add Service</Link>
                </li>
                <li className="flex mt-2 lg:mt-0">
                    <Link to='/review' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Review</Link>
                </li>
                <li className="flex mt-2 lg:mt-0">
                    <Link to='/blog' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                </li>
                <li className="flex mt-2 lg:mt-0">
                    <Link to='/about' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</Link>
                </li>
            <div className="items-center flex-shrink-0  lg:flex">

                {
                    user?.uid? 
                    <Link>
                     <button onClick={handelLogOut} className="self-center mt-2 lg:mt-0 px-8 py-3 font-semibold rounded text-gray-100">Sign Out</button>
                    </Link>
                    :
                <Link to='/login'>

                <button className="self-center mt-2 lg:mt-0 px-8 py-3 rounded">Sign in</button>
                </Link>
                }
                <Link to='/register'>
                <button className="self-center mt-2 lg:mt-0 px-8 py-3 font-semibold rounded bg-none md:bg-violet-400 text-white md:mt-3  md:text-gray-900">Sign up</button>
                </Link>
            </div>
           
            </ul>
        </div>
    </header>
);
};

export default Header;