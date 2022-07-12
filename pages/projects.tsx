import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FullStackProjects } from "../components/fullstack-projects";
import { BlockProjects } from "../components/blockchain-projects";
import { useState } from "react";

const projects = () => {
  const[isBlockchain, setIsBlockchain] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center py-20">
        <div className="flex border-2 border-opacity-10 rounded-md font-semibold text-gray-300 cursor-pointer">
          <div className="bg-slate-900 p-2 hover:bg-pink-400" onClick={() => {setIsBlockchain(false)}}>Full Stack Development</div>
          <div className="bg-transparent p-2 hover:bg-pink-400" onClick={() => {setIsBlockchain(true)}}>Blockchain Development</div>
        </div>
      </div>
      {
        isBlockchain?
        <BlockProjects/>
        :
        <FullStackProjects />
      }
      <Footer />
    </div>
  );
};

export default projects;
