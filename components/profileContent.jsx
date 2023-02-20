import DoneIcon from "@mui/icons-material/Done";
import GroupIcon from "@mui/icons-material/Group";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useRouter } from "next/router";
import {profileData} from "../data/profileData"

export const Cardtemp = () => {
    let router = useRouter();
    return(
  <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:ml-20 mb-32 justify-center">
    {profileData.map(({ id, title, content1, content2, content3, link }) => (
      <div key={id} className="w-80 bg-base-100 shadow-xl border border-white border-opacity-10 text-gray-300 rounded-[10px] p-6 bg-slate-800">
        <div>
          <h2 className="text-2xl text-center font-semibold my-2 text-purple-500">{title}</h2>
          <p><DoneIcon className="mr-2 my-2" /> {content1}</p>
          <p><TipsAndUpdatesIcon className="mr-4 my-2" />{content2}</p>
          <p><GroupIcon className="mr-4 my-2" />{content3}</p>
          <div className="justify-end">
            <button onClick={() => {router.push(`${link}`);}} className="w-full mt-4 rounded-lg py-2 bg-purple-600 hover:bg-purple-900 border-white border-opacity-10 hover:border-white hover:border-opacity-10 font-sans tracking-wide font-semibold">Visit now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
)
};
