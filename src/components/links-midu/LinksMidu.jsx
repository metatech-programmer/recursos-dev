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
					className="h-72 border break-words text-balance overflow-hidden hover:bg-sky-900 hover:shadow-sky-400 shadow-md hover:scale-105 z-0 hover:z-10 transition-all rounded-lg active:scale-110 active:shadow-sky-600 w-full md:w-auto"
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					href={`${enlace.link}`}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						backgroundImage: `url(${`https://ui-avatars.com/api/?name=${new URL(
							enlace.link,
						).pathname.replace("/", "")}&format=svg&background=random&color=0D8ABC&size=128`})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<span>
						<span className="text-3xl font-semibold md:hover:bg-black bg-black md:bg-transparent opacity-40 md:opacity-5 md:hover:opacity-40 w-full h-full flex items-center justify-center p-5 ">
							{new URL(enlace.link).pathname.replace("/", "")}
						</span>
					</span>
				</a>
			))}
		</>
	);
};

export default LinkMidu;
