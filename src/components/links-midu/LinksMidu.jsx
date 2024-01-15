import React, { useState, useEffect } from "react";
import axios from "axios";

const Link = ({ link, thumbnail }) => (
  <a
    className="h-60 md:h-72 border break-words text-balance overflow-hidden hover:bg-sky-900 hover:shadow-sky-400 shadow-lg hover:scale-105 z-0 hover:z-10 transition-all rounded-lg active:scale-110 active:shadow-sky-600 w-full md:w-1/3 lg:w-1/4"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundImage: `url(${thumbnail})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* ... Contenido del enlace */}
  </a>
);

const LinkMidu = () => {
  const [jsonData, setJsonData] = useState({ links: [] });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("https://midu-links.vercel.app/api/links");
        setJsonData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
      }
    };

    fetchLinks();
  }, []);

  return (
    <>
      {jsonData.links.length > 0 ? (
        jsonData.links.map(({ link, thumbnail }) => (
          <Link key={link} link={link} thumbnail={thumbnail} />
        ))
      ) : (
        <p>No se encontraron enlaces.</p>
      )}
    </>
  );
};

export default LinkMidu;
