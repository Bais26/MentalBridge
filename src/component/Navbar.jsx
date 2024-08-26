import { motion,AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline, IoFastFood } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const navItems = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Cek Kesehatan",
            url: "/product"
        },
        {
            name: "Artikel",
            url: "/shop",
        },
        {
            name: "Komunitas",
            url: "/contact"
        },

    ];

    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    const handleToggleDropdown = (index) => {
        setShowDropdown(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <section className="bg-white sticky top-0 z-50">
        <div className="text-gray-800 container ">
            <div className="flex flex-wrap md:flex-nowrap justify-between mx-4 p-4 items-center ">
                <a href="/" className="text-primary font-bold text-2xl flex items-center justify-center">Mental <span className="text-second">Bridge</span>
                </a>
                <div className="hidden md:flex items-center gap-12 md:gap-12  ">
                    {navItems.map((items, index) => {
                        return (
                            <div className="my-2" key={index}>
                                <Link className="text-gray-800 hover:underline hover:text-primary" key={index} to={items.url}>{items.name}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className="md:hidden z-20 ">
                    <button onClick={handleToggleSidebar}>
                        <GiHamburgerMenu className="text-2xl mt-2" />
                    </button>
                    <AnimatePresence mode="wait">
                    {toggle && (
                        <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{opacity:1, y: 0}}
                        exit={{opacity:0, y:-100}}
                        transition={{duration:0.3}}
                        className="absolute w-full top-12 right-0 p-4 bg-primary rounded-2xl mt-4 text-xl text-center font-medium ">
                            <div className="p-2">
                                {navItems.map((items, index) => {
                                    return (
                                        <div className="my-6" key={index}>
                                            <span className="" onClick={() => handleToggleDropdown(index)}>
                                                <Link className="text-white hover:text-gray-800" key={index} to={items.url}>{items.name}</Link>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
        </section>
    );
}