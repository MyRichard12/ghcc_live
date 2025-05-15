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
        allMdx {
      nodes {
        frontmatter {
        category
        date
        description
        externalLink
        featuredImage
        location
        query
        title
        link
      }
      body
      }
    }  
    }
  `);


  let homeData = context.homeJson;

  let auxQueries = context.allMdx;


  let pseudoHomeHighlight = auxQueries.nodes.map((mdxData, index) => {
      const {link, title, featuredImage, category, location, query} = mdxData.frontmatter

      return {
        category,
        content: [{
          image: featuredImage,
          title,
          location,
          link
        }]
      }
  });

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
    <div className="bg-slate-100 roboto flex flex-col w-full">
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
      
      {/* happening next events */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:px-20 px-4">
        
       {pseudoHomeHighlight
  .filter(logic => logic.category === "Happening Next")
  .map(logic => (
    <ImageGridSample
      key={logic.id}
      setup={{ variant: "highlight", content: logic.content }}
    />
  ))}
 
      </div>
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
  <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-full flex flex-col justify-center">
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
  </div>
</section>
</div>
      <FooterSection />
    </div>
  );
};

export default Home;
