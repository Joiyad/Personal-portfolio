import DoneIcon from "@mui/icons-material/Done";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRouter } from "next/router";

const data = [
  {
    id: 1,
    title: "Content Writer at Quora",
    content1: "140+ answers",
    content2: "690k+ views",
    content3: "owner of 2 spaces",
    link: "https://www.quora.com/profile/Joiyad-Khan-1"
  },
  {
    id: 2,
    title: "Contributor at Github",
    content1: "140+ contributions",
    content2: "6+ projects",
    content3: "worked in team",
    link: "https://github.com/Joiyad"
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    content1: "frontend + backend",
    content2: "made various projects",
    content3: "made websites for my team",
    link: "/projects"
  },
];

export const Cardtemp = () => {
    let router = useRouter();
    return(
  <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:ml-20 mb-32 justify-center">
    {data.map(({ id, title, content1, content2, content3, link }) => (
      <div className="w-80 bg-base-100 shadow-xl border border-white border-opacity-10 text-gray-300 rounded-[10px] p-6 bg-slate-800">
        <div>
          <h2 className="text-2xl text-center font-semibold my-2 text-purple-500">{title}</h2>
          <p><DoneIcon className="mr-2 my-2" /> {content1}</p>
          <p><TipsAndUpdatesIcon className="mr-4 my-2" />{content2}</p>
          <p><GroupIcon className="mr-4 my-2" />{content3}</p>
          <div className="justify-end">
            <button onClick={() => {router.push(`${link}`);}} className="w-full mt-4 rounded-lg py-2 bg-purple-600 hover:bg-purple-900 border-white border-opacity-10 hover:border-white hover:border-opacity-10">Know more</button>
          </div>
        </div>
      </div>
    ))}
  </div>
)
};
