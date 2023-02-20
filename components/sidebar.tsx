import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {navData} from '../data/navData'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(true);

  return (
    <>
      <div className="absolute top-8 md:top-6 right-12"><Image src="/favicon.ico" alt="logo" width="30" height="30" /></div>
      <div className="md:hidden p-8 cursor-pointer text-white" id="menu-button" onClick={() => {setIsopen(!isOpen)}}  >
        <MenuIcon />
      </div>

      {/* full navbar */}
      <div className="hidden md:block z-20 fixed w-16 hover:w-44 h-screen bg-transparent hover:bg-slate-900 bg-opacity-60 hover:transition-all overflow-hidden hover:border-r-4 border-white border-opacity-10" id="menuN" >
        {navData.map(({id, link, icon, title}) => (
        <nav key={id}>
          <div className="flex flex-col text-gray-200">
            <Link key={id} href={link} ><a className="p-4 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row items-center">{icon}<p>{title}</p></a></Link>
          </div>
        </nav>
        ))}
      </div>

      {/* menu mobile */}
      <div className={isOpen ? "hidden" : "md:block z-20 fixed w-full h-full bg-slate-900 bg-opacity-90 hover:transition-all overflow-hidden hover:border-r-2 border-white border-opacity-10"} id="menuN" >
      {navData.map(({id, link, icon, title}) => (
        <nav key={id}>
          <div className="flex flex-col text-gray-200">
            <Link key={id} href={link} ><a className="p-4 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row items-center">{icon}<p>{title}</p></a></Link>
          </div>
        </nav>
        ))}
      </div>
    </>
  );
};

export default Navbar;
