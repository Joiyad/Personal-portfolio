import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {BsFillCaretRightFill} from 'react-icons/bs';

const Intro = () => {
  let router = useRouter();
  return (
    <div className="flex justify-center pt-24">
      <div>
        <h2 className="text-5xl md:text-8xl text-white text-center" >Hey There!<br/>I'm Joiyad Khan</h2>
        <h4 className="text-5xl font-semibold text-zinc-700 my-8 text-center md:my-4">
          MERN Stack Developer
        </h4>
        <div className="flex flex-row justify-center">
        <button onClick = {() => router.push('/profile')} className="mr-7 md:mr-12 px-4 py-2 my-12 md:my-8  hover:shadow-lg bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 border-2 border-purple-500 text-purple-500 text-1xl md:text-2xl rounded-md font-semibold ">
          About me 
        </button>
        <button onClick = {() => router.push('/profile')} className="px-8 py-2 my-12 md:my-8  hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-zinc-200 text-1xl md:text-2xl rounded-md font-semibold">
          Hire me 
        </button>
        <div className="hidden md:flex my-12 md:my-8 text-purple-600"><BsFillCaretRightFill size={50}/></div>
        </div>
        <div className="flex flex-row gap-12 text-slate-500 white justify-center">
            <a href="/insta" className="hover:text-gray-300"><InstagramIcon fontSize="large"/></a>
            <a href="/https://github.com/Joiyad" className="hover:text-gray-300"><GitHubIcon fontSize="large"/></a>
            <a href="/https://www.linkedin.com/in/joiyad-khan-3ab0bb203/" className="hover:text-gray-300"><LinkedInIcon fontSize="large" /></a>
            <a href="/https://www.facebook.com/joiyad.khan.5/" className="hover:text-gray-300"><FacebookIcon fontSize="large" /></a>
            <a href="/insta" className=" hidden md:block hover:text-gray-300"><TwitterIcon fontSize="large" /></a>
        </div>
        
      </div>
    </div>
  );
};

export default Intro;
