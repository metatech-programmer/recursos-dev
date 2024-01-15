import React from "react";
import links from "./components/Links/links.json";
import LinkMidu from "./components/links-midu/LinksMidu";
import LinkOwn from "./components/links-own/LinksOwn";

import "./App.css";

function App() {
	return (
		<>
			<div id="top" />
			<main className="w-screen h-auto bg-gradient-to-b from-zinc-950 to-100% to-zinc-800 pt-10">
				<h1 className="font-bold text-zinc-300 text-3xl md:text-5xl text-center ">
					&#128526; &middot; Recursos Dev &middot; &#128526;
				</h1>
				<hr className="w-11/12 mx-auto mt-10 border-zinc-900" />

				<div
					className="  p-8 sm:p-12 md:p-32 text-slate-100 flex flex-wrap justify-center items-center gap-3 overflow-y-scroll w-full h-full  y-10"
					style={{ backgroundImage: `url('/icon.svg')` }}
				>
					<LinkOwn jsonData={links} />
					<LinkMidu />
				</div>

				<a
					className="p-4 w-80 h-80 text-3xl font-extrabold bg-white rounded-full drop-shadow-2xl shadow-black hover:bg-sky-600 transition-all active:ring-4 hover:scale-125 hover:text-white ring-offset-white sticky bottom-8 md:left-[90%] left-[85%] z-50  mt-[110vh] "
					id="back-top"
					href="#top"
				>
					&#8593;
				</a>
			</main>
			<footer className="fixed bottom-0 w-screen text-center bg-gradient-to-b from-transparent to-gray-950 text-white text-opacity-20 hover:text-opacity-100 font-semibold lg:opacity-5 hover:opacity-95 py-1 z-50  ">
				<a
					className="hover:underline underline-offset-4"
					href="https://github.com/metatech-programmer"
					target="_blank"
					rel="noopener noreferrer"
				>
					Development by Metatech - 2024
				</a>
			</footer>
		</>
	);
}

export default App;
