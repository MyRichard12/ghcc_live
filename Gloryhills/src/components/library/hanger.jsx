import React from "react";
import Ttline from "../../images/Ttline";
import Union from "../../components/assets/Union";

/**
 * @param {'content'} content: object, content.title : string, content.description: string
 * @returns
 */
export const TopHanger = ({ content }) => {
  return (
    <div className="font-roboto_flex flex w-full flex-col gap-y-9 pb-11 text-center mx-auto px-20 pt-16 tracking-wider">
      <div className="relative z-0 flex flex-col items-center gap-y-1.5 pb-3 text-center">
        <Ttline className="absolute inset-y-0 z-0 -top-2" />
        <div className="z-[1] self-stretch text-base md:text-[25px] font-semibold leading-[normal] tracking-[0px]">
          {content && content?.title}
        </div>
        <div className="z-[2] flex items-center justify-center pl-px">
          <div className="flex-grow text-sm text-center leading-[15px] md:leading-[22px] text-sky-500">
            {content && content?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param {text} text : string
 * @returns
 */

export const LeftHanger = ({ text }) => {
  return (
    <div className="relative z-0 flex items-center justify-end">
      <div className="absolute right-[-184px] top-1/2 transform -translate-y-1/2 z-0 flex h-24 w-[304px] flex-shrink-0 justify-center px-[89px] py-1">
        <div className="relative z-0 flex w-32 flex-shrink-0 items-end pr-11 pt-5">
          <div className="absolute -inset-y-1 right-[-120px] z-0 w-96 flex-shrink-0 text-center lg:text-[48px] xl:text-[66px] font-medium leading-[100px] text-white/10">
            {text}
          </div>
          <div className="border-solid border-white text-[24px] font-medium leading-9 text-white">
            {text.split(" ").map((value, index) => {
              return <p key={index}>{value}</p>;
            })}
          </div>
        </div>
      </div>
      <Union className="z-[1] h-44 w-36 flex-shrink-0" />
    </div>
  );
};

/**
 *
 * @param {text} text : string
 * @returns
 */

export const RightHanger = ({ text }) => {
  return (
    <div className="relative z-0 flex items-center justify-end">
      <div className="absolute left-[-184px] top-1/2 transform -translate-y-1/2 z-0 flex h-24 w-[304px] flex-shrink-0 justify-center px-[89px] py-1">
        <div className="relative z-0 flex w-32 flex-shrink-0 items-end pr-11 pt-5">
          <div className="absolute -inset-y-1 left-[-120px] z-0 w-96 flex-shrink-0 text-center lg:text-[48px] xl:text-[66px] font-medium leading-[100px] text-white/10">
            {text}
          </div>
          <div className="border-solid border-white text-[24px] font-medium leading-9 text-white text-right absolute right-0">
            {text.split(" ").map((value, index) => {
              return <p key={index}>{value}</p>;
            })}
          </div>
        </div>
      </div>
      <Union className="z-[1] h-44 w-36 flex-shrink-0 rotate-180" />
    </div>
  );
};