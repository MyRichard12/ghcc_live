import React, { useState } from "react";

import ChurchLogo from "/src/images/church-svg.svg";
import { Button } from "./button";
import { graphql, Link, useStaticQuery } from "gatsby";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuData = useStaticQuery(graphql`
    query {
  allMenuJson {
    nodes {
      title
      url
    }
  }
}
    `)

    let menu = menuData.allMenuJson.nodes

  return (
    <>
      <nav className="bg-transparent text-xl leading-6 text-white w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            to="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              className="w-28 md:h-11 md:w-48 flex-shrink-0 object-cover object-center"
              src={ChurchLogo}
              loading="lazy"
            />
          </a>

          <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              type="button"
              className="ml-16 hover:bg-sky-800 focus:ring-4 px-5 focus:outline-none focus:ring-sky-300 rounded-[10px] bg-sky-500 md:px-[30px] py-2.5 text-center [box-shadow:inset_2px_2px_4px_0px_rgba(0,_0,_0,_0.2)]"
            >
              <p className="text-xl font-medium leading-6 text-white">Give</p>
            </button> */}

            {/* <Button variant={`navigation`} text={"Give"} /> */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 text-black bg-white h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg lg:space-x-8 rtl:space-x-reverse bg-black md:bg-transparent md:hover:bg-transparent hover:bg-gray-800 md:flex-row text-xl leading-6 text-white">
              {menu?.length > 0 && menu.map((value, index) => {
                return (
                  <span key={index}>
                    {index > 0 ?
                    <Link
                        to={`/`+value.url}
                        className="md:hover:bg-transparent block md:hover:bg-transparent hover:text-sky-500 py-2 px-3 text-white "
                        aria-current="page"
                      >
                        {value.title}
                    </Link> : <Link
                        to="/"
                        className="md:hover:bg-transparent block md:hover:bg-transparent hover:text-sky-500 py-2 px-3 text-white "
                        aria-current="page"
                      >
                        {value.title}
                    </Link> }
                  </span>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
