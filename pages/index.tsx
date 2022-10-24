import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/sidebar";
import Intro from "../components/home";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joiyad Khan</title>
        <meta
          name="description"
          content="Joiyad Khan, Student at National Institute of Technology(NIT), Hamirpur, Churu, Rajasthan"
        />
        <meta property="og:title" content="Joiyad Khan" />
        <meta
          property="og:description"
          content="Joiyad Khan, Student at National Institute of Technology(NIT), Hamirpur, Churu, Rajasthan"
        />
        <meta property="og:url" content="https://joiyadkhan.netlify.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Intro />
      <Footer />
    </>
  );
};

export default Home;
