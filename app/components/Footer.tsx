import Link from 'next/link'
import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { PiDogFill } from 'react-icons/pi'

const Footer = () => {
  return (
    <footer>
        <div className="logo">
            <Link href={'/'}>
                <PiDogFill />
            </Link>
        </div>

        <p>
            <span>&copy;</span>2023 By <a href="/">ibn</a>
        </p>

        <div className="socialIcons">
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><FaGithubAlt /></span>
        </div>
    </footer>
  )
}

export default Footer