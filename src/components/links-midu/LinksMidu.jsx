import React, { useState, useEffect } from "react";
import axios from "axios";

const LinkMidu = () => {
	const [jsonData, setJsonData] = useState({ links: [] });

	useEffect(() => {
		const fetchLinks = async () => {
			try {
				const response = await axios.get(
					"https://midu-links.vercel.app/api/links",
				); // Reemplaza con la URL de tu API
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
					<span>
						<span className="text-3xl font-semibold  bg-zinc-950  md:hover:opacity-90 opacity-5  w-full h-full flex place-items-end hover:items-center justify-center p-5 active:text-4xl transition-all ">
							{new URL(enlace.link).pathname.replace("/", "")}
						</span>
						<span className=" text-5xl top-12 right-6 font-semibold text-white bg-black w-full h-full flex items-center justify-center p-5 ">
							web {new URL(enlace.link).pathname.replace("/", "")}
						</span>
					</span>
				</a>
			))}
		</>
	);
};

export default LinkMidu;
