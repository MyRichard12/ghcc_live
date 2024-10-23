import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import FooterSection from "../../templates/FooterSection";
import { Button, Cta, HeroSection, ImageGridSample, SuperGrid, TopHanger } from "../library";

import HeroImg from "/src/images/main-bgg.jpg";
import K1 from "/src/images/k5.jpg";
import K2 from "/src/images/k2.jpg";
import K3 from "/src/images/k1.jpg";
import K4 from "/src/images/k4.jpg";
import { SiteMeta } from "../General";


let homeHighlight = {
  variant: "highlight",
};

let homeResource = {
  variant: "resource",
};

const Home = () => {
  const context = useStaticQuery(graphql`
    query {
      homeJson {
        heroHeading
        heroDescription
        ctas {
          quote
          scripture
        }
        hangers {
          description
          title
        }
        about_us {
          title
          content {
            body
            hasMore
            title
          }
        }
        content_grid_1 {
          title
          content {
            title
            subTitle
            body
            buttons {
              text
              variant
            }
          }
        }
      }
    }
  `);

  let homeData = context.homeJson;

  let gridOne = {
    hasImage: false,
    indentTitle: homeData.about_us.title,
    align: "left",
    content: homeData.about_us.content,
  };

  let gridTwo = {
    hasImage: false,
    hasMore: false,
    indentTitle: homeData.content_grid_1.title,
    align: "right",
    content: homeData.content_grid_1.content,
  };

  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-100 roboto flex flex-col w-fit">
      <SiteMeta />
      <HeroSection
        variant={`main`}
        image={HeroImg}
        heading={homeData.heroHeading}
        description={homeData.heroDescription}
        button={true}
        buttonText={`Partner With us`}
      />
      <Cta content={homeData?.ctas?.length > 0 && homeData.ctas[0]} />
      <SuperGrid setup={gridOne} />
      <TopHanger content={homeData.hangers[0]} />
      <ImageGridSample setup={homeHighlight} />
      {/* appendix buttons */}
      <div className="w-full flex justify-center py-10">
        <Button variant={`others`} text={`Events Calendar`} href="/event"/>
      </div>
      {/* <MissionSection /> */}
      <SuperGrid setup={gridTwo} />
      <TopHanger content={homeData.hangers[1]} />
      <ImageGridSample setup={homeResource} />
      <div className="w-full flex justify-center py-10">
        <Button variant={`others`} text={`View Blog`} href="https://medium.com/@gloryhillscommunitychurch" />
      </div>
      <Cta content={homeData.ctas[1]} />
      <div><section class="bg-zinc-50 overflow-hidden">
  <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
    <div class="flex flex-col sm:flex-row mx-auto space-x-4">
      <a href="#" aria-label="Image 1 Description">
        <img src={K4}
             class="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-64 w-full object-cover hover:scale-150 transform origin-bottom" 
             alt="Description of the first image"/> 
      </a>
      <a href="#" aria-label="Image 2 Description">
        <img src={K3}
             class="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-64 w-full object-cover hover:scale-150 transform origin-bottom" 
             alt="Description of the second image"/> 
      </a>
      <a href="#" aria-label="Image 3 Description">
        <img src={K2}
             class="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-64 w-full object-cover hover:scale-150 transform origin-bottom" 
             alt="Description of the third image"/> 
      </a>
      <a href="#" aria-label="Image 4 Description">
        <img src={K1}
             class="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-64 w-full object-cover hover:scale-150 transform origin-bottom" 
             alt="Description of the fourth image"/> 
      </a>
    </div> 

    <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div class="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="flex w-0 flex-1 items-center p-4">
          <div class="w-full">
            <p class="text-sm font-medium text-neutral-900">Tutorial</p>
            <p class="mt-1 text-sm text-neutral-500">
              How to create animated image cards with Tailwind CSS and Astrojs
            </p>
            <p class="mt-2 text-xs text-orange-500 underline"> 
              <a href="https://lexingtonthemes.com" target="_blank">by © Lexington Themes</a>
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col divide-y divide-neutral-200">
            <div class="flex h-0 flex-1"> 
              <a target="_blank" href="https://lexingtonthemes.com/tutorials/how-to-create-animated-images-with-tailwind-css-and-astro-js/" 
                 class="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                 aria-label="Read the tutorial on creating animated images">
                 Tutorial
              </a> 
            </div>
            <div class="flex h-0 flex-1"> 
              <a target="_blank" href="https://github.com/UnwrappedDesign/lexington-tutorials/tree/main/src/pages/simplified-cards" 
                 class="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                 aria-label="Get the code for the tutorial">
                 Get the code
              </a> 
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</section>
</div>
      <FooterSection />
    </div>
  );
};

export default Home;
