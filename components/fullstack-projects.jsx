import Image from "next/image";

const fullStackProjects = [
    {id:1, title:"Website for Team OJAS", image:"/bg-ojas.jpeg", link:"https://github.com/teamOjasNith/teamOJAS"},
    {id:2, title:"Google-clone", image:"/bg-google.avif", link:"https://github.com/Joiyad/Google-clone"},
];

export const FullStackProjects = () => (
    <div className="flex flex-wrap justify-center gap-12 md:gap-x-36 md:gap-y-56 p-4 md:px-32">
        {fullStackProjects.map(({id, title, image, link}) => (
        <a
          href={link}
          className="overflow-hidden w-[320px] h-[400px] border-4 hover:border-opacity-100 border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-gray-800"
        >
          <Image
            className="rounded-md"
            src={image}
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl">
            {title}
          </h2>
        </a>
        ))}
    </div>
)