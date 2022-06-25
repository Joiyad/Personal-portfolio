import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsFillCaretRightFill} from 'react-icons/bs';

const Intro = () => {
  let router = useRouter();
  return (
    <div className="px-10 md:pl-40 md:pr-0 py-16 flex flex-row ">
      <div>
        <h2 className="text-4xl md:text-8xl text-white text-center md:text-left">Hey! I am <br /> Joiyad Khan</h2>
        <h4 className="text-5xl font-semibold text-zinc-700 my-8 text-center md:text-left md:my-4">
          MERN Stack Developer
        </h4>
        <div className="flex flex-row">
        <button onClick = {() => router.push('/follow')} className="mx-auto md:ml-0 md:mr-12 px-4 py-2 my-12 md:my-4  hover:shadow-lg bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 border-2 border-purple-500 text-purple-500 text-1xl md:text-2xl rounded-md font-semibold ">
          About me 
        </button>
        <button onClick = {() => router.push('/resume')} className="mx-auto md:mx-0 px-8 py-2 my-12 md:my-4  hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-zinc-200 text-1xl md:text-2xl rounded-md font-semibold">
          Hire me 
        </button>
        <div className="hidden md:block my-12 md:my-4 text-purple-600"><BsFillCaretRightFill size={50}/></div>
        </div>
        <div className="mt-12 md:mt-4 mb-16 md:mb-12 flex flex-row gap-12 text-white">
            <a href="/insta" className="hover:text-gray-300"><BsInstagram size={40} /></a>
            <a href="/https://github.com/Joiyad" className="hover:text-gray-300"><BsGithub size={40} /></a>
            <a href="/https://www.linkedin.com/in/joiyad-khan-3ab0bb203/" className="hover:text-gray-300"><BsLinkedin size={40} /></a>
            <a href="/https://www.facebook.com/joiyad.khan.5/" className="hover:text-gray-300"><BsFacebook size={40} /></a>
            <a href="/insta" className=" hidden md:block hover:text-gray-300"><BsTwitter size={40} /></a>
        </div>
        
      </div>
      <div className="hidden md:block">
        <Image src="/profile-demo-removebg.png" alt="profile" width="600" height="450"/>
      </div>
    </div>
  );
};

export default Intro;
