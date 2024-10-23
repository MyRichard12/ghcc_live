import React from "react";
import ArrowRight from "../../components/assets/ArrowRight";

/**
 * 
 * @param {*} param0
 * variant: string >> 'hero' | 'navigation' | 'others', 
 * text: string,
 * action: function
 * @returns 
 */
export const Button = ({ variant, text, href, action }) => {
  return (
    <>
      <div className="flex self-stretch md:px-2 px-4">
        {variant == "hero" && (
          <a href={href}><button className="flex items-center justify-center ml-4 rounded-lg bg-sky-500 px-4 md:px-10 py-3 md:py-5 text-center text-base font-bold shadow-md md:ml-24 ml-0">
            {text}
          </button></a>
        )}
        {variant == "navigation" && (
         <a href={href}><button className="flex items-center justify-center rounded-lg bg-sky-500 px-4 md:px-10 py-1 md:py-2 text-center text-base font-bold shadow-md">
         {text}
       </button></a>
        )}
        {variant == "others" && (
          <a href={href}><button className="flex items-center justify-center rounded-lg bg-sky-500 px-5 md:px-10 py-2 md:py-3 text-center text-base font-bold shadow-md text-white">
            {text}
          </button></a>
        )}
        {variant == "outline" && (
          <a href={href}><button className="flex items-center justify-center rounded-lg border-sky-500 border-2 px-5 md:px-10 pb-[15px] py-2 md:py-3 text-center text-base text-sky-500 font-normal shadow-md">
            {text}
          </button></a>
        )}
      </div>
    </>
  );
};


/**
 * @param {text, string} text: string, action: function
 * @returns 
 */
export const AddMore = ({text, href, string}) => {
  return (
    <div className="flex items-center lg:justify-start pt-0">
            <a href={href} target="_blank" rel="noopener noreferrer"><button className="text-xs underline font-normal text-blue-700">{text}</button></a>
            <ArrowRight className="h-6 w-6 flex-shrink-0 ml-2" />
          </div>
  )
}
