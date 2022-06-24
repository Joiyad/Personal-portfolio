import React from "react";

const projectContent = () => {
  return (
    <div>
      <h2 className="text-white text-center text-4xl my-12">
        Here are some of my Projects
      </h2>
      <div className="w-full flex justify-evenly flex-wrap gap-y-12 my-40 p-12">
        <div className="border-2 w-[500px] bg-[url('/bg-project.jpg')] bg-no-repeat bg-cover border-white border-opacity-20 p-8 rounded-[15px]">
          <h2 className="text-center text-teal-600 text-2xl mb-2">
            Website for Team OJAS
          </h2>
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident qui ea tenetur numquam assumenda saepe, amet expedita
            adipisci commodi quia dolore officiis dolor debitis, deleniti illo
            voluptas, unde sequi eum!deleniti illo voluptas, unde sequi eum!
          </p>
          <a href="https://github.com/teamOjasNith/teamOJAS" className="text-teal-600 hover:text-teal-400 ">
            more
          </a>
        </div>
        <div className="border-2 w-[500px] bg-[url('/bg-project.jpg')] bg-no-repeat bg-cover shadow-md border-white border-opacity-20 p-8 rounded-[15px]">
          <h2 className="text-center text-teal-600 text-2xl mb-2">
            Google-clone
          </h2>
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident qui ea tenetur numquam assumenda saepe, amet expedita
            adipisci commodi quia dolore officiis dolor debitis, deleniti illo
            voluptas, unde sequi eum!deleniti illo voluptas, unde sequi eum!
          </p>
          <a href="https://github.com/Joiyad/Google-clone" className="text-teal-600 hover:text-teal-400 ">
            more
          </a>
        </div>
        <div className="border-2 w-[500px] bg-[url('/bg-project.jpg')] bg-no-repeat bg-cover shadow-md border-white border-opacity-20 p-8 rounded-[15px]">
          <h2 className="text-center text-teal-600 text-2xl mb-2">
            Fullstack Ethereum Application
          </h2>
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident qui ea tenetur numquam assumenda saepe, amet expedita
            adipisci commodi quia dolore officiis dolor debitis, deleniti illo
            voluptas, unde sequi eum!deleniti illo voluptas, unde sequi eum!
          </p>
          <a href="https://github.com/Joiyad/Full-stack-Ethereum-app" className="text-teal-600 hover:text-teal-400 ">
            more
          </a>
        </div>
        <div className="border-2 w-[500px] bg-[url('/bg-project.jpg')] bg-no-repeat bg-cover shadow-md border-white border-opacity-20 p-8 rounded-[15px]">
          <h2 className="text-center text-teal-600 text-2xl mb-2">
            NFT Quiz Application
          </h2>
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident qui ea tenetur numquam assumenda saepe, amet expedita
            adipisci commodi quia dolore officiis dolor debitis, deleniti illo
            voluptas, unde sequi eum!deleniti illo voluptas, unde sequi eum!
          </p>
          <a href="https://github.com/Joiyad/NFT-quiz-app" className="text-teal-600 hover:text-teal-400 ">
            more
          </a>
        </div>
      </div>
    </div>
  );
};

export default projectContent;
