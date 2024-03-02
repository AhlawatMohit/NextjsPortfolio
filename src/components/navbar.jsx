"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./navlink";


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handletoggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44 text-lg">
        
        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-4 w-1/3">
            {links.map(link=> (
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
                <button className="w-10 h-8 flex flex-col justify-evenly z-50 relative" onClick={handletoggle}>
                    <div className={`w-10 h-1 ${isOpen ? 'bg-white' : 'bg-black'} rounded`}></div>
                    <div className={`w-10 h-1 ${isOpen ? 'bg-white' : 'bg-black'} rounded`}></div>
                    <div className={`w-10 h-1 ${isOpen ? 'bg-white' : 'bg-black'} rounded`}></div>
                    {/* <div className="w-10 h-1 bg-black rounded"></div> */}
                </button>


                {/* MOBILE MENU LIST */}
                {isOpen && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-2xl">
                        {links.map(link => (
                            <Link href={link?.url} key={link?.title}>{link?.title}</Link>
                        ))}

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar