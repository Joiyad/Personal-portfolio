import Image from "next/image";
import {fullStackProjects} from "../../data/projects/fullstackProjects"

export const FullStackProjects = () => (
    <div className="flex flex-wrap justify-center gap-12 md:gap-x-36 md:gap-y-44 p-4 md:px-32">
        {fullStackProjects.map(({id, title, content, image, link}) => (
        <a href={link} className="overflow-hidden w-[320px] h-[400px] border-4 hover:border-opacity-100 border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-gray-800">
          <Image src={image} alt="google" width="350" height="350"/>
          <h2 className="text-center text-teal-400 text-2xl">{title}</h2>
          <h4 className="text-center text-teal-600">{content}</h4>
        </a>
        ))}
    </div>
)