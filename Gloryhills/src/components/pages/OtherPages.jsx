// kindly note: this is a fully-templated page; driven by a modular-like component-based system..

// i wish i can create a documentation. But that is the magic of gatsby. Go to the docunentation to learn more.

// this single-component is responsible for all other major menu pages, and as well will be applied in more static use-cases
import React from "react";
import { graphql } from "gatsby";
import { SiteMeta } from "../General";

import HeroImg from "/src/images/ff.jpg";
import { Cta, HeroSection, ImageGrid, SuperGrid, SermonGrid, TopHanger } from "../library";
import FooterSection from "../../templates/FooterSection";
import K1 from "/src/images/s3.jpg";
import K2 from "/src/images/s2.jpg";
import K3 from "/src/images/s1.jpg";
import K4 from "/src/images/s1.png";

export const query = graphql`
  query ($slug: String!) {
    othersJson(slug: { eq: $slug }) {
      slug
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
      sermon_grid {
      content {
        title
        subTitle
        body
      }
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
      events_grid {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        content {
          body
          subTitle
          title
        }
      }
      outreaches {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        content {
          body
          subTitle
          title
        }
      }
      leadership {
        sub_title
        leadership_team {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
          title
          url
        }
      }
      mission_grid {
        title
        content {
          body
          title
        }
      }
      vision_grid {
        title
        content {
          title
          body
        }
      }
      lead_pastor {
        title
        image_link {
          childImageSharp {
            gatsbyImageData
          }
        }
        content {
          title
          body
        }
      }
      testimonies {
        quote
        subject
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      events_thumbnail {
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        quote
        location
        title
      }
    }
  }
`;

const OtherPages = ({ data }) => {
  const pageData = data.othersJson;

  const { slug } = pageData;

  let gridOne = {
    hasImage: false,
    indentTitle: pageData?.mission_grid?.title,
    align: "right",
    content: pageData?.mission_grid?.content,
  };

  let events_grid1 = {
    hasImage: true,
    imageData:
      pageData?.events_grid?.length > 0 &&
      pageData?.events_grid[0]?.image?.childImageSharp?.gatsbyImageData,
    indentTitle: null,
    align: "right",
    content:
      pageData?.events_grid?.length > 0 && pageData?.events_grid[0]?.content,
  };
  let sermon_grid = {
      hasImage: false,
      indentTitle: pageData?.mission_grid?.title,
      align: "right",
      content: pageData?.mission_grid?.content,
    };

  let events_grid2 = {
    hasImage: true,
    imageData:
      pageData?.events_grid?.length > 0 &&
      pageData?.events_grid[1]?.image?.childImageSharp?.gatsbyImageData,
    indentTitle: null,
    align: "left",
    content:
      pageData?.events_grid?.length > 0 && pageData?.events_grid[1]?.content,
  };
  
  let events_grid3 = {
    hasImage: true,
    imageData:
      pageData?.outreaches?.length > 0 &&
      pageData?.outreaches[0]?.image?.childImageSharp?.gatsbyImageData,
    indentTitle: null,
    align: "right",
    content:
      pageData?.outreaches?.length > 0 && pageData?.outreaches[0]?.content,
  };
 
  let events_grid4 = {
    hasImage: true,
    imageData:
      pageData?.outreaches?.length > 0 &&
      pageData?.outreaches[1]?.image?.childImageSharp?.gatsbyImageData,
    indentTitle: null,
    align: "left",
    content:
      pageData?.outreaches?.length > 0 && pageData?.outreaches[1]?.content,
  };
  
  let events_grid5 = {
    hasImage: true,
    imageData:
      pageData?.outreaches?.length > 0 &&
      pageData?.outreaches[2]?.image?.childImageSharp?.gatsbyImageData,
    indentTitle: null,
    align: "right",
    content:
      pageData?.outreaches?.length > 0 && pageData?.outreaches[2]?.content,
  };
  
  let events_grid6 = {
    hasImage: true,
    imageData:
      pageData?.outreaches?.length > 0 &&
      pageData?.outreaches[3]?.image?.childImageSharp?.gatsbyImageData,
    indentTitle: null,
    align: "left",
    content:
      pageData?.outreaches?.length > 0 && pageData?.outreaches[3]?.content,
  };

  let gridTwo = {
    hasImage: false,
    indentTitle: pageData?.vision_grid?.title,
    align: "left",
    content: pageData?.vision_grid?.content,
  };

  let gridThree = {
    hasImage: true,
    imageData:
      pageData?.lead_pastor?.image_link?.childImageSharp?.gatsbyImageData,
    indentTitle: pageData?.lead_pastor?.title,
    align: "right",
    content: pageData?.lead_pastor?.content,
  };

  let leadershipGrid = {
    variant: "resource",
    images: pageData?.leadership?.leadership_team,
  };

  let testimonyGrid = {
    variant: "testimonies",
    images: pageData?.testimonies,
  };

  let eventsThumbnail = {
    variant: "events",
    images: pageData?.events_thumbnail,
  };

  return (
    <div className="max-w-screen-3xl mx-auto bg-slate-100 roboto flex flex-col w-fit">
      <SiteMeta
        title={pageData.heroHeading}
        description={pageData.heroDescription}
      />
      <HeroSection
        variant={`other`}
        image={HeroImg}
        heading={pageData.heroHeading}
        description={pageData.heroDescription}
      />
      {slug === "about-us" && <SuperGrid setup={gridOne} />}
      {slug === "about-us" && <Cta content={pageData.ctas[0]} />}
      {slug === "about-us" && <SuperGrid setup={gridTwo} />}
      <TopHanger content={pageData.hangers[0]} />
            {slug === "sermon" && <div> <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">

    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage: `url(${K4})`,
      }}>
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=xTEio7mLZ8c"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 font-bold">Listen</a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl leading-0 font-semibold">25</span>
          <span className="-mt-3">May</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a href="https://www.youtube.com/watch?v=xTEio7mLZ8c"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Listen
        </a>
      </main>
    </div>

    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage: `url(${K1})`,
      }}>
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=0lVoeZf9FFQ&t=3776s"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 font-bold">Listen</a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl leading-0 font-semibold">10</span>
          <span className="-mt-3">Mar</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a href="https://www.youtube.com/watch?v=0lVoeZf9FFQ&t=3776s"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Listen
        </a>
      </main>
    </div>

    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage: `url(${K2})`,
      }}>
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=HsIlFfsRt4c"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 font-bold">Listen</a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl leading-0 font-semibold">20</span>
          <span className="-mt-3">Jan</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a href="https://www.youtube.com/watch?v=HsIlFfsRt4c"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Listen
        </a>
      </main>
    </div>

    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage:`url(${K3})`,
      }}>
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=srj86o_9PBU&t=4s"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 font-bold">Listen</a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl leading-0 font-semibold">25</span>
          <span className="-mt-3">May</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a href="https://www.youtube.com/watch?v=srj86o_9PBU&t=4s"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Listen
        </a>
      </main>
    </div>

  </div>
</div>

</div>
}

      {slug === "about-us" && <SuperGrid setup={gridThree} />}

      {slug === "event" && <SuperGrid setup={events_grid1} />}
      {slug === "event" && <SuperGrid setup={events_grid2} />}

      <TopHanger content={pageData.hangers[1]} />
      {slug === "about-us" && (
        <div className="lg:px-36 px-10 py-2 text-gray-800">
          {pageData.leadership.sub_title}
        </div>
      )}
      {slug === "about-us" && <ImageGrid setup={leadershipGrid} />}
    
      {slug === "event" && <ImageGrid setup={eventsThumbnail}  className src= 'pb-10'/>}
{/* This is the testimony section */}
      {/* <TopHanger content={pageData.hangers[2]} /> */}
      {/* {slug === "about-us" && <ImageGrid setup={testimonyGrid} />} */}

      {slug === "event" && <SuperGrid setup={events_grid3} />}

      {slug === "event" && <SuperGrid setup={events_grid4} />}

      {slug === "event" && <TopHanger content={pageData.hangers[3]} />}
      {slug === "event" && <SuperGrid setup={events_grid5} />}
      {slug === "event" && <SuperGrid setup={events_grid6} />}


      <FooterSection />
    </div>
  );
};

export default OtherPages;
