import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/sidebar";
import Intro from "../components/home";
import Footer from "../components/footer";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joiyad Khan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is a personal portfolio website of Joiyad Khan."></meta>
      </Head>
        <Navbar />
        <Intro />
        <Footer/>
    </>
  );
};

export default Home;
