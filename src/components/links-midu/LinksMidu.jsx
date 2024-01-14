import React from "react";

const LinkMidu = ({ jsonData }) => {
	const medidas = ["30", "40", "50", "60"];
	return (
		<>
			{jsonData.links.map((enlace, index) => (
				<a
					className="h-72 border break-words text-balance overflow-hidden  hover:bg-sky-900 hover:shadow-sky-400 shadow-md hover:scale-105 z-0 hover:z-10 transition-all rounded-lg active:scale-110 active:shadow-sky-600 w-full md:w-auto"
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					href={enlace.link} 
					target="_blank"
					rel="noopener noreferrer"
					style={{
						backgroundImage: `url(${`/thumbnails/${jsonData.links[index].thumbnail}.webp`})`,
						backgroundSize: "cover",
						backgroundPosition: "left",
					}}
				>
					<span>
						<span className="text-3xl font-semibold md:hover:bg-black bg-black md:bg-transparent opacity-40 md:opacity-5 md:hover:opacity-40 w-full h-full flex items-center justify-center p-5 ">
							{new URL(enlace.link).hostname}
						</span>
					</span>
				</a>
			))}
		</>
	);
};

export default LinkMidu;
