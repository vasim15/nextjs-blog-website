import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" height={35} width={40} alt="logo" />
          <span className="font-bold ml-2 text-primary">demo blog app</span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#"> pricing</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#"> doc</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#"> company</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#"> pring</a>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Login
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="px-4 py-2 bg-primary rounded-sm text-white  hover:bg-primary-dark transition-all"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;