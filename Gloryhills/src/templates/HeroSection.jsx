import React, { useState } from "react";

import { Navigation } from "../components/library";

import HeroImg from "/src/images/main-bg.svg";


export default function HeroSection() {


  return (
    <main
      style={{ backgroundImage: `url(${HeroImg})` }}
      className="flex flex-col items-center gap-y-6 pb-[76px] bg-cover w-full xl:h-screen text-xl leading-6 text-white"
    >
      <Navigation />
      <header className="self-stretch px-8 md:pl-24 lg:pr-80 pt-12 xl:pt-36 text-2xl sm:text-3xl md:text-[48px] lg:text-[58px] xl:text-[60x] font-bold md:leading-[58px] md:tracking-widest">
        <p>{"Welcome to "}</p>
        <p>Glory Hills Community Church</p>
      </header>
      <div className="flex text-sm md:text-lg items-center self-stretch px-8 md:pl-24 md:pr-20 font-normal">
        <p>
          We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for your company
        </p>
      </div>
      <div className="flex self-stretch px-8 md:pl-24 ">
        <button className="flex items-center justify-center rounded-lg bg-sky-500 px-5 md:px-10 pb-[15px] py-3 md:py-5 text-center text-base font-bold shadow-md">
          Listen Live
        </button>
      </div>
    </main>
  );
}