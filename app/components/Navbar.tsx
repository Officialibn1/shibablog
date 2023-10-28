'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { PiDogFill } from "react-icons/pi";
import { FaXTwitter, FaBurger, FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
    const [navState, setNavState] = useState(false)


  return (
    <nav>
        <ul className="navLink">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>Creator</Link></li>
        </ul>

        <div className="toggleBtn" onClick={() => setNavState(prev => !prev)}>
            <FaBars />
        </div>

        <div className={`${navState ? 'left-0' : '-left-[200vw]'} mobileNav`}>
            <ul>
                <li>
                    <div className="toggleBtn w-fit" onClick={() => setNavState(prev => !prev)}>
                        <FaX />
                    </div>
                </li>
                <li><Link href={'/'} onClick={() => setNavState(prev => !prev)}>Home</Link></li>
                <li><Link href={'/'} onClick={() => setNavState(prev => !prev)}>Creator</Link></li>
                <li>
                    <div className="subscribe">
                        <button onClick={() => setNavState(prev => !prev)}>
                            Subscribe
                        </button>
                    </div>
                </li>
            </ul>
            {/* <button className="mobileNavClose" onClick={() => setNavState(prev => !prev)}></button> */}
        </div>

        <div className="logo">
            <Link href={'/'}>
                <PiDogFill />
            </Link>
        </div>

        <div className="subscribe">
            <a href="twitter.com" target='_blank' >
                <FaXTwitter />
            </a>

            <button className='hidden md:block'>
                Subscribe
            </button>
        </div>

    </nav>
  )
}

export default Navbar