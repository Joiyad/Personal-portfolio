import Image from "next/image";

const blockProjects = [
    {id:1, title:"Custom Keyboard Generator", content:"A full stack ethereum application", image:"/bg-keyboard.png", link:"https://github.com/Joiyad/Full-stack-Ethereum-app"},
    {id:2, title:"NFT Quiz Dapp", content:"An application rewarding NFTs", image:"/bg-nft.png", link:"https://github.com/Joiyad/NFT-quiz-app"},
    {id:3, title:"Land Registry Dapp", content:"A decentralized land registery platform", image:"/bg-land.png", link:"https://github.com/emharsha1812/Land-Registry-Hackathon"},
];

export const BlockProjects = () => (
    <div className="flex flex-wrap justify-center gap-12 md:gap-x-36 md:gap-y-56 p-4 md:px-32">
        {blockProjects.map(({id, title, image, link, content}) => (
        <a href={link} className="overflow-hidden w-[320px] h-[400px] border-4 hover:border-opacity-100 border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-gray-800">
          <Image src={image} alt="google" width="350" height="350"/>
          <h2 className="text-center text-teal-400 text-2xl">{title}</h2>
          <h4 className="text-center text-teal-600">{content}</h4>
        </a>
        ))}
    </div>
)