import Image from "next/image";
import Navbar from "../components/navbar";
import DoneIcon from "@mui/icons-material/Done";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRouter } from "next/router";

const profile = () => {
  let router = useRouter();
  return (
    <div>
      <Navbar />
      {/* About me */}
      <div className="flex justify-center flex-col-reverse md:flex-row gap-20 px-8 md:pl-16 py-32">
        <div className="w-auto md:w-[600px] gap-5 text-center md:text-left">
          {/* <h2 className="text-3xl text-teal-500 font-semibold mb-4">About me</h2>
          <p className="text-xl text-gray-400">
            My name is Joiyad Khan. I am currently pursuing B.Tech in Electrical
            Engineering at National Institute of Technology, Hamirpur. 3rd year
            student(2020-2024) cgpa: 8.86 (No backlog) Also, I am a coding
            enthusiast, MERN stack developer and Blockchain developer. Want to
            know more about my technical skills.
          </p> */}
          <p className="text-5xl text-purple-800">Joiyad Khan</p>
          <p className="text-4xl text-purple-700 mt-2">
            Student at NIT Hamirpur
          </p>
          <p className="text-2xl ">
            I am 3rd year student at National Institute of Technology, Hamirpur.
            Also, I am a coding enthusiast, MERN stack developer and Blockchain
            developer. Want to know more about my technical skills.
            <ArrowDownwardIcon />
          </p>
          <button onClick={() => {router.push('https://drive.google.com/drive/u/0/folders/1WTCjteZKU1-ap1At6HI2P7kYT6Ch2k-N')}} className="px-4 py-2 my-2 hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-500  hover:from-purple-500 hover:to-blue-500 text-zinc-200 rounded-md font-semibold">
              Download CV
          </button>
        </div>
        <Image
          src="/profile.png"
          alt="profile"
          width="320"
          height="320"
          className="bg-gradient-to-tr from-transparent to-gray-900 rounded-lg shadow-lg shadow-black"
        />
      </div>
      
      {/* My work */}
      <div className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 md:ml-44 mb-32 justify-center">
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-rose-500">
              Content Writer at Quora
            </h2>
            <p>
              <DoneIcon className="mr-2" /> Answered 140+ questions
            </p>
            <p>
              <VisibilityIcon className="mr-4" />
              690k+ views
            </p>
            <p>
              <GroupIcon className="mr-4" />
              owner of 2 spaces
            </p>
            <div className="card-actions justify-end">
              <button onClick={() => {router.push('https://www.quora.com/profile/Joiyad-Khan-1')}} className="btn bg-rose-500 hover:bg-rose-900 w-full mt-4">
                Visit
              </button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-slate-300">Contributor at Github</h2>
            <p>
              <DoneIcon className="mr-2" />
              140+ contributions
            </p>
            <p>
              <TipsAndUpdatesIcon className="mr-4" />
              6+ projects
            </p>
            <p>
              <GroupIcon className="mr-4" />
              worked in teams
            </p>
            <div className="card-actions justify-end">
              <button onClick={() => {router.push('https://github.com/Joiyad')}} className="btn bg-slate-500 hover:bg-slate-900 w-full mt-4">
                Visit
              </button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-teal-500">MERN Stack Developer</h2>
            <p>
              <DoneIcon className="mr-2" />
              frontend development
            </p>
            <p>
              <DoneIcon className="mr-2" />
              backend development
            </p>
            <p>
              <TipsAndUpdatesIcon className="mr-4" />
              worked on various projects
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  router.push("/projects");
                }}
                className="btn bg-teal-700 hover:bg-teal-900 w-full mt-4"
              >
                Visit
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* <div className="m-auto py-48">
        <h1 className="text-4xl text-center text-purple-500">Skills</h1>
        <div className="flex flex-wrap justify-center my-20 gap-x-32 gap-y-16 px-52">
          <div>
            <p className="text-1xl">Frontend Development</p>
            <div className="w-[200px] md:w-[600px] relative pt-1">
              <div className="overflow-hidden h-1 flex rounded bg-gray-300">
                <div className="w-[90%] bg-cyan-800"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-1xl">Frontend Development</p>
            <div className="w-[200px] md:w-[600px] relative pt-1">
              <div className="overflow-hidden h-1 flex rounded bg-gray-300">
                <div className="w-[90%] bg-cyan-800"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-1xl">Frontend Development</p>
            <div className="w-[200px] md:w-[600px] relative pt-1">
              <div className="overflow-hidden h-1 flex rounded bg-gray-300">
                <div className="w-[90%] bg-cyan-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default profile;
