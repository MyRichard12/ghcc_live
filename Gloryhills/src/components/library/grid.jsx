import React from "react";
import Begat from "../../images/begat.jpg";
import Wed from "../../images/wed.jpg";
import Acts from "../../images/acts.jpg";
import Disc from "../../images/disc.webp";
import Father from "../../images/father.webp";
import Purp from "../../images/purp.webp";

import MissionVisionSeparator from "../../components/assets/MissionVisionSeparator";
import { LeftHanger, RightHanger } from "./hanger";
import { AddMore, Button } from "./button";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import LocationMarker from "../assets/LocationMarker";

/**
 * @param {setup}
 * setup : object,
 * setup.hasImage: boolean,
 * setup.image,
 * setup.hasMore
 * setup.indentTitle : text,
 * setup.align: string,
 * setup.content: array,
 * setup.content[]: object,
 * setup.content[].title: string,
 * setup.content[].subTitle: string,
 * setup.content[].body: array | string
 * @returns
 */

export const SuperGrid = ({ setup }) => {

  let staticImage = setup.imageData

  return (
    <section
      className={`z-0 ${setup?.align == "left" && `flex flex-wrap`} ${
        setup?.align == "right" && `flex ${setup.hasImage ? `lg:flex-row-reverse md:flex-row-reverse flex-wrap` : `flex-row-reverse`}`
      }  justify-center ${!setup.hasImage && `bg-slate-100`} w-full h-fit`}
    >
      <div className={`${!setup.hasImage && `hidden lg:p-20 bg-neutral-800` || `lg:px-10` } lg:flex z-[2] items-center justify-center p-2 w-full lg:w-1/3`}>
       {/* grid image flows here */}
        {setup?.hasImage === true && 
        (setup?.hasImage === true && setup?.staticImage === true) ? <StaticImage src={'../../../../'+staticImage} alt={`static_image`} /> : <GatsbyImage image={setup.imageData} alt={setup.indentTitle} />}
        {setup?.hasImage === false && setup?.align === "left" && (
          <LeftHanger text={setup?.indentTitle} />
        )}
        {setup?.hasImage === false && setup?.align === "right" && (
          <RightHanger text={setup?.indentTitle} />
        )}
      </div>

      {/* grid starts and loop too */}
      <div className={`z-[1] ${!setup.hasImage && `bg-slate-100 lg:bg-slate-100`} w-full lg:w-2/3 flex flex-shrink-0 flex-col justify-center gap-y-1 p-2 lg:p-20 text-sm font-normal lg:text-xl leading-6 text-zinc-700 shadow-none`}>
        {typeof setup.content === "object" && setup.content.length > 0 && setup?.content.map((value, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-md lg:max-w-none lg:mx-0 rounded-xl lg:rounded-none p-6 lg:px-10 lg:h-fit lg:mb-6 lg:bg-none flex flex-col items-center lg:items-start lg:justify-start text-justify"
              >
                <div className="w-full">
                  <div className="text-[20px] md:text-[32px] font-semibold mb-2 leading-[normal] tracking-[0px] text-blue-700">
                    {value?.title}
                  </div>
                  <MissionVisionSeparator className="h-[1px] w-20 flex-shrink-0 mx-0 lg:mx-left" />
                  {value?.subTitle && (
                    <div className="py-2 text-lg font-bold">
                      {value?.subTitle}
                    </div>
                  )}
                  <div className="flex flex-col items-center lg:items-start lg:justify-start pt-4 mb-4">
                    {typeof value?.body === "object" ? (
                      value?.body.map((body, index) => (
                        <p className="mb-2" key={index}>
                          {body}
                        </p>
                      ))
                    ) : (
                      <p className="mb-2">{value?.body}</p>
                    )}
                    {value?.hasMore === true && <AddMore text={`Learn more`} href="/about-us"/>}
                  </div>
                </div>
                {/* appendix buttons flows here */}
                {value?.buttons && value?.buttons.length > 0 && (
  <Button
    variant={value.buttons[0]?.variant}
    text={value.buttons[0]?.text}
    href="https://youtu.be/oU_ywPEBL2Y?si=fRYeQXWx88DeGoiR"
  />
)}

              </div>
            );
          })}
      </div>
    </section>
  );
};
export const SermonGrid = ({ setup }) => {
  return (
    <>
  <div class="container lg:py-20 py-8">
    <div class="row gx-5 mt-12 items-center">
        <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
            <div class="text-container">
                <h2 class="lg:text-4xl">
                   Add a New Employee
                </h2>
                <div class="mt-6 text-dark lg:-ml-4">
                    <p class="mb-2 flex items-center rounded px-4">      
                      This feature simplifies the onboarding process, allowing you to integrate new employees into your practice seamlessly and ensuring that everyone is equipped to provide top-notch care to clients.                     </p>
                </div>
            </div>
        </div>
        <div class="lg:col-7 lg:order-2">
          <div class="relative">
              <video class="w-full h-auto" autoplay loop muted playsinline>
                  <source src="images/videos/staff.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
      </div>
        </div>
    </div>
 
    </>
    )
  }


export const ImageGridSample = ({ setup }) => {
  return (
    <>
    {setup?.variant === "resource" && (
      <div className="w-full grid grid-cols-1  md:grid-cols-3 gap-10 md:px-20 px-4">
      <div className="w-full flex flex-col">
        {/* Image */}
        <div className="h-[350px] w-full mb-4 border-2">
          <img src={Purp} alt="Discovering Purpose" className="w-full h-full object-cover" />
        </div>
        <div className="text-black font-bold text-lg mb-2">Discovering Purpose: What is God’s purpose for me?</div>
        <div className="text-xs font-normal text-black mb-2">on <span className="font-medium pr-3">Jan 26, 2024</span>       by <span className="pl-1 font-medium">GHCC Scribe</span></div>
        <AddMore text={`Read More`} href="https://medium.com/@gloryhillscommunitychurch/discovering-purpose-what-is-gods-purpose-for-me-a6478747a751"/>
      </div>
    
      <div className="w-full flex flex-col">
        {/* Image Placeholder */}
        <div className="h-[350px] w-full mb-4 border-2 flex items-center justify-center bg-gray-100">
        <img src={Father} alt="Fatherhood" className="w-full h-full object-cover" />
        </div>
        <div className="text-black font-bold text-lg mb-2">The Fatherhood of God</div>
        <div className="text-xs font-normal text-black mb-2">on <span className="font-medium pr-3">April 26, 2024</span>       by <span className="pl-1 font-medium">GHCC Scribe</span></div>
        <AddMore text={`Read More`} href="https://medium.com/@gloryhillscommunitychurch/discovering-purpose-what-is-gods-purpose-for-me-a6478747a751"/>
      </div>
    
      <div className="w-full flex flex-col">
        {/* Image Placeholder */}
        <div className="h-[350px] w-full mb-4 border-2 flex items-center justify-center bg-gray-100">
        <img src={Disc} alt="Discipleship" className="w-full h-full object-cover" />
        </div>
        <div className="text-black font-bold text-lg mb-2">The Cost of Discipleship for the Believer</div>
        <div className="text-xs font-normal text-black mb-2">on <span className="font-medium pr-3">Jun 26, 2024</span>       by <span className="pl-1 font-medium">GHCC Scribe</span></div>
        <AddMore text={`Read More`} href="https://medium.com/@gloryhillscommunitychurch/the-cost-of-discipleship-for-the-believer-a3bdd39e54d3"/>
      </div>
    </div>
    
      )}
    {setup?.variant === "highlight" && (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:px-20 px-4">
      <div className="w-full flex flex-col">
        {/* Image */}
        <div className="h-[350px] w-full mb-2 border-2">
          <img src={Begat} alt="Believer's Gathering" className="w-full h-full object-cover " />
        </div>
        <div className="text-black font-bold text-md">Believer's Gathering</div>
        <div className="text-sm mb-2 font-medium underline text-sky-600"><a href="http://bit.ly/Begat2024">Register here</a></div>
      </div>
    
      <div className="w-full flex flex-col">
        {/* Image */}
        <div className="h-[350px] w-full mb-2 border-2">
          <img src={Wed} alt="Wed" className="w-full h-full object-cover lg:object-fit" />
        </div>
        <div className="text-black font-bold text-md">Weekly Prayer Meeting</div>
        <div className="text-xs font-normal mb-2 text-sky-600">Wednesday 6:00pm</div>
      </div>
    
      <div className="w-full flex flex-col">
        {/* Image */}
        <div className="h-[350px] w-full mb-2 border-2">
          <img src={Acts} alt="Acts" className="w-full h-full object-cover" />
        </div>
        <div className="text-black font-bold text-md">Acts 13:2</div>
        <div className="text-xs mb-2 font-normal text-sky-600">Last Saturdays of the month @4pm</div>
      </div>
    </div>
    
      )}
    </>
  );
};

export const ImageGrid = ({ setup }) => {
  return (
    <>
    {setup?.variant === "resource" && (
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:px-20 px-4">
        {setup.images.map((data, index) => {
          return (
            <div key={index} className="w-full flex flex-col">
            {/* the image */}
            <GatsbyImage image={data?.image?.childImageSharp?.gatsbyImageData} className="w-full h-full object-cover" alt={data.name} />
            <div className="text-sky-700 text-sm leading-tight tracking-tight md:text-lg font-bold">{data.name}</div>
            <div className="text-xs md:text-md font-normal mb-1">{data.title}</div>
            {data.hasMore && <AddMore text={`Read More`} />}
          </div>
          )
        })}          
      </div>
      )}
    {setup?.variant === "testimonies" && (
      <div className="w-full grid grid-col-1 md:grid-cols-3 gap-10 md:px-20 px-4">
        {setup.images.map((data, index) => {
          return (
            <div key={index} style={{ backgroundImage: `url(${data.image.childImageSharp.fluid.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} className="w-full h-[500px] flex flex-col rounded-xl relative">
            {/* the image */}
            <div className="text-black font-bold text-md bg-opacity-80 bg-blue-900 p-3 flex flex-col absolute bottom-6">
              <span className="text-white text-sm mb-2">
                {data.quote}
              </span>
              <span className="text-white text-sm text-right">
                {data.subject}
              </span>
            </div>
          </div>
          )
        })}          
      </div>
      )}
      
    {setup?.variant === "events" && (
      <div className="w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:px-20 px-4">
        {setup.images.map((data, index) => {
          return (
            <div key={index} style={{ backgroundImage: `url(${data.image.childImageSharp.fluid.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} className="w-full h-[400px] flex flex-col rounded-xl relative">
            {/* the image */}
            <div className="text-black font-bold text-md bg-blue-900 p-3 flex flex-col absolute bottom-0">
            <span className="text-sky-100 text-lg font-semibold">
                {data.title}
              </span>
              <div className="flex items-center gap-2 mb-1">
                <LocationMarker className="w-5 h-5" />
              <span className="text-white text-sm">
                {data.location}
              </span>
              </div>
              <span className="text-white text-sm">
                {data.quote}
              </span>
              
            </div>
          </div>
          )
        })}          
      </div>
      )}
    {setup?.variant === "highlight" && (
      <div className="w-full grid grid-col-1 md:grid-cols-3 gap-10 md:px-20 px-4">
          <div className="w-full flex flex-col">
            {/* the image */}
            <GatsbyImage image={setup.imageData} alt={setup.name} />
            <div className="text-black font-bold text-md">Heading</div>
            <div className="text-md mb-2  text-sky-600">Contents flow</div>
          </div>
      </div>
      )}
    </>
  );
};
