import { FormGroup, FormLabel, InputBase } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const followContent = () => {
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const handleMessage = (e:any) =>{
    let input = e.target.value;
    setMessage(input);
  }

  const handleEmail = (e:any) =>{
    let input = e.target.value;
    setEmail(input);
  }
  const sendEmail=async(e:any)=>{
    e.preventDefault();
     const results=await fetch("/api/email",{
      method:"post",
       body:JSON.stringify({email:email,message:message})
    });
    if(results.status == 200){
      console.log("successfull");
    }
    else{
      console.log("Error");
    }
  }
  return (
    <>
      <div className="m-auto">
        <h2 className="text-white text-4xl text-center py-20 font-semibold">
          Contact me
        </h2>
        <form onSubmit={sendEmail} method="post">
          <div className="w-[200px] md:w-[800px] flex gap-20  flex-wrap justify-center items-center bg-slate-800 border-white border-2 border-opacity-40 py-16 px-32 m-auto rounded-[20px] text-white font-semibold">
            <input
              className="p-2 rounded-md bg-transparent border-white border-b-2 border-opacity-10"
              type="email"
              placeholder="email"
              onChange={handleEmail}
              value={email}
            />

            <input
              className="p-2 rounded-md bg-transparent border-white border-b-2 border-opacity-10"
              type="textarea"
              placeholder="message"
              onChange={handleMessage}
              value={message}
            />
            <button
              className="py-2 px-6 bg-blue-600 hover:bg-blue-900 hover:shadow-md rounded-md font-semibold"
              type="submit"
            >
              Send it
            </button>
          </div>
        </form>
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
