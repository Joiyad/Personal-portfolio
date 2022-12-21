import Image from "next/image";
import Navbar from "../components/sidebar";
import Footer from "../components/footer";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRouter } from "next/router";
import { Cardtemp } from "../components/profileContent";
import { Skills } from "../components/skills";

const profile = () => {
  let router = useRouter();
  return (
    <div>
      <Navbar />
      {/* About me */}
      <div className="flex justify-center flex-col-reverse md:flex-row gap-10 px-8 md:pl-28 py-32">
        <div className="w-auto md:w-[600px] gap-5 text-center md:text-left">
          <p className="text-6xl text-purple-600">Joiyad Khan</p>
          <p className="text-4xl text-white font-bold my-2">Student at NIT Hamirpur</p>
          <p className="text-xl mt-4 text-gray-300">I am pre-final year student at National Institute of Technology, Hamirpur. My passion is to become a software developer that can solve different industrial and real-life problems. I am interested in web development and blockchain development. I have many skills to contribute including React.js, Node.js, MongoDB, writing smart contracts and knowledge of ethereum. Want to know more about my technical skills, scroll down<ArrowDownwardIcon /></p>
            <button onClick={() => {router.push("https://drive.google.com/drive/u/0/folders/1WTCjteZKU1-ap1At6HI2P7kYT6Ch2k-N");}}className="px-4 py-3 my-6 hover:shadow-lg bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 text-zinc-200 border border-purple-700 rounded-md font-semibold">Download CV</button>
        </div>
        <div className="rounded-md border-white border-2 h-[323px]">
          <Image className="rounded-md" src="/joy-khan-2.jpeg" alt="profile" width="320" height="320"/></div>
        </div>

      {/* My work */}
      <h2 className="text-white text-4xl text-center py-20 font-semibold">Recent Contributions</h2>
      <div className="flex justify-center my-8"><Cardtemp /></div>

      {/* My Skills */}
      <h2 className="text-white text-4xl text-center py-20 font-semibold">Skills</h2>
      <div className="flex justify-center my-8"><Skills /></div>
    <Footer />
    </div>
  );
};

export default profile;
