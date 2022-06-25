import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6 px-8 md:px-40">
        <div className="flex items-center flex-shrink-0 text-white ">
          <Image src="/logo.png" alt="logo" width="40" height="40"/>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto justify-end">
          <div className="lg:flex-grow mt-4 text-teal-200 text-xl md:flex md:justify-end gap-10 font-semibold">
          <Link
              href="/"
            >
              <a href="" className="block lg:inline-block hover:text-white">Home</a>
            </Link>
            <Link
              href="projects"
            >
              <a href="" className="block lg:inline-block hover:text-white">Projects </a>
            </Link>
            <Link
              href="follow"
            >
              <a href="" className="block lg:inline-block hover:text-white">Follow </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
