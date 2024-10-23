import React from "react";
import { Navigation } from "./navigation";
import { Button } from "./button";


/**
 * 
 * @param {heading, image, description, variant, button} heading : string, image : string, description : string, variant: (main, other), button: boolean, buttonText: object, buttonText.text
 * @returns 
 */
export const HeroSection = ({ heading, image, description, variant, button, buttonText }) => {
  return (
    <main
      style={{ backgroundImage: `url(${image})` }}
      className="flex flex-col items-center gap-y-6 pb-[76px] bg-cover w-full xl:h-screen text-xl leading-6 text-white"
    >
      <Navigation />
      <header className="self-stretch px-8 md:pl-24 lg:pr-80 pt-12 xl:pt-36 text-2xl sm:text-3xl md:text-[48px] lg:text-[58px] xl:text-[60x] font-bold md:leading-[58px] md:tracking-widest">
        {variant == "main" && (
          <>
            <p>{"Welcome to "}</p>
            <p>{heading}</p>
          </>
        )}
        {variant == "other" && (
          <>
            <p>{heading}</p>
          </>
        )}
      </header>
      <div className="flex text-sm md:text-lg items-center self-stretch px-8 md:pl-24 md:pr-20 font-normal">
        <p>{description}</p>
      </div>
      {button === true && 
      <Button variant={'hero'} text={buttonText} />
      }
    </main>
  );
};

export const PureNavigation = () => {
  return(
    <main
      className="bg-gray-700 flex flex-col items-center gap-y-6 bg-cover w-full text-xl leading-6 text-white"
    >
   <Navigation />
    </main>
  )
}