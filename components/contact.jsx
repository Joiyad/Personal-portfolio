import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from '@mui/icons-material/Send';
import emailjs from "emailjs-com"
import { TextField } from "@mui/material";

const followContent = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail_joy', 'template_joy', e.target, 'oaiDMlLuueB5VjPQK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <>
      <div className="m-auto">
        <h2 className="text-white text-4xl text-center py-20 font-semibold">
          Contact me
        </h2>
        <form onSubmit={sendEmail}>
          <div className="w-[250px] md:w-[800px] flex gap-8 md:gap-20  flex-wrap justify-center items-center bg-slate-800 border-white border-2 border-opacity-40 py-16 px-4 md:px-32 m-auto rounded-[5px] md:rounded-[20px] text-white font-semibold">
            <input className="p-2 rounded-md bg-transparent border-white border-2 border-opacity-10" type="text" placeholder="name" name="name"/>
            <input className="p-2 rounded-md bg-transparent border-white border-2 border-opacity-10" type="email" placeholder="email" name="email"/>
            <textarea className="p-2 w-64 rounded-md bg-transparent border-white border-2 border-opacity-10" type="textarea" placeholder="message" cols={30} rows={4} name="message"/>
            <button className="py-2 px-6 bg-blue-600 hover:bg-blue-900 hover:shadow-md rounded-md font-semibold" type="submit">Send <SendIcon className="hidden md:inline-block" fontSize="small"/></button>
          </div>
        </form>
        <h2 className="text-white text-4xl text-center mt-40 mb-20 font-semibold">
          Follow me
        </h2>
        <div className="flex flex-wrap md:gap-x-10 justify-center mb-10">
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit h-fit p-4 bg-slate-900"><a href="/https://www.linkedin.com/in/joiyad-khan-3ab0bb203/" className="text-white"><LinkedInIcon /></a></div>
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit h-fit p-4 bg-slate-900"><a href="/insta" className="text-white"><InstagramIcon /></a></div>
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit h-fit p-4 bg-slate-900"><a href="/https://github.com/Joiyad" className="text-white"><GitHubIcon /></a></div>
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit h-fit p-4 bg-slate-900"><a href="/https://www.facebook.com/joiyad.khan.5/" className="text-white"><FacebookIcon /></a></div>
            <div className="border-2 hover:border-blue-600 rounded-3xl w-fit h-fit p-4 bg-slate-900"><a href="/insta" className="text-white"><TwitterIcon /></a></div>
        </div>
      </div>
    </>
  );
};
export default followContent;
