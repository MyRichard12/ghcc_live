import React from "react";
import Component from "./Component";
import Union from "../components/assets/Union";
import MissionVisionSeparator from "../components/assets/MissionVisionSeparator";
import ArrowRight from "../components/assets/ArrowRight";


export default function MissionSection() {
  return (
    <section className="z-0 flex flex-wrap justify-center bg-slate-100 min-w-[350px] lg:flex-nowrap lg:w-full">
      <div className="hidden lg:flex z-[2] items-center justify-center bg-neutral-800 p-20 lg:w-1/3">
        <div className="relative z-0 flex items-center justify-end">
          <div className="absolute right-[-184px] top-1/2 transform -translate-y-1/2 z-0 flex h-24 w-[304px] flex-shrink-0 justify-center px-[89px] py-1">
            <div className="relative z-0 flex w-32 flex-shrink-0 items-end pr-11 pt-5">
              <div className="absolute -inset-y-1 right-[-120px] z-0 w-96 flex-shrink-0 text-center lg:text-[48px] xl:text-[66px] font-medium leading-[100px] text-white/10">
                About Us
              </div>
              <Component />
            </div>
          </div>
          <Union className="z-[1] h-44 w-36 flex-shrink-0" />
        </div>
      </div>

      {/* grid starts */}
      <div className="z-[1] bg-slate-100 lg:bg-slate-200 w-full lg:w-2/3 flex flex-shrink-0 flex-col items-center justify-center gap-y-1 p-8 lg:p-20 text-sm font-normal lg:text-xl leading-6 text-zinc-700 shadow-none rounded-md">
        <div className="w-full bg-slate-200 max-w-md lg:max-w-none mx-5 lg:mx-0 rounded-xl lg:rounded-none p-6 lg:p-0 lg:shadow-none shadow-[0_4px_10px_rgba(0,0,0,0.1),0_8px_30px_rgba(0,0,0,0.15)] md:shadow-lg h-64 lg:h-fit lg:mb-10 lg:bg-none flex-grow flex items-center lg:items-start lg:justify-start text-left">
          <div className="w-full">
            <div className="text-[20px] md:text-[32px] font-semibold mb-2 leading-[normal] tracking-[0px] text-blue-700">
              Our Mission
            </div>
            <MissionVisionSeparator className="h-[1px] w-20 flex-shrink-0 mx-0 lg:mx-left" />
            <div className="flex items-center lg:items-start lg:justify-start pt-4">
              <p>
                Therefore, go and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-200 max-w-md lg:max-w-none mx-5 lg:mx-0 mt-6 lg:mt-0 rounded-xl lg:rounded-none p-6 lg:p-0 lg:shadow-none shadow-[0_4px_10px_rgba(0,0,0,0.1),0_8px_30px_rgba(0,0,0,0.15)] md:shadow-lg h-64 lg:h-fit lg:bg-none flex-grow flex items-center lg:items-start lg:justify-start text-left">
          <div className="w-full">
            <div className="text-[20px] md:text-[32px] font-semibold mb-2 leading-[normal] tracking-[0px] text-blue-700">
              Our Vision
            </div>
            <MissionVisionSeparator className="h-[1px] w-20 flex-shrink-0 mx-0 lg:mx-left" />
            <div className="flex items-center lg:items-start lg:justify-start pt-4">
              <p>
                To fully equip and perfect the saints (God's people) for works of service, to build up the body of Christ [the church], until we all reach oneness in the faith and in the knowledge of the Son of God.
              </p>
            </div>
            <div className="hidden lg:flex items-center lg:items-start lg:justify-start pt-4">
              <button className="text-blue-700">Learn More</button>
              <ArrowRight className="h-6 w-6 flex-shrink-0 ml-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-start lg:justify-start pt-0">
              <button className="text-blue-700">Learn More</button>
              <ArrowRight className="h-6 w-6 flex-shrink-0 ml-2" />
            </div>
    </section>
  );
}
