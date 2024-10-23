import React from "react";
import Ttline from "../images/Ttline";

export default function () {
  return (
    <main
    className='font-roboto_flex flex w-full flex-col gap-y-9 pb-11 text-center mx-auto px-20 pt-16 tracking-wider'
  >
    <header
      className='relative z-0 flex flex-col items-center gap-y-1.5 pb-3 text-center'
    >
      <Ttline className="absolute inset-y-0 z-0" />
      <div className="z-[1] self-stretch text-base md:text-[32px] font-semibold leading-[normal] tracking-[0px]" >
        Upcoming Events
      </div>
      <div className="z-[2] flex items-center justify-center pl-px">
        <div className="flex-grow text-xs text-center leading-[15px] md:leading-[22px] text-sky-500">
          What is going on in Gloryhills
        </div>
      </div>
    </header>
    </main>
  );
}
