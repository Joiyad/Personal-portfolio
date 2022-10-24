import React from "react";
import Navbar from "../components/sidebar";
import Footer from "../components/footer";

const experience = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="text-white py-8 md:pr-6">
          <h2 className="text-white text-4xl md:text-5xl text-center my-4">
            Work Experience
          </h2>
          <div className="container mx-auto flex flex-col items-start justify-center md:flex-row my-12 md:my-24">
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full mx-[50%] bg-purple-700 w-2"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-400">
                        5 Sep, 2022 - 5 Dec, 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        TechElectron
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        I'm a React UI Developer intern at TechElectron where
                        I'm working on their dashboard using React and Redux.
                        This dashboard allows users to show the data in the form
                        of graphs. Also, the user data is shown in the form of
                        table and provide various customization to it.
                      </p>
                      <a href="https://github.com/TechElectron-git/msm-portal/tree/dev" className="text-purple-700">
                        More
                      </a>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-purple-400">
                        1 Oct 2022 - 31 Oct 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Hacktoberfest 2022
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Contributed in Hacktoberfest 2022 by creating 4 PRs. I contributed in repository named 'DS Algorithms' where my PRs were Pattern Searching Algorithms, Sliding Window Algorithm, Josephus Circle Algorithm and Inplace Heap Sort Algorithm.
                      </p>
                      <a href="https://hacktoberfest.com/profile/" className="text-purple-700">
                        More
                      </a>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-400">
                        {" "}
                        1 Aug 2022 - 1 Oct 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Social Summer of Code
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Contributed in two projects named Portfolioshop and Awesome Chrome Extensions. My PRs includes updating image uploading component, fixing bugs in console and typing speed calculator extension.
                      </p>
                      <a href="https://devfolio.co/projects/ssoc-contributions-9176" className="text-purple-700">
                        More
                      </a>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-purple-400">
                        1 Mar 2022 - 1 Apr 2022
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        OJAS Website
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        I am Coordinator at team OJAS, NIT Hamirpur, During NIMBUS 2022, I have made a website for my team OJAS, departmental team of Electrical Engineering. 
                      </p>
                      <a href="https://ojas.festnimbus.com/" className="text-purple-700">
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default experience;
