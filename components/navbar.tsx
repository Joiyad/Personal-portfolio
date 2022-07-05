import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="md:hidden p-8 cursor-pointer" id="menu-button" onClick={() => { menu.classList.toggle('hidden'); }}>
        <MenuIcon />
      </div>
      <div className="hidden md:block z-20 fixed w-full h-full md:w-16 md:hover:w-44 md:h-screen bg-slate-900 md:hover:bg-slate-900 bg-opacity-60 md:bg-transparent hover:transition-all overflow-hidden hover:border-r-2 border-white border-opacity-10"
      id="menu">
        <nav>
          <div className="flex flex-col text-white">
            <a
              href="/profile"
              className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"
            >
              <AccountCircleIcon className="mr-7" fontSize="large" />
              <p>Profile</p>
            </a>
            {/* <a
              href="/experience"
              className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"
            >
              <WorkOutlineIcon
                className="mr-7"
                fontSize="large"
              />
              <p>Experience</p>
            </a> */}
            <a
              href="/projects"
              className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"
            >
              <LightbulbOutlinedIcon className="mr-7" fontSize="large" />
              <p>Projects</p>
            </a>
            <a
              href="/connect"
              className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"
            >
              <ConnectWithoutContactOutlinedIcon className="mr-7" fontSize="large" />
              <p>Connect</p>
            </a>
            <a
              href="/"
              className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"
            >
              <HomeOutlinedIcon className="mr-7" fontSize="large" />
              <p>Back</p>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
