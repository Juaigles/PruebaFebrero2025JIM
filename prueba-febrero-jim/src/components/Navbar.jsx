import Link from 'next/link'
import React from 'react'
import { Globe, Bell, UserCircle } from "lucide-react";

const Navbar = () => {
    return (
        <nav className='font-roboto font-bold bg-black flex justify-between items-center  px-5 py-4 w-full h-[78px]'>
            <div>
                <img src={null} alt="logo" />
            </div>
            <div className='flex gap-10 text-[24px]'>
                <Link href="">HOME</Link>
                <Link href="">PROJECTS</Link>
                <Link href="">REGULATIONS GUIDES</Link>
                <Link href="">CREDITS REGISTRY</Link>

            </div>
            <div className='flex gap-[20px] items-center text-white'>
                <Globe size={35}  />

                <Bell size={35}  />

                <UserCircle size={60} />
            </div>
        </nav>
    )
}

export default Navbar