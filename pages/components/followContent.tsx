import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const followContent = () => {
  return (
    <>
      <h2 className="text-white text-4xl text-center my-8">Follow me</h2>
      <div className="mt-16 mb-28 flex flex-wrap justify-evenly">
        <div className="p-4">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a
              href="/https://www.linkedin.com/in/joiyad-khan-3ab0bb203/"
              className="hover:text-gray-300 text-white"
            >
              <BsLinkedin size={80} />
            </a>
          </div>
          <div className="text-2xl text-white flex justify-center">
            Linkedin
          </div>
        </div>
        <div className="p-4">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a href="/insta" className="hover:text-gray-300 text-white">
              <BsInstagram size={80} />
            </a>
          </div>
          <div className="text-2xl text-white flex justify-center">
            Instagram
          </div>
        </div>
        <div className="p-4">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a
              href="/https://github.com/Joiyad"
              className="hover:text-gray-300 text-white"
            >
              <BsGithub size={80} />
            </a>
          </div>
          <div className="text-2xl text-white flex justify-center">Github</div>
        </div>
        <div className="p-4">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a
              href="/https://www.facebook.com/joiyad.khan.5/"
              className="hover:text-gray-300 text-white"
            >
              <BsFacebook size={80} />
            </a>
          </div>
          <div className="text-2xl text-white flex justify-center">
            Facebook
          </div>
        </div>
        <div className="w-fit p-4">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a href="/insta" className="hover:text-gray-300 text-white">
              <BsTwitter size={80} />
            </a>
          </div>
          <div className="text-2xl text-white flex justify-center">Twitter</div>
        </div>
      </div>
      {/* <h2 className="text-white text-4xl text-center my-8">Contact me</h2>
      <div className="flex justify-center gap-x-24 my-24 ">
        <div className="p-4">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a href="" className="hover:text-gray-300 text-white">
              <FiPhoneCall size={80} />
            </a>
          </div>
          <div className="text-2xl text-white"><p className="">+91 8302009071</p></div>
        </div>
        <div className="p-4 ">
          <div className="border-2 rounded-3xl w-fit p-4">
            <a href="" className="hover:text-gray-300 text-white">
              <FiMail size={80} />
            </a>
          </div>
          <div className="text-2xl text-white"><p>joiyadkhan75@gmail.com</p></div>
        </div>
      </div> */}
    </>
  );
};

export default followContent;