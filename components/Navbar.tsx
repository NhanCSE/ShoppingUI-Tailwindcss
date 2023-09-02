import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    return (
        <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
            <div className="max-w-screem-2xl h-full mx-auto px-4 flex items-center justify-between">
                <h1 className="text-2xl uppercase font-bold">Shoppers</h1>
                <ul className="hidden lg:inline-flex items-center gap-6 uppercase text-sm font-semibold">
                    <li className="navbarLi">Home</li>
                    <li className="navbarLi">Page</li>
                    <li className="navbarLi">Service</li>
                    <li className="navbarLi">Portfolio</li>
                    <li className="navbarLi">Blog</li>
                    <li className="navbarLi">Shop</li>
                </ul>        
                <div className="hidden lg:inline-flex gap-8 items-center">
                    <BsSearch className="navbarLi"/>
                    <div className="relative">
                        <ImCart className="text-xl" />
                        <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
                        0
                        </span>
                    </div>
                    <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-red-500 hover:text-white duration-300">
                        Get In Touch
                    </button>
                </div>
                <div className="inline-flex lg:hidden">
                    <FiMenu className="text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
