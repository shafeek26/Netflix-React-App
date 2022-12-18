/** @format */

import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between h-24  p-5 absolute z-[100]">
            <Link to="/">
                <h1 className="text-red-600 text-4xl font-bold uppercase">Netflix</h1>
            </Link>
            <div className="space-x-3 hidden md:block">
                <Link to='/signup'>
                    <button className="text-white border border-white py-1 px-4">
                        Sign Up
                    </button>
                </Link>
                <Link to='/login'>
                    <button className="text-white bg-red-600 py-1 px-6">Login</button>
                </Link>
            </div>
            <FaBars className="text-white text-3xl block md:hidden"/>
        </div>
    );
};

export default Navbar;
