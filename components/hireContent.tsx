import Image from "next/image";

const aboutContent = () => {
  return (
    <div>
      <a href="https://drive.google.com/drive/u/0/folders/1WTCjteZKU1-ap1At6HI2P7kYT6Ch2k-N" className="w-full h-screen flex justify-center items-center cursor-default">
        <div className="w-400px] h-[200px] border-white border-opacity-20 border-8 p-10 md:p-52 rounded-lg">
          <button className="py-2 px-4 hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-zinc-200 text-1xl md:text-2xl rounded-md font-semibold">
            Resume
          </button>
        </div>
      </a>
    </div>
  );
};

export default aboutContent;
