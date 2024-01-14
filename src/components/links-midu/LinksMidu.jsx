import React, { useState, useEffect, useContext } from "react";

const LinkMidu = ({ jsonData }) => {
	const medidas = ["30", "40", "50", "60"];
	return (
		<>
			{jsonData.links.map((enlace, index) => (
				<a
					className={`w-[${
						medidas[Math.floor(Math.random() * 4)]
					}%] h-72 border break-words text-balance overflow-hidden  hover:bg-sky-900 hover:shadow-sky-400 shadow-md hover:scale-105 z-0 hover:z-10 transition-all rounded-lg active:scale-110 active:shadow-sky-600`}
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					href={enlace}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						backgroundImage: `url(${(`/thumbnails/${jsonData.thumbnails[index]}`)})`,
						backgroundSize: "cover", 
						backgroundPosition: "left",
					}}
				>
					<span>
						<span className="text-3xl font-semibold hover:bg-black opacity-5 hover:opacity-40 w-full h-full flex items-center justify-center p-5 ">
							{new URL(enlace).hostname}
						</span>
					</span>
				</a>
			))}
		</>
	);
};

export default LinkMidu;
