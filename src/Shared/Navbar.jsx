import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { UserIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const naveItems = <>
        <li className='text-xl font-bold hover:text-sky-600'><Link to='/'>Home </Link></li>
        <li className='text-xl font-bold hover:text-sky-600'><Link to='forJobSeekers'>For Job Seekers</Link></li>
        <li className='text-xl font-bold hover:text-sky-600'><Link to='/'>For Employer </Link></li>
        <li className='text-xl font-bold hover:text-sky-600'><Link to='/'>Advantages</Link></li>
        <li className='text-xl font-bold hover:text-sky-600'><Link to='/'>Contact Us</Link></li>
    </>
    return (

        <div className='px-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">

                            {naveItems}
                        </ul>
                    </div>
                    <div className="grid lg:grid-cols-2  items-center ms-10">
                        <Link to="/" className="mt-3 w-16  m-auto">
                            <img src={logo} alt="" />
                        </Link>
                        <h1 className=" font-bold text-xl cursor-pointer mx-auto">
                            <spen className='text-2xl text-orange-500 font-serif'>E</spen>uro <spen className='text-2xl text-orange-500 font-serif'>F</spen>ly</h1>
                        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {naveItems}
                    </ul>
                </div>
                <div className="navbar-end mr-4">
                    <button className='btn  btn-circle' >
                        <UserIcon className="h-8 w-8 text-white" />
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Navbar;