import Image from "next/image";
import React from "react";

const projectContent = () => {
  return (
    <div>
      <h2 className="text-white text-center text-4xl my-12">
        Here are some of my Projects
      </h2>
      <div className="w-full flex justify-evenly flex-wrap gap-y-12 mb-40 p-12">
        <a href="https://github.com/teamOjasNith/teamOJAS" className="border-2 w-[250px] h-[360px] bg-[url('/bg-card.png')] bg-no-repeat bg-cover border-white border-opacity-20 p-8 rounded-[15px] transition delay-150 ease-in-out hover:scale-95">
          <Image className="rounded-md" src="/bg-ojas.png" alt="google" width="200" height="230"/>
          <h2 className="text-center text-teal-600 text-2xl my-4">
            Website for Team OJAS
          </h2>
        </a>
        <a href="https://github.com/Joiyad/Google-clone" className="border-2 w-[250px] h-[360px] bg-[url('/bg-card.png')] bg-no-repeat bg-cover shadow-md border-white border-opacity-20 p-8 rounded-[15px] transition delay-150 ease-in-out hover:scale-95">
          <Image className="rounded-md" src="/bg-google.png" alt="google" width="200" height="230"/>
          <h2 className="text-center text-teal-600 text-2xl my-8">
            Google-clone
          </h2>
        </a>
        <a href="https://github.com/Joiyad/Full-stack-Ethereum-app" className="border-2 w-[250px] h-[360px] bg-[url('/bg-card.png')] bg-no-repeat bg-cover shadow-md border-white border-opacity-20 p-8 rounded-[15px] transition delay-150 ease-in-out hover:scale-95">
          <Image className="rounded-md" src="/bg-full.png" alt="google" width="200" height="230"/>
          <h2 className="text-center text-teal-600 text-2xl">
            Fullstack Ethereum Application
          </h2>
        </a>
        <a href="https://github.com/Joiyad/NFT-quiz-app" className="border-2 w-[250px] bg-[url('/bg-card.png')] bg-no-repeat bg-cover shadow-md border-white border-opacity-20 p-8 rounded-[15px] transition delay-150 ease-in-out hover:scale-95">
          <Image className="rounded-md" src="/bg-nft.png" alt="google" width="200" height="230"/>
          <h2 className="text-center text-teal-600 text-2xl mt-4">
            NFT Quiz Application
          </h2>
        </a>
      </div>
    </div>
  );
};

export default projectContent;
