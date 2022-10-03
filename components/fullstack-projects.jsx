import Image from "next/image";

const fullStackProjects = [
    {id:1, title:"Team OJAS website", content:"A technical team website", image:"/bg-ojas.png", link:"https://github.com/teamOjasNith/teamOJAS"},
    {id:2, title:"Memorizz web app", content:"A social media app", image:"/bg-memorizz.png", link:"https://github.com/Joiyad/Memorizz"},
    {id:3, title:"Google-clone", content:"A clone of google search engine", image:"/bg-google.png", link:"https://github.com/Joiyad/Google-clone"},
    {id:4, title:"To-do application", content:"An application for scheduling work", image:"/bg-todo.png", link:"https://github.com/Joiyad/Todos-list"},
];

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