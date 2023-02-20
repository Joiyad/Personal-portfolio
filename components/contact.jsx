import emailjs from "emailjs-com";
import Image from "next/image";
import {followIconData} from '../data/followIconData'

const followContent = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail_joy", "template_joy", e.target, "oaiDMlLuueB5VjPQK")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="m-auto">
        <h2 className="text-white text-4xl text-center py-20 font-semibold">
          Contact me
        </h2>
          <div className="relative flex items-top justify-center min-h-screen sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 border border-opacity-10 rounded-md">
                  <div className="p-6 mr-2 bg-white rounded-md">
                    <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
                      Get in touch
                    </h1>
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 my-2">
                      Write a message to start conversation
                    </p>
                    <Image src='https://res.cloudinary.com/dvjbswt50/image/upload/v1676910250/Personal%20Portfolio/connect2_daeaie.gif' alt='connect' width='400' height='200' />
                  </div>

                  <form onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                      <label for="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label for="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <textarea
                        type="textarea"
                        name="textarea"
                        id="message"
                        placeholder="Write message here ..."
                        className="w-100 h-40 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="md:w-32 border border-purple-700 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <h2 className="text-white text-4xl text-center mb-20 font-semibold">
          Follow me
        </h2>
        <div className="flex flex-wrap gap-x-5 md:gap-x-10 justify-center mb-10">
        {followIconData.map(({id, link, icon}) => (
          <div key={id} className="border-2 hover:border-blue-600 rounded-3xl w-fit h-fit p-4 bg-slate-900">
            <a
              href={link}
              className="text-white"
            >
              {icon}
            </a>
          </div>))}
        </div>
      </div>
    </>
  );
};
export default followContent;
