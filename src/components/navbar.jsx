"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./navlink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    // FRAMER MOTION
    const topVarients = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "#FFFFFF",
        }
    };

    const centerVarients = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    };

    const bottomVarients = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "#FFFFFF",
        }
    };

    const listVarinets = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        }
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }

    // NAVBAR BUTTON
    const handletoggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44 text-lg">

            {/* NAVIGATION LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <Navlink link={link} key={link.title} />
                ))}
            </div>

            {/* LOGO */}
            <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
                <Link href='/' className="text-sm bg-black rounded-md p-[0.30rem] font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">FrontEnd</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">MERN</span>
                </Link>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="hidden md:flex justify-center gap-4 w-1/3">
                <Link href="https://github.com/AhlawatMohit">
                    <Image src="/github.png" alt="GitHub Icon" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/mohit432/">
                    <Image src="/linkedin.png" alt="LinkedIn Icon" width={24} height={24} />
                </Link>
            </div>


            {/* RESPONSIVE MENU / HAMBURGER ICONS */}
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={handletoggle}>
                    <motion.div
                        variants={topVarients}
                        animate={isOpen ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div
                        variants={centerVarients}
                        animate={isOpen ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div
                        variants={bottomVarients}
                        animate={isOpen ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>


                {/* MOBILE MENU LIST */}
                {isOpen && (
                    <motion.div
                        variants={listVarinets}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-2xl z-40">
                        {links.map((link) => (
                            <motion.div variants={listItemVariants} className="" key={link?.title}>
                            <Link href={link?.url}>{link?.title}</Link>
                            </motion.div>
                        ))}

                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar