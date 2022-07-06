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
  <div className="flex flex-col md:flex-row gap-8 md:gap-20 md:ml-40 mb-32 justify-center">
    {data.map(({ id, title, content1, content2, content3, link }) => (
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-purple-500">{title}</h2>
          <p>
            <DoneIcon className="mr-2" /> {content1}
          </p>
          <p>
            <TipsAndUpdatesIcon className="mr-4" />
            {content2}
          </p>
          <p>
            <GroupIcon className="mr-4" />
            {content3}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                router.push(`${link}`);
              }}
              className="btn w-full mt-4"
            >
              Visit
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)
};
