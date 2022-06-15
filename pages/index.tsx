import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Footer from "./components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joiyad Khan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Navbar />
        <Intro />
        <Footer/>
    </>
  );
};

export default Home;
