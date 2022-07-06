import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Projects} from "../data/projects-data";

const projects = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-white text-center text-4xl p-16 font-semibold mb-8">
        Here are some of my Projects
      </h2>
      <Projects />
      <Footer/>
    </div>
  );
};

export default projects;
