import React from "react";

const LinkOwn = ({ jsonData }) => {
	const medidas = ["30", "40", "50", "60"];

	// Ordena los enlaces por el atributo 'link'
	const enlacesOrdenados = jsonData.links
		.slice()
		.sort((a, b) => a.localeCompare(b));

	return (
		<>
			{enlacesOrdenados.map((enlace, index) => (
				<a
					className="h-72 border break-words text-balance overflow-hidden hover:bg-sky-900 hover:shadow-sky-400 shadow-md hover:scale-105 z-0 hover:z-10 transition-all rounded-lg active:scale-110 active:shadow-sky-600 w-full md:w-1/3 lg:w-1/4"
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					href={enlace}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						backgroundImage: `url(${`https://ui-avatars.com/api/?name=${new URL(
							enlace,
						).hostname.replace(
							"https://",
							"",
						)}&background=random&color=fff&size=128`})`,
						backgroundSize: "cover",
						backgroundPosition: "left",
					}}
				>
					<span className="flex flex-col h-full">
						<span className="text-3xl font-semibold  bg-zinc-950  md:hover:opacity-90  opacity-5  w-full h-full flex place-items-start hover:items-center justify-center p-5 active:text-4xl transition-all text-balance text-center">
							{new URL(enlace).hostname}
						</span>

						<span className="text-xl font-semibold  bg-zinc-950  w-full h-1/4  text-center py-2  transition-all text-pretty ">
							{new URL(enlace).hostname} (web)
						</span>
					</span>
				</a>
			))}
		</>
	);
};

export default LinkOwn;
