import Image from "next/image";
import Navbar from "./navbar";

const skills = () => {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="m-auto">
        <h2 className="text-white text-4xl text-center my-16 font-semibold">
          Work Experience
        </h2>
        <div className="mt-36">
          <div className="flex justify-center gap-x-8">
            <div className="flex gap-10 flex-col">
              <p className="text-6xl text-pink-500">TEAM OJAS <br/>Technical Team</p>
              <p className="text-4xl">NIMBUS, NIT HAMIRPUR</p>
            </div>
            <Image src="/ojas.png" alt="ojas" width="180" height="180" />
          </div>
          <div className="flex mt-28 mb-60 ml-40 gap-x-32 justify-center py-8 border-y-2 border-opacity-10 border-white rounded-md">
            <div>
              <p className="text-pink-600 text-3xl my-6">Position</p>
              <p className="text-xl text-white">Coordinator</p>
            </div>
            <div>
              <p className="text-pink-600 text-3xl my-6">Contributions</p>
              <ul className="text-xl text-white">
                  <li>Made a website for Team OJAS</li>
                  <li>Was part of Team organized Electro Hunt</li>
                  <li>Made posters for various events</li>
              </ul>
            </div>
            <div>
              <p className="text-pink-600 text-3xl my-6">Joined</p>
              <p className="text-xl text-white">Feb 2021 - Present</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-10 flex-col">
              <p className="text-5xl text-pink-500">
                Society of <br /> Electrical Engineering
              </p>
              <p className="text-4xl">NIT HAMIRPUR</p>
            </div>
            <Image src="/elsocw (2).png" alt="ojas" width="200" height="180" />
          </div>
          <div className="flex mt-32 mb-12 ml-40 gap-x-32 border-y-2 rounded-md py-8 border-opacity-10 border-white">
            <div>
              <p className="text-pink-600 text-3xl my-6">Position</p>
              <p className="text-xl text-white">Coordinator</p>
            </div>
            <div>
              <p className="text-pink-600 text-3xl my-6">Contributions</p>
              <ul className="text-xl text-white">
                  <li>Was part of team organized Blockchain <br/> workshop</li>
                  <li>Made posters for various events</li>
              </ul>
            </div>
            <div>
              <p className="text-pink-600 text-3xl my-6">Joined</p>
              <p className="text-xl text-white">Sep 2021 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
