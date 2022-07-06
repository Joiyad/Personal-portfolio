import Image from "next/image";
import Navbar from "../components/navbar";
import DoneIcon from "@mui/icons-material/Done";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRouter } from "next/router";
import { Cardtemp } from "../data/profile-data";
import { Skills } from "../data/skills-data";

const profile = () => {
  let router = useRouter();
  return (
    <div>
      <Navbar />
      {/* About me */}
      <div className="flex justify-center flex-col-reverse md:flex-row gap-20 px-8 md:pl-16 py-32">
        <div className="w-auto md:w-[600px] gap-5 text-center md:text-left">
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
          <button
            onClick={() => {
              router.push(
                "https://drive.google.com/drive/u/0/folders/1WTCjteZKU1-ap1At6HI2P7kYT6Ch2k-N"
              );
            }}
            className="px-4 py-2 my-2 hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-500  hover:from-purple-500 hover:to-blue-500 text-zinc-200 rounded-md font-semibold"
          >
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
        <Cardtemp />
      </div>
      {/* <div className="m-auto py-48">
        <h1 className="text-4xl text-center text-purple-500">Skills</h1>
        <Skills />
      </div> */}
    </div>
  );
};

export default profile;
