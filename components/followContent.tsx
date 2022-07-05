import { FormGroup, FormLabel, InputBase } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const followContent = () => {
  return (
    <>
      <div className="m-auto">
      <h2 className="text-white text-4xl text-center py-20 font-semibold">
          Contact me
        </h2>
          <form>
            <div className="w-[200px] md:w-[800px] flex gap-20  flex-wrap justify-center items-center bg-slate-800 border-white border-2 border-opacity-40 py-16 px-32 m-auto rounded-[20px] text-white font-semibold">
              <input
                className="p-2 rounded-md bg-transparent border-white border-b-2 border-opacity-10"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Name"
              />

              <input
                className="p-2 rounded-md bg-transparent border-white border-b-2 border-opacity-10"
                id="email"
                name="email"
                type="email"
                placeholder="email"
              />

              <input
                className="p-2 rounded-md bg-transparent border-white border-b-2 border-opacity-10"
                id="join"
                name="join"
                type="textarea"
                placeholder="query"
              />
              <button
                className="py-2 px-6 bg-blue-600 hover:bg-blue-900 hover:shadow-md rounded-md font-semibold"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {/* <div className="flex justify-center md:gap-x-24 my-32 ">
          <div className="p-4 text-1xl md:text-2xl text-violet-300">
            <FiPhoneCall size={50} />
            <p>+91 8302009071</p>
            <p>+91 8740973621</p>
          </div>
          <div className="p-4 text-1xl md:text-2xl text-violet-300">
            <FiMail size={50} />
            <p>joiyadkhan75@gmail.com</p>
            <p>joiyadkhan123@gmail.com</p>
          </div>
        </div> */}
        <h2 className="text-white text-4xl text-center mt-40 mb-20 font-semibold">
          Follow me
        </h2>
        <div className="flex flex-wrap md:gap-x-10 justify-center mb-10">
          <div className="p-4">
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit p-4">
              <a
                href="/https://www.linkedin.com/in/joiyad-khan-3ab0bb203/"
                className="text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit p-4">
              <a href="/insta" className="text-white">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit p-4">
              <a href="/https://github.com/Joiyad" className="text-white">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit p-4">
              <a
                href="/https://www.facebook.com/joiyad.khan.5/"
                className="text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div className="w-fit p-4">
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit p-4">
              <a href="/insta" className="text-white">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default followContent;
