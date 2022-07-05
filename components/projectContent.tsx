import Image from "next/image";
import React from "react";

const projectContent = () => {
  return (
    <div>
      <h2 className="text-white text-center text-4xl p-16 font-semibold mb-8">
        Here are some of my Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-12 md:gap-x-36 md:gap-y-56 p-4 md:px-32">
        <a
          href="https://github.com/Joiyad/Full-stack-Ethereum-app"
          className="p-2 w-[320px] h-[400px] border-4 hover:border-opacity-100 border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-black"
        >
          <Image
            className="rounded-md"
            src="/bg-solidity.avif"
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl">
            Fullstack Ethereum Application
          </h2>
        </a>
        <a
          href="https://github.com/Joiyad/NFT-quiz-app"
          className="p-2 w-[320px] h-[400px] border-4 hover:border-opacity-100  border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-black"
        >
          <Image
            className="rounded-md"
            src="/bg-nft.avif"
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl mt-4">
            NFT Quiz Application
          </h2>
        </a>
        {/* <a
          href="https://github.com/emharsha1812/Land-Registry-Hackathon"
          className="p-2 w-[320px] h-[400px] border-4 hover:border-opacity-100  border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-black"
        >
          <Image
            className="rounded-md"
            src="/bg-nft.avif"
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl mt-4">
            Land Registry Dapp
          </h2>
        </a> */}
        <a
          href="https://github.com/teamOjasNith/teamOJAS"
          className=" p-2 w-[320px] h-[400px] border-4 hover:border-opacity-100 border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-black"
        >
          <Image
            className="rounded-md"
            src="/bg-ojas.png"
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl my-4">
            Website for Team OJAS
          </h2>
        </a>
        <a
          href="https://github.com/Joiyad/Google-clone"
          className="p-2 w-[320px] h-[400px] border-4 hover:border-opacity-100  border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95 shadow-md shadow-black"
        >
          <Image
            className="rounded-md"
            src="/bg-google.avif"
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl my-4">
            Google-clone
          </h2>
        </a>
        {/* <a
          href="https://github.com/Joiyad/Google-clone"
          className="p-2 w-[320px] h-[400px] border-4 hover:border-opacity-100  border-white border-opacity-20 rounded-[15px] transition delay-150 ease-in-out hover:scale-95"
        >
          <Image
            className="rounded-md"
            src="/bg-google.avif"
            alt="google"
            width="350"
            height="350"
          />
          <h2 className="text-center text-teal-600 text-2xl my-4">
            Personal Portfolio
          </h2>
        </a> */}
      </div>
    </div>
  );
};

export default projectContent;
