import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";

const Load = lazy(() => import("../Load/Load"));
const LinkMidu = () => {
  const [jsonData, setJsonData] = useState({ links: [] });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(
          "https://midu-links.vercel.app/api/links"
        );
        setJsonData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <>
      {jsonData.links.map((enlace, index) => (
        <Suspense fallback={load}>
          <a
            className="h-60 md:h-72  border break-words text-balance overflow-hidden hover:bg-sky-900 hover:shadow-sky-400 shadow-lg hover:scale-105 z-0 hover:z-10 transition-all rounded-lg active:scale-110 active:shadow-sky-600 w-full md:w-1/3 lg:w-1/4"
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            href={`${enlace.link}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundImage: `url(${enlace.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col h-full hover:p-1">
              <span className="text-3xl font-semibold  bg-zinc-950  md:hover:opacity-90 opacity-5  w-full h-full flex place-items-start lg:hover:items-center justify-center p-5 active:text-4xl transition-all text-balance text-center rounded-t-lg">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 hover:w-32 hover:h-32 inline transition-all"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>

              <p className="text-xl font-semibold  bg-zinc-950  w-full h-1/4  text-center py-2  transition-all text-balance rounded-b-lg ">
                {new URL(enlace.link).pathname.replace("/", "")} (web
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mb-1 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                )
              </p>
            </span>
			
          </a>
        </Suspense>
      ))}
    </>
  );
};

export default LinkMidu;
